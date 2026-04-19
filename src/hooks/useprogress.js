import { useState, useCallback } from 'react'
import { storage, STORAGE_KEYS, upsertData } from '../utils/storage'
import { toDateKey } from '../utils/datehelper'
import { sm2, GRADE as SRS_GRADE } from '../utils/srs'
import { checkAchievements, ACHIEVEMENT_MAP, XP_REWARDS } from '../utils/achievements'

// ─── Internal helpers ─────────────────────────────────────────
function _addXP(amount, userId) {
  const xp   = storage.get(STORAGE_KEYS.XP, { total: 0 })
  const next = { ...xp, total: (xp.total || 0) + amount }
  storage.set(STORAGE_KEYS.XP, next)
  if (userId) {
    upsertData('user_xp', { user_id: userId, total: next.total })
      .catch(e => console.warn('[xp] sync:', e))
  }
  return next
}

function _checkAndUnlock(state, userId) {
  const current    = storage.get(STORAGE_KEYS.ACHIEVEMENTS, {})
  const currentIds = new Set(Object.keys(current))
  const newIds     = checkAchievements({ ...state, unlockedIds: currentIds })
  if (newIds.length === 0) return []

  const now = Date.now()
  const next = { ...current }
  let totalXp = 0
  const newAchs = []

  for (const id of newIds) {
    next[id] = { unlockedAt: now }
    const ach = ACHIEVEMENT_MAP[id]
    if (ach) { totalXp += ach.xp || 0; newAchs.push(ach) }
  }

  storage.set(STORAGE_KEYS.ACHIEVEMENTS, next)
  if (totalXp > 0) _addXP(totalXp, userId)

  // Sync achievements ke Supabase
  if (userId) {
    const rows = newIds.map(id => ({
      user_id: userId,
      achievement_id: id,
      unlocked_at: new Date(now).toISOString(),
    }))
    upsertData('user_achievements', rows).catch(e => console.warn('[ach] sync:', e))
  }

  window.dispatchEvent(new CustomEvent('hsk:achievement', { detail: newAchs }))
  return newAchs
}

function _updateSRS(wordId, grade, userId) {
  const srs  = storage.get(STORAGE_KEYS.SRS, {})
  const card = srs[wordId] || {}
  const next = sm2(card, grade)
  const updated = { ...srs, [wordId]: { ...card, ...next } }
  storage.set(STORAGE_KEYS.SRS, updated)

  if (userId) {
    upsertData('user_srs', {
      user_id: userId, word_id: wordId,
      interval: next.interval, ease_factor: next.easeFactor,
      next_review: next.nextReview, reps: next.reps,
    }).catch(e => console.warn('[srs] sync:', e))
  }
}

// ─── Hook ─────────────────────────────────────────────────────
export function useProgress(userId = null) {
  const [progress, setProgress] = useState(() =>
    storage.get(STORAGE_KEYS.PROGRESS, {})
  )

  const markSeen = useCallback((level, wordId) => {
    setProgress(prev => {
      const lvl = prev[level] || { seen: [], mastered: [] }
      if (lvl.seen.includes(wordId)) return prev
      const next = { ...prev, [level]: { ...lvl, seen: [...lvl.seen, wordId] } }
      storage.set(STORAGE_KEYS.PROGRESS, next)
      _addXP(XP_REWARDS.WORD_SEEN, userId)

      if (userId) {
        upsertData('user_progress_snapshot', {
          user_id: userId, data: next,
          updated_at: new Date().toISOString(),
        }).catch(e => console.warn('[progress] sync:', e))
      }
      return next
    })
  }, [userId])

  const markMastered = useCallback((level, wordId) => {
    setProgress(prev => {
      const lvl      = prev[level] || { seen: [], mastered: [] }
      const seen     = lvl.seen.includes(wordId) ? lvl.seen : [...lvl.seen, wordId]
      const mastered = lvl.mastered.includes(wordId) ? lvl.mastered : [...lvl.mastered, wordId]
      const next     = { ...prev, [level]: { ...lvl, seen, mastered } }
      storage.set(STORAGE_KEYS.PROGRESS, next)

      _updateSRS(wordId, SRS_GRADE.GOOD, userId)
      _addXP(XP_REWARDS.WORD_MASTERED, userId)

      if (userId) {
        upsertData('user_progress_snapshot', {
          user_id: userId, data: next,
          updated_at: new Date().toISOString(),
        }).catch(e => console.warn('[progress] sync:', e))
      }

      const streak     = storage.get(STORAGE_KEYS.STREAK, { count: 0 })
      const dailyLog   = storage.get(STORAGE_KEYS.DAILY_LOG, {})
      const bookmarks  = storage.get(STORAGE_KEYS.BOOKMARKS, [])
      const quizHist   = storage.get(STORAGE_KEYS.QUIZ_HISTORY, [])
      _checkAndUnlock({ progress: next, streak, dailyLog, bookmarks, quizHistory: quizHist }, userId)

      return next
    })
  }, [userId])

  const unmarkMastered = useCallback((level, wordId) => {
    setProgress(prev => {
      const lvl      = prev[level] || { seen: [], mastered: [] }
      const mastered = lvl.mastered.filter(id => id !== wordId)
      const next     = { ...prev, [level]: { ...lvl, mastered } }
      storage.set(STORAGE_KEYS.PROGRESS, next)
      _updateSRS(wordId, SRS_GRADE.WRONG, userId)

      if (userId) {
        upsertData('user_progress_snapshot', {
          user_id: userId, data: next,
          updated_at: new Date().toISOString(),
        }).catch(e => console.warn('[progress] sync:', e))
      }
      return next
    })
  }, [userId])

  const logActivity = useCallback((studied = 0, correct = 0) => {
    const key    = toDateKey()
    const log    = storage.get(STORAGE_KEYS.DAILY_LOG, {})
    const today  = log[key] || { studied: 0, correct: 0 }
    const newLog = {
      ...log,
      [key]: { studied: today.studied + studied, correct: today.correct + correct },
    }
    storage.set(STORAGE_KEYS.DAILY_LOG, newLog)
    if (correct > 0) _addXP(XP_REWARDS.QUIZ_CORRECT * correct, userId)

    if (userId) {
      upsertData('daily_activity', {
        user_id: userId, activity_date: key,
        words_studied: newLog[key].studied,
        quiz_score: newLog[key].correct,
      }).catch(e => console.warn('[activity] sync:', e))
    }

    const progress   = storage.get(STORAGE_KEYS.PROGRESS, {})
    const streak     = storage.get(STORAGE_KEYS.STREAK, { count: 0 })
    const bookmarks  = storage.get(STORAGE_KEYS.BOOKMARKS, [])
    const quizHist   = storage.get(STORAGE_KEYS.QUIZ_HISTORY, [])
    _checkAndUnlock({ progress, streak, dailyLog: newLog, bookmarks, quizHistory: quizHist }, userId)
  }, [userId])

  const reviewSRS = useCallback((wordId, grade) => {
    _updateSRS(wordId, grade, userId)
    _addXP(grade >= 3 ? XP_REWARDS.QUIZ_CORRECT : 1, userId)
  }, [userId])

  const getLevelProgress = useCallback(
    level => progress[level] || { seen: [], mastered: [] },
    [progress]
  )

  const totalMastered = Object.values(progress).reduce(
    (sum, lvl) => sum + (lvl.mastered?.length || 0), 0
  )

  return {
    progress, markSeen, markMastered, unmarkMastered,
    logActivity, reviewSRS, getLevelProgress, totalMastered,
  }
}