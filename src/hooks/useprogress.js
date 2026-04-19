import { useState, useCallback } from 'react'
import { storage, STORAGE_KEYS } from '../utils/storage'
import { toDateKey } from '../utils/datehelper'
import { sm2, GRADE as SRS_GRADE } from '../utils/srs'
import { checkAchievements, ACHIEVEMENT_MAP, XP_REWARDS } from '../utils/achievements'

// ─── Internal helpers ─────────────────────────────────────────

function _addXP(amount) {
  const xp   = storage.get(STORAGE_KEYS.XP, { total: 0 })
  const next = { ...xp, total: (xp.total || 0) + amount }
  storage.set(STORAGE_KEYS.XP, next)
  return next
}

function _checkAndUnlock(state) {
  const current    = storage.get(STORAGE_KEYS.ACHIEVEMENTS, {})
  const currentIds = new Set(Object.keys(current))
  const newIds     = checkAchievements({ ...state, unlockedIds: currentIds })
  if (newIds.length === 0) return []

  const now  = Date.now()
  const next = { ...current }
  let totalXp = 0
  const newAchs = []

  for (const id of newIds) {
    next[id] = { unlockedAt: now }
    const ach = ACHIEVEMENT_MAP[id]
    if (ach) { totalXp += ach.xp || 0; newAchs.push(ach) }
  }

  storage.set(STORAGE_KEYS.ACHIEVEMENTS, next)
  if (totalXp > 0) _addXP(totalXp)

  // Publish ke window event agar AchievementToast bisa pick up
  window.dispatchEvent(new CustomEvent('hsk:achievement', { detail: newAchs }))
  return newAchs
}

function _updateSRS(wordId, grade) {
  const srs  = storage.get(STORAGE_KEYS.SRS, {})
  const card = srs[wordId] || {}
  const next = sm2(card, grade)
  storage.set(STORAGE_KEYS.SRS, { ...srs, [wordId]: { ...card, ...next } })
}

// ─── Hook ─────────────────────────────────────────────────────

export function useProgress() {
  const [progress, setProgress] = useState(() =>
    storage.get(STORAGE_KEYS.PROGRESS, {})
  )

  const markSeen = useCallback((level, wordId) => {
    setProgress(prev => {
      const lvl = prev[level] || { seen: [], mastered: [] }
      if (lvl.seen.includes(wordId)) return prev
      const next = { ...prev, [level]: { ...lvl, seen: [...lvl.seen, wordId] } }
      storage.set(STORAGE_KEYS.PROGRESS, next)
      _addXP(XP_REWARDS.WORD_SEEN)
      return next
    })
  }, [])

  const markMastered = useCallback((level, wordId) => {
    setProgress(prev => {
      const lvl      = prev[level] || { seen: [], mastered: [] }
      const seen     = lvl.seen.includes(wordId) ? lvl.seen : [...lvl.seen, wordId]
      const mastered = lvl.mastered.includes(wordId) ? lvl.mastered : [...lvl.mastered, wordId]
      const next     = { ...prev, [level]: { ...lvl, seen, mastered } }
      storage.set(STORAGE_KEYS.PROGRESS, next)

      // SRS: grade GOOD saat tandai hafal
      _updateSRS(wordId, SRS_GRADE.GOOD)
      _addXP(XP_REWARDS.WORD_MASTERED)

      // Check achievements
      const streak   = storage.get(STORAGE_KEYS.STREAK, { count: 0 })
      const dailyLog = storage.get(STORAGE_KEYS.DAILY_LOG, {})
      const bookmarks = storage.get(STORAGE_KEYS.BOOKMARKS, [])
      const quizHistory = storage.get(STORAGE_KEYS.QUIZ_HISTORY, [])
      _checkAndUnlock({ progress: next, streak, dailyLog, bookmarks, quizHistory })

      return next
    })
  }, [])

  const unmarkMastered = useCallback((level, wordId) => {
    setProgress(prev => {
      const lvl      = prev[level] || { seen: [], mastered: [] }
      const mastered = lvl.mastered.filter(id => id !== wordId)
      const next     = { ...prev, [level]: { ...lvl, mastered } }
      storage.set(STORAGE_KEYS.PROGRESS, next)
      // SRS: grade WRONG saat unmark
      _updateSRS(wordId, SRS_GRADE.WRONG)
      return next
    })
  }, [])

  const logActivity = useCallback((studied = 0, correct = 0) => {
    const key    = toDateKey()
    const log    = storage.get(STORAGE_KEYS.DAILY_LOG, {})
    const today  = log[key] || { studied: 0, correct: 0 }
    const newLog = {
      ...log,
      [key]: { studied: today.studied + studied, correct: today.correct + correct },
    }
    storage.set(STORAGE_KEYS.DAILY_LOG, newLog)

    // XP per jawaban benar
    if (correct > 0) _addXP(XP_REWARDS.QUIZ_CORRECT * correct)

    // Check achievements setelah log
    const progress   = storage.get(STORAGE_KEYS.PROGRESS, {})
    const streak     = storage.get(STORAGE_KEYS.STREAK, { count: 0 })
    const bookmarks  = storage.get(STORAGE_KEYS.BOOKMARKS, [])
    const quizHistory = storage.get(STORAGE_KEYS.QUIZ_HISTORY, [])
    _checkAndUnlock({ progress, streak, dailyLog: newLog, bookmarks, quizHistory })
  }, [])

  /** Review SRS manual (dari halaman SRS review) */
  const reviewSRS = useCallback((wordId, grade) => {
    _updateSRS(wordId, grade)
    _addXP(grade >= 3 ? XP_REWARDS.QUIZ_CORRECT : 1)

    // Fire first_review achievement
    const progress    = storage.get(STORAGE_KEYS.PROGRESS, {})
    const streak      = storage.get(STORAGE_KEYS.STREAK, { count: 0 })
    const dailyLog    = storage.get(STORAGE_KEYS.DAILY_LOG, {})
    const bookmarks   = storage.get(STORAGE_KEYS.BOOKMARKS, [])
    const quizHistory = storage.get(STORAGE_KEYS.QUIZ_HISTORY, [])
    _checkAndUnlock({ progress, streak, dailyLog, bookmarks, quizHistory })
  }, [])

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