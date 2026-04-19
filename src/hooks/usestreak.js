import { useState, useCallback } from 'react'
import { storage, STORAGE_KEYS } from '../utils/storage'
import { toDateKey } from '../utils/datehelper'

export function useStreak() {
  const [streak, setStreak] = useState(() =>
    storage.get(STORAGE_KEYS.STREAK, { count: 0, longestStreak: 0, lastDate: null })
  )

  const recordActivity = useCallback(() => {
    setStreak((prev) => {
      const today = toDateKey()
      if (prev.lastDate === today) return prev

      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)
      const yKey = toDateKey(yesterday)

      const newCount = prev.lastDate === yKey ? prev.count + 1 : 1
      const next = {
        count:         newCount,
        longestStreak: Math.max(newCount, prev.longestStreak || 0),
        lastDate:      today,
      }
      storage.set(STORAGE_KEYS.STREAK, next)
      return next
    })
  }, [])

  return { streak, recordActivity }
}
