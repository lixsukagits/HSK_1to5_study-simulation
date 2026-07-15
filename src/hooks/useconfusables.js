// hooks/useconfusables.js
// Tracking grup kata "gampang ketuker" yang user rasa sudah paham bedanya
// Disimpan di: user_progress_snapshot → data.confusables
// Shape: { 1: ['cf-01', 'cf-02', ...], 2: [...], ... }

import { useState, useCallback, useEffect } from 'react'
import { storage, STORAGE_KEYS, upsertData, syncSnapshotField, loadConfusables } from '../utils/storage'
import { checkAchievements, ACHIEVEMENT_MAP } from '../utils/achievements'

function _addXP(amount, userId) {
  const xp   = storage.get(STORAGE_KEYS.XP, { total: 0 })
  const next = { ...xp, total: (xp.total || 0) + amount }
  storage.set(STORAGE_KEYS.XP, next)
  if (userId) {
    upsertData('user_xp', { user_id: userId, total: next.total })
      .catch(e => console.warn('[xp confusables] sync:', e))
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
    upsertData('user_achievements', rows, 'user_id,achievement_id').catch(e => console.warn('[ach confusables] sync:', e))
  }

  window.dispatchEvent(new CustomEvent('hsk:achievement', { detail: newAchs }))
}

export function useConfusables(userId) {
  const [understood, setUnderstood] = useState(() =>
    storage.get(STORAGE_KEYS.CONFUSABLES, {})
  )
  const [loading, setLoading] = useState(!!userId)

  // ─── Hydrate dari Supabase on mount ───────────────────────────
  useEffect(() => {
    if (!userId) { setLoading(false); return }
    let cancelled = false
    setLoading(true)

    loadConfusables(userId).then(data => {
      if (!cancelled) {
        setUnderstood(data)
        setLoading(false)
      }
    })

    return () => { cancelled = true }
  }, [userId])

  // Sync confusables ke snapshot (merge otomatis dengan progress/streak/grammar/tasks)
  const _sync = useCallback((confusablesData) => {
    if (!userId) return
    syncSnapshotField(userId, 'confusables', confusablesData).catch(e => console.warn('[confusables] sync:', e))
  }, [userId])

  const isUnderstood = useCallback((level, groupId) => {
    return (understood[level] || []).includes(groupId)
  }, [understood])

  const markUnderstood = useCallback((level, groupId) => {
    setUnderstood(prev => {
      const lvlSet = new Set(prev[level] || [])
      lvlSet.add(groupId)
      const next = { ...prev, [level]: Array.from(lvlSet) }
      storage.set(STORAGE_KEYS.CONFUSABLES, next)
      _sync(next)

      // Cek achievement (mirror pola di useprogress.js/usestreak.js)
      const progress    = storage.get(STORAGE_KEYS.PROGRESS, {})
      const streak      = storage.get(STORAGE_KEYS.STREAK, { count: 0 })
      const dailyLog    = storage.get(STORAGE_KEYS.DAILY_LOG, {})
      const bookmarks   = storage.get(STORAGE_KEYS.BOOKMARKS, [])
      const quizHistory = storage.get(STORAGE_KEYS.QUIZ_HISTORY, [])
      const grammar     = storage.get(STORAGE_KEYS.GRAMMAR, {})
      const tasks       = storage.get(STORAGE_KEYS.TASKS, {})
      const dailyTarget = storage.get(STORAGE_KEYS.SETTINGS, {})?.dailyTarget || 20
      const srsReviewCount = Object.keys(storage.get(STORAGE_KEYS.SRS, {})).length
      _checkAndUnlock({ progress, streak, dailyLog, bookmarks, quizHistory, grammar, tasks, confusables: next, dailyTarget, srsReviewCount }, userId)

      return next
    })
  }, [userId, _sync])

  const unmarkUnderstood = useCallback((level, groupId) => {
    setUnderstood(prev => {
      const lvlSet = new Set(prev[level] || [])
      lvlSet.delete(groupId)
      const next = { ...prev, [level]: Array.from(lvlSet) }
      storage.set(STORAGE_KEYS.CONFUSABLES, next)
      _sync(next)
      return next
    })
  }, [userId, _sync])

  const getCount = useCallback((level) => {
    return (understood[level] || []).length
  }, [understood])

  return { understood, isUnderstood, markUnderstood, unmarkUnderstood, getCount, loading }
}