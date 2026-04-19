import { useState, useCallback } from 'react'
import { storage, STORAGE_KEYS } from '../utils/storage'
import { toDateKey } from '../utils/datehelper'
import { checkAchievements, ACHIEVEMENT_MAP, XP_REWARDS } from '../utils/achievements'

function _addXP(amount) {
  const xp = storage.get(STORAGE_KEYS.XP, { total: 0 })
  storage.set(STORAGE_KEYS.XP, { ...xp, total: (xp.total || 0) + amount })
}

export function useStreak() {
  const [streak, setStreak] = useState(() =>
    storage.get(STORAGE_KEYS.STREAK, { count: 0, longestStreak: 0, lastDate: null })
  )

  const recordActivity = useCallback(() => {
    setStreak(prev => {
      const today     = toDateKey()
      if (prev.lastDate === today) return prev

      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)
      const yKey      = toDateKey(yesterday)

      const newCount = prev.lastDate === yKey ? prev.count + 1 : 1
      const next = {
        count:         newCount,
        longestStreak: Math.max(newCount, prev.longestStreak || 0),
        lastDate:      today,
      }
      storage.set(STORAGE_KEYS.STREAK, next)

      // XP per hari streak
      _addXP(XP_REWARDS.STREAK_DAY)

      // Check streak achievements
      const progress   = storage.get(STORAGE_KEYS.PROGRESS, {})
      const dailyLog   = storage.get(STORAGE_KEYS.DAILY_LOG, {})
      const bookmarks  = storage.get(STORAGE_KEYS.BOOKMARKS, [])
      const quizHistory = storage.get(STORAGE_KEYS.QUIZ_HISTORY, [])
      const current    = storage.get(STORAGE_KEYS.ACHIEVEMENTS, {})
      const currentIds = new Set(Object.keys(current))
      const newIds     = checkAchievements({ progress, streak: next, dailyLog, bookmarks, quizHistory, unlockedIds: currentIds })

      if (newIds.length > 0) {
        const now  = Date.now()
        const updated = { ...current }
        const newAchs = []
        let totalXp = 0
        for (const id of newIds) {
          updated[id] = { unlockedAt: now }
          const ach = ACHIEVEMENT_MAP[id]
          if (ach) { totalXp += ach.xp || 0; newAchs.push(ach) }
        }
        storage.set(STORAGE_KEYS.ACHIEVEMENTS, updated)
        if (totalXp > 0) _addXP(totalXp)
        window.dispatchEvent(new CustomEvent('hsk:achievement', { detail: newAchs }))
      }

      return next
    })
  }, [])

  return { streak, recordActivity }
}