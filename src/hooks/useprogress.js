import { useState, useCallback } from 'react'
import { storage, STORAGE_KEYS } from '../utils/storage'
import { toDateKey } from '../utils/datehelper'

export function useProgress() {
  const [progress, setProgress] = useState(() =>
    storage.get(STORAGE_KEYS.PROGRESS, {})
  )

  const markSeen = useCallback((level, wordId) => {
    setProgress((prev) => {
      const lvl = prev[level] || { seen: [], mastered: [] }
      if (lvl.seen.includes(wordId)) return prev
      const next = { ...prev, [level]: { ...lvl, seen: [...lvl.seen, wordId] } }
      storage.set(STORAGE_KEYS.PROGRESS, next)
      return next
    })
  }, [])

  const markMastered = useCallback((level, wordId) => {
    setProgress((prev) => {
      const lvl      = prev[level] || { seen: [], mastered: [] }
      const seen     = lvl.seen.includes(wordId) ? lvl.seen : [...lvl.seen, wordId]
      const mastered = lvl.mastered.includes(wordId) ? lvl.mastered : [...lvl.mastered, wordId]
      const next     = { ...prev, [level]: { ...lvl, seen, mastered } }
      storage.set(STORAGE_KEYS.PROGRESS, next)
      return next
    })
  }, [])

  const unmarkMastered = useCallback((level, wordId) => {
    setProgress((prev) => {
      const lvl      = prev[level] || { seen: [], mastered: [] }
      const mastered = lvl.mastered.filter((id) => id !== wordId)
      const next     = { ...prev, [level]: { ...lvl, mastered } }
      storage.set(STORAGE_KEYS.PROGRESS, next)
      return next
    })
  }, [])

  const logActivity = useCallback((studied = 0, correct = 0) => {
    const key   = toDateKey()
    const log   = storage.get(STORAGE_KEYS.DAILY_LOG, {})
    const today = log[key] || { studied: 0, correct: 0 }
    storage.set(STORAGE_KEYS.DAILY_LOG, {
      ...log,
      [key]: { studied: today.studied + studied, correct: today.correct + correct },
    })
  }, [])

  const getLevelProgress = useCallback(
    (level) => progress[level] || { seen: [], mastered: [] },
    [progress]
  )

  const totalMastered = Object.values(progress).reduce(
    (sum, lvl) => sum + (lvl.mastered?.length || 0), 0
  )

  return { progress, markSeen, markMastered, unmarkMastered, logActivity, getLevelProgress, totalMastered }
}
