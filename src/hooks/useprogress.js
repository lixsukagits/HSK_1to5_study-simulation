import { useState, useCallback, useEffect } from 'react'
import { storage, STORAGE_KEYS, upsertData, syncSnapshotField, loadProgress, loadDailyLog } from '../utils/storage'
import { toDateKey } from '../utils/datehelper'
import { sm2, GRADE as SRS_GRADE } from '../utils/srs'
import { checkAchievements, ACHIEVEMENT_MAP, XP_REWARDS } from '../utils/achievements'

// ─── Internal helpers ──────────────────────────────────────────
// amount boleh negatif (dipakai buat clawback XP saat unmarkMastered).
// total di-clamp minimal 0 supaya gak pernah minus di UI.
function _addXP(amount, userId) {
  const xp   = storage.get(STORAGE_KEYS.XP, { total: 0 })
  const next = { ...xp, total: Math.max(0, (xp.total || 0) + amount) }
  storage.set(STORAGE_KEYS.XP, next)
  if (userId) {
    upsertData('user_xp', { user_id: userId, total: next.total })
      .catch(e => console.warn('[xp] sync:', e))
  }
  return next
}

// Baca sibling fields (grammar/tasks/confusables) dari cache localStorage supaya
// checkAchievements bisa evaluasi achievement lintas-fitur (grammar_10, tasks_10, dst)
// walaupun trigger-nya datang dari markMastered/logActivity di sini. Juga baca
// dailyTarget dari settings buat achievement daily_target_7, dan jumlah entri SRS
// buat achievement first_review.
function _readOtherFeatureState() {
  const srs = storage.get(STORAGE_KEYS.SRS, {})
  return {
    grammar:        storage.get(STORAGE_KEYS.GRAMMAR, {}),
    tasks:          storage.get(STORAGE_KEYS.TASKS, {}),
    confusables:    storage.get(STORAGE_KEYS.CONFUSABLES, {}),
    dailyTarget:    storage.get(STORAGE_KEYS.SETTINGS, {})?.dailyTarget || 20,
    srsReviewCount: Object.keys(srs).length,
  }
}

function _checkAndUnlock(state, userId) {
  const current    = storage.get(STORAGE_KEYS.ACHIEVEMENTS, {})
  const currentIds = new Set(Object.keys(current))
  const newIds     = checkAchievements({ ..._readOtherFeatureState(), ...state, unlockedIds: currentIds })
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

  if (userId) {
    const rows = newIds.map(id => ({
      user_id: userId,
      achievement_id: id,
      unlocked_at: new Date(now).toISOString(),
    }))
    upsertData('user_achievements', rows, 'user_id,achievement_id').catch(e => console.warn('[ach] sync:', e))
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
      // next.nextReview dari sm2() adalah timestamp ms mentah (Date.now()-based).
      // Kolom next_review di Supabase bertipe timestamp, jadi WAJIB dikonversi ke
      // ISO string dulu — kalau dikirim angka mentah, PostgREST membacanya sebagai
      // detik-sejak-epoch (bukan ms) dan meledak "date/time field value out of range".
      next_review: new Date(next.nextReview).toISOString(), reps: next.reps,
    }, 'user_id,word_id').catch(e => console.warn('[srs] sync:', e))
  }
}

// ─── Hook ──────────────────────────────────────────────────────
export function useProgress(userId = null) {
  const [progress, setProgress] = useState(() =>
    storage.get(STORAGE_KEYS.PROGRESS, {})
  )
  const [dailyLog, setDailyLog] = useState(() =>
    storage.get(STORAGE_KEYS.DAILY_LOG, {})
  )
  const [loading, setLoading] = useState(!!userId)

  // ─── Hydrate dari Supabase on mount ───────────────────────────
  useEffect(() => {
    if (!userId) { setLoading(false); return }
    let cancelled = false
    setLoading(true)

    Promise.all([
      loadProgress(userId),
      loadDailyLog(userId),
    ]).then(([prog, log]) => {
      if (!cancelled) {
        setProgress(prog)
        setDailyLog(log)
        setLoading(false)
      }
    })

    return () => { cancelled = true }
  }, [userId])

  // Sync progress ke snapshot (merge otomatis dengan streak/grammar/tasks/confusables
  // via syncSnapshotField — lihat src/utils/storage.js)
  const _sync = useCallback((progressData) => {
    if (!userId) return
    syncSnapshotField(userId, 'progress', progressData).catch(e => console.warn('[progress] sync:', e))
  }, [userId])

  const markSeen = useCallback((level, wordId) => {
    setProgress(prev => {
      const lvl = prev[level] || { seen: [], mastered: [] }
      if (lvl.seen.includes(wordId)) return prev
      const next = { ...prev, [level]: { ...lvl, seen: [...lvl.seen, wordId] } }
      storage.set(STORAGE_KEYS.PROGRESS, next)
      _addXP(XP_REWARDS.WORD_SEEN, userId)
      _sync(next)
      return next
    })
  }, [userId, _sync])

  // markMastered dan unmarkMastered adalah SEPASANG kebalikan yang simetris:
  // mark memberi +WORD_MASTERED XP, unmark menariknya kembali -WORD_MASTERED XP.
  // Guard di masing-masing (cek posisi wordId di array `mastered` SAAT INI)
  // mencegah double-fire menambah/mengurangi XP dobel kalau dipanggil berulang
  // tanpa perubahan state yang nyata. Karena keduanya simetris, toggle
  // mark→unmark berkali-kali akan selalu net ke 0 XP — tidak akan pernah
  // menumpuk seperti sebelumnya.
  const markMastered = useCallback((level, wordId) => {
    setProgress(prev => {
      const lvl = prev[level] || { seen: [], mastered: [] }
      if (lvl.mastered.includes(wordId)) return prev // sudah mastered, no-op — cegah XP dobel

      const seen     = lvl.seen.includes(wordId) ? lvl.seen : [...lvl.seen, wordId]
      const mastered = [...lvl.mastered, wordId]
      const next     = { ...prev, [level]: { ...lvl, seen, mastered } }
      storage.set(STORAGE_KEYS.PROGRESS, next)

      _updateSRS(wordId, SRS_GRADE.GOOD, userId)
      _addXP(XP_REWARDS.WORD_MASTERED, userId)
      _sync(next)

      const streak    = storage.get(STORAGE_KEYS.STREAK, { count: 0 })
      const log       = storage.get(STORAGE_KEYS.DAILY_LOG, {})
      const bookmarks = storage.get(STORAGE_KEYS.BOOKMARKS, [])
      const quizHist  = storage.get(STORAGE_KEYS.QUIZ_HISTORY, [])
      _checkAndUnlock({ progress: next, streak, dailyLog: log, bookmarks, quizHistory: quizHist }, userId)

      return next
    })
  }, [userId, _sync])

  const unmarkMastered = useCallback((level, wordId) => {
    setProgress(prev => {
      const lvl = prev[level] || { seen: [], mastered: [] }
      if (!lvl.mastered.includes(wordId)) return prev // memang belum mastered, gak ada yang perlu ditarik

      const mastered = lvl.mastered.filter(id => id !== wordId)
      const next     = { ...prev, [level]: { ...lvl, mastered } }
      storage.set(STORAGE_KEYS.PROGRESS, next)
      _updateSRS(wordId, SRS_GRADE.WRONG, userId)
      _addXP(-XP_REWARDS.WORD_MASTERED, userId) // clawback — simetris sama markMastered
      _sync(next)
      return next
    })
  }, [userId, _sync])

  const logActivity = useCallback((studied = 0, correct = 0) => {
    const key   = toDateKey()
    const log   = storage.get(STORAGE_KEYS.DAILY_LOG, {})
    const today = log[key] || { studied: 0, correct: 0 }
    const newLog = {
      ...log,
      [key]: { studied: today.studied + studied, correct: today.correct + correct },
    }
    storage.set(STORAGE_KEYS.DAILY_LOG, newLog)
    setDailyLog(newLog)

    if (correct > 0) _addXP(XP_REWARDS.QUIZ_CORRECT * correct, userId)

    if (userId) {
      upsertData('daily_activity', {
        user_id:       userId,
        activity_date: key,
        words_studied: newLog[key].studied,
        quiz_score:    newLog[key].correct,
      }, 'user_id,activity_date').catch(e => console.warn('[activity] sync:', e))
    }

    const prog      = storage.get(STORAGE_KEYS.PROGRESS, {})
    const streak    = storage.get(STORAGE_KEYS.STREAK, { count: 0 })
    const bookmarks = storage.get(STORAGE_KEYS.BOOKMARKS, [])
    const quizHist  = storage.get(STORAGE_KEYS.QUIZ_HISTORY, [])
    _checkAndUnlock({ progress: prog, streak, dailyLog: newLog, bookmarks, quizHistory: quizHist }, userId)
  }, [userId])

  const reviewSRS = useCallback((wordId, grade) => {
    _updateSRS(wordId, grade, userId)
    _addXP(grade >= 3 ? XP_REWARDS.QUIZ_CORRECT : 1, userId)

    const prog      = storage.get(STORAGE_KEYS.PROGRESS, {})
    const streak    = storage.get(STORAGE_KEYS.STREAK, { count: 0 })
    const log       = storage.get(STORAGE_KEYS.DAILY_LOG, {})
    const bookmarks = storage.get(STORAGE_KEYS.BOOKMARKS, [])
    const quizHist  = storage.get(STORAGE_KEYS.QUIZ_HISTORY, [])
    _checkAndUnlock({ progress: prog, streak, dailyLog: log, bookmarks, quizHistory: quizHist }, userId)
  }, [userId])

  const getLevelProgress = useCallback(
    level => progress[level] || { seen: [], mastered: [] },
    [progress]
  )

  const totalMastered = Object.values(progress).reduce(
    (sum, lvl) => sum + (lvl.mastered?.length || 0), 0
  )

  return {
    progress, dailyLog, loading,
    markSeen, markMastered, unmarkMastered,
    logActivity, reviewSRS, getLevelProgress, totalMastered,
  }
}