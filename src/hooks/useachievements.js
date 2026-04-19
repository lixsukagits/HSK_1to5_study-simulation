import { useState, useCallback } from 'react'
import { storage, STORAGE_KEYS } from '../utils/storage'
import { checkAchievements, ACHIEVEMENT_MAP, XP_REWARDS } from '../utils/achievements'

export function useAchievements() {
  const [unlocked, setUnlocked] = useState(() =>
    storage.get(STORAGE_KEYS.ACHIEVEMENTS, {})
  )
  const [xpData, setXpData] = useState(() =>
    storage.get(STORAGE_KEYS.XP, { total: 0 })
  )
  const [newBadges, setNewBadges] = useState([]) // untuk notifikasi

  const unlockedIds = new Set(Object.keys(unlocked))

  /** Tambah XP */
  const addXP = useCallback((amount) => {
    setXpData(prev => {
      const next = { ...prev, total: (prev.total || 0) + amount }
      storage.set(STORAGE_KEYS.XP, next)
      return next
    })
  }, [])

  /** Cek dan unlock achievement baru */
  const checkAndUnlock = useCallback((state) => {
    const current = storage.get(STORAGE_KEYS.ACHIEVEMENTS, {})
    const currentIds = new Set(Object.keys(current))
    const newIds = checkAchievements({ ...state, unlockedIds: currentIds })

    if (newIds.length === 0) return []

    const now = Date.now()
    const next = { ...current }
    let totalXp = 0
    const newAchievements = []

    for (const id of newIds) {
      next[id] = { unlockedAt: now }
      const ach = ACHIEVEMENT_MAP[id]
      if (ach) {
        totalXp += ach.xp || 0
        newAchievements.push(ach)
      }
    }

    storage.set(STORAGE_KEYS.ACHIEVEMENTS, next)
    setUnlocked(next)

    if (totalXp > 0) {
      setXpData(prev => {
        const updated = { ...prev, total: (prev.total || 0) + totalXp }
        storage.set(STORAGE_KEYS.XP, updated)
        return updated
      })
    }

    // Tampilkan notifikasi badge baru
    setNewBadges(newAchievements)
    setTimeout(() => setNewBadges([]), 5000)

    return newAchievements
  }, [])

  const dismissBadges = useCallback(() => setNewBadges([]), [])

  /** Rank berdasarkan XP */
  const getRank = useCallback((xp) => {
    const total = xp || xpData.total || 0
    if (total < 100)   return { title: '学生',  en: 'Student',    color: '#9ca3af' }
    if (total < 500)   return { title: '学者',  en: 'Scholar',    color: '#60a5fa' }
    if (total < 1500)  return { title: '先生',  en: 'Teacher',    color: '#4ade80' }
    if (total < 4000)  return { title: '博士',  en: 'Doctor',     color: '#f59e0b' }
    if (total < 10000) return { title: '大师',  en: 'Master',     color: '#f472b6' }
    return               { title: '宗师',  en: 'Grand Master', color: '#a78bfa' }
  }, [xpData])

  return {
    unlocked,
    unlockedIds,
    xp: xpData.total || 0,
    newBadges,
    addXP,
    checkAndUnlock,
    dismissBadges,
    getRank,
    XP_REWARDS,
  }
}