// hooks/usegrammar.js
// Tracking grammar "sudah paham" per user per level
// Disimpan di: user_progress_snapshot → data.grammar
// Shape: { 1: ['g1-001', 'g1-002', ...], 2: [...], ... }

import { useState, useCallback, useEffect } from 'react'
import { storage, STORAGE_KEYS, upsertData, syncSnapshotField, loadGrammar } from '../utils/storage'
import { checkAchievements, ACHIEVEMENT_MAP } from '../utils/achievements'

function _addXP(amount, userId) {
  const xp   = storage.get(STORAGE_KEYS.XP, { total: 0 })
  const next = { ...xp, total: (xp.total || 0) + amount }
  storage.set(STORAGE_KEYS.XP, next)
  if (userId) {
    upsertData('user_xp', { user_id: userId, total: next.total })
      .catch(e => console.warn('[xp grammar] sync:', e))
  }
}

function _checkAndUnlock(state, userId) {
  const current    = storage.get(STORAGE_KEYS.ACHIEVEMENTS, {})
  const currentIds = new Set(Object.keys(current))
  const newIds     = checkAchievements({ ...state, unlockedIds: currentIds })
  if (newIds.length === 0) return

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
    upsertData('user_achievements', rows, 'user_id,achievement_id').catch(e => console.warn('[ach grammar] sync:', e))
  }

  window.dispatchEvent(new CustomEvent('hsk:achievement', { detail: newAchs }))
}

export function useGrammar(userId) {
  const [understood, setUnderstood] = useState(() =>
    storage.get(STORAGE_KEYS.GRAMMAR, {})
  )
  const [loading, setLoading] = useState(!!userId)

  // ─── Hydrate dari Supabase on mount ───────────────────────────
  useEffect(() => {
    if (!userId) { setLoading(false); return }
    let cancelled = false
    setLoading(true)

    loadGrammar(userId).then(data => {
      if (!cancelled) {
        setUnderstood(data)
        setLoading(false)
      }
    })

    return () => { cancelled = true }
  }, [userId])

  // Sync grammar ke snapshot (merge otomatis dengan progress/streak/tasks/confusables)
  const _sync = useCallback((grammarData) => {
    if (!userId) return
    syncSnapshotField(userId, 'grammar', grammarData).catch(e => console.warn('[grammar] sync:', e))
  }, [userId])

  const isUnderstood = useCallback((level, id) => {
    return (understood[level] || []).includes(id)
  }, [understood])

  const markUnderstood = useCallback((level, id) => {
    setUnderstood(prev => {
      const lvlSet = new Set(prev[level] || [])
      lvlSet.add(id)
      const next = { ...prev, [level]: Array.from(lvlSet) }
      storage.set(STORAGE_KEYS.GRAMMAR, next)
      _sync(next)

      // Cek achievement (mirror pola di useprogress.js/usestreak.js)
      const progress    = storage.get(STORAGE_KEYS.PROGRESS, {})
      const streak       = storage.get(STORAGE_KEYS.STREAK, { count: 0 })
      const dailyLog     = storage.get(STORAGE_KEYS.DAILY_LOG, {})
      const bookmarks    = storage.get(STORAGE_KEYS.BOOKMARKS, [])
      const quizHistory  = storage.get(STORAGE_KEYS.QUIZ_HISTORY, [])
      const tasks        = storage.get(STORAGE_KEYS.TASKS, {})
      const confusables  = storage.get(STORAGE_KEYS.CONFUSABLES, {})
      const dailyTarget  = storage.get(STORAGE_KEYS.SETTINGS, {})?.dailyTarget || 20
      const srsReviewCount = Object.keys(storage.get(STORAGE_KEYS.SRS, {})).length
      _checkAndUnlock({ progress, streak, dailyLog, bookmarks, quizHistory, grammar: next, tasks, confusables, dailyTarget, srsReviewCount }, userId)

      return next
    })
  }, [userId, _sync])

  const unmarkUnderstood = useCallback((level, id) => {
    setUnderstood(prev => {
      const lvlSet = new Set(prev[level] || [])
      lvlSet.delete(id)
      const next = { ...prev, [level]: Array.from(lvlSet) }
      storage.set(STORAGE_KEYS.GRAMMAR, next)
      _sync(next)
      return next
    })
  }, [userId, _sync])

  const getCount = useCallback((level) => {
    return (understood[level] || []).length
  }, [understood])

  return { understood, isUnderstood, markUnderstood, unmarkUnderstood, getCount, loading }
}