// hooks/useconfusables.js
// Tracking grup kata "gampang ketuker" yang user rasa sudah paham bedanya
// Disimpan di: user_progress_snapshot → data.confusables
// Shape: { 1: ['cf-01', 'cf-02', ...], 2: [...], ... }

import { useState, useCallback, useEffect } from 'react'
import { storage, STORAGE_KEYS, syncSnapshotField, loadConfusables } from '../utils/storage'

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