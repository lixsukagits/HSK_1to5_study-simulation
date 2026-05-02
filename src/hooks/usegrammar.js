// hooks/usegrammar.js
// Tracking grammar "sudah paham" per user per level
// Disimpan di: user_progress_snapshot → data.grammar
// Shape: { 1: ['g1-001', 'g1-002', ...], 2: [...], ... }

import { useState, useCallback, useEffect } from 'react'
import { storage, STORAGE_KEYS, upsertData, loadGrammar } from '../utils/storage'

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

  // Sync grammar ke snapshot (merge dengan progress & streak)
  const _sync = useCallback((grammarData) => {
    if (!userId) return
    const progress = storage.get(STORAGE_KEYS.PROGRESS, {})
    const streak   = storage.get(STORAGE_KEYS.STREAK, { count: 0, longestStreak: 0, lastDate: null })
    upsertData('user_progress_snapshot', {
      user_id:    userId,
      data:       { progress, streak, grammar: grammarData },
      updated_at: new Date().toISOString(),
    }).catch(e => console.warn('[grammar] sync:', e))
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