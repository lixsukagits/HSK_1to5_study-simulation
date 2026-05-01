// hooks/usegrammar.js
// Tracking grammar "sudah paham" per user per level
// Storage key: grammar_progress_{userId}
// Shape: { 1: ['g1-001', 'g1-002', ...], 2: [...], ... }

import { useState, useCallback } from 'react'
import { storage } from '../utils/storage'

const KEY = (userId) => `grammar_progress_${userId}`

export function useGrammar(userId) {
  const load = () => {
    if (!userId) return {}
    return storage.get(KEY(userId), {})
  }

  const [understood, setUnderstood] = useState(load)

  const isUnderstood = useCallback((level, id) => {
    return (understood[level] || []).includes(id)
  }, [understood])

  const markUnderstood = useCallback((level, id) => {
    setUnderstood(prev => {
      const lvlSet = new Set(prev[level] || [])
      lvlSet.add(id)
      const next = { ...prev, [level]: Array.from(lvlSet) }
      if (userId) storage.set(KEY(userId), next)
      return next
    })
  }, [userId])

  const unmarkUnderstood = useCallback((level, id) => {
    setUnderstood(prev => {
      const lvlSet = new Set(prev[level] || [])
      lvlSet.delete(id)
      const next = { ...prev, [level]: Array.from(lvlSet) }
      if (userId) storage.set(KEY(userId), next)
      return next
    })
  }, [userId])

  const getCount = useCallback((level) => {
    return (understood[level] || []).length
  }, [understood])

  return { understood, isUnderstood, markUnderstood, unmarkUnderstood, getCount }
}