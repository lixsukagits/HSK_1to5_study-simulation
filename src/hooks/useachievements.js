import { useState, useCallback, useEffect } from 'react'
import { storage, STORAGE_KEYS, upsertData, loadAchievements, loadXP } from '../utils/storage'
import { ACHIEVEMENT_MAP, XP_REWARDS } from '../utils/achievements'

export function useAchievements(userId = null) {
  const [unlocked, setUnlocked] = useState(() =>
    storage.get(STORAGE_KEYS.ACHIEVEMENTS, {})
  )
  const [xpData, setXpData] = useState(() =>
    storage.get(STORAGE_KEYS.XP, { total: 0 })
  )
  const [loading, setLoading] = useState(!!userId)

  // ─── Hydrate dari Supabase on mount ───────────────────────────
  useEffect(() => {
    if (!userId) { setLoading(false); return }
    let cancelled = false
    setLoading(true)

    Promise.all([
      loadAchievements(userId),
      loadXP(userId),
    ]).then(([achs, xp]) => {
      if (!cancelled) {
        setUnlocked(achs)
        setXpData(xp)
        setLoading(false)
      }
    })

    return () => { cancelled = true }
  }, [userId])

  // Listen untuk achievement baru yang di-dispatch dari hook lain
  useEffect(() => {
    const handler = () => {
      setUnlocked(storage.get(STORAGE_KEYS.ACHIEVEMENTS, {}))
      setXpData(storage.get(STORAGE_KEYS.XP, { total: 0 }))
    }
    window.addEventListener('hsk:achievement', handler)
    return () => window.removeEventListener('hsk:achievement', handler)
  }, [])

  const unlockedIds = new Set(Object.keys(unlocked))

  const addXP = useCallback((amount) => {
    setXpData(prev => {
      const next = { ...prev, total: (prev.total || 0) + amount }
      storage.set(STORAGE_KEYS.XP, next)
      if (userId) {
        upsertData('user_xp', { user_id: userId, total: next.total })
          .catch(e => console.warn('[xp] sync:', e))
      }
      return next
    })
  }, [userId])

  const refreshState = useCallback(() => {
    setUnlocked(storage.get(STORAGE_KEYS.ACHIEVEMENTS, {}))
    setXpData(storage.get(STORAGE_KEYS.XP, { total: 0 }))
  }, [])

  const getRank = useCallback((xp) => {
    const total = xp ?? xpData.total ?? 0
    if (total < 100)   return { title: '学生', en: 'Student',     color: '#9ca3af' }
    if (total < 500)   return { title: '学者', en: 'Scholar',     color: '#60a5fa' }
    if (total < 1500)  return { title: '先生', en: 'Teacher',     color: '#4ade80' }
    if (total < 4000)  return { title: '博士', en: 'Doctor',      color: '#f59e0b' }
    if (total < 10000) return { title: '大师', en: 'Master',      color: '#f472b6' }
    return               { title: '宗师', en: 'Grand Master', color: '#a78bfa' }
  }, [xpData])

  return {
    unlocked,
    unlockedIds,
    xp: xpData.total || 0,
    addXP,
    getRank,
    refreshState,
    XP_REWARDS,
    loading,
  }
}