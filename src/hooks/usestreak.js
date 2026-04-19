import { useState, useCallback } from 'react'
import { storage, STORAGE_KEYS, upsertData } from '../utils/storage'
import { toDateKey } from '../utils/datehelper'
import { checkAchievements, ACHIEVEMENT_MAP, XP_REWARDS } from '../utils/achievements'

function _addXP(amount, userId) {
  const xp   = storage.get(STORAGE_KEYS.XP, { total: 0 })
  const next = { ...xp, total: (xp.total || 0) + amount }
  storage.set(STORAGE_KEYS.XP, next)
  if (userId) {
    upsertData('user_xp', { user_id: userId, total: next.total })
      .catch(e => console.warn('[xp streak] sync:', e))
  }
}

export function useStreak(userId = null) {
  const [streak, setStreak] = useState(() =>
    storage.get(STORAGE_KEYS.STREAK, { count: 0, longestStreak: 0, lastDate: null })
  )

  const recordActivity = useCallback(() => {
    setStreak(prev => {
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
      _addXP(XP_REWARDS.STREAK_DAY, userId)

      // Check achievements
      const progress   = storage.get(STORAGE_KEYS.PROGRESS, {})
      const dailyLog   = storage.get(STORAGE_KEYS.DAILY_LOG, {})
      const bookmarks  = storage.get(STORAGE_KEYS.BOOKMARKS, [])
      const quizHist   = storage.get(STORAGE_KEYS.QUIZ_HISTORY, [])
      const achs       = storage.get(STORAGE_KEYS.ACHIEVEMENTS, {})
      const currentIds = new Set(Object.keys(achs))
      const newIds     = checkAchievements({ progress, streak: next, dailyLog, bookmarks, quizHistory: quizHist, unlockedIds: currentIds })

      if (newIds.length > 0) {
        const now = Date.now()
        const updated = { ...achs }
        const newAchs = []
        let totalXp = 0
        for (const id of newIds) {
          updated[id] = { unlockedAt: now }
          const ach = ACHIEVEMENT_MAP[id]
          if (ach) { totalXp += ach.xp || 0; newAchs.push(ach) }
        }
        storage.set(STORAGE_KEYS.ACHIEVEMENTS, updated)
        if (totalXp > 0) _addXP(totalXp, userId)

        if (userId) {
          const rows = newIds.map(id => ({
            user_id: userId, achievement_id: id,
            unlocked_at: new Date(now).toISOString(),
          }))
          upsertData('user_achievements', rows).catch(e => console.warn('[ach] sync:', e))
        }
        window.dispatchEvent(new CustomEvent('hsk:achievement', { detail: newAchs }))
      }

      return next
    })
  }, [userId])

  return { streak, recordActivity }
}