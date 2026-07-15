import { useState, useCallback, useEffect } from 'react'
import { storage, STORAGE_KEYS, upsertData, deleteData, loadBookmarks } from '../utils/storage'
import { checkAchievements, ACHIEVEMENT_MAP } from '../utils/achievements'

function _addXP(amount, userId) {
  const xp   = storage.get(STORAGE_KEYS.XP, { total: 0 })
  const next = { ...xp, total: (xp.total || 0) + amount }
  storage.set(STORAGE_KEYS.XP, next)
  if (userId) {
    upsertData('user_xp', { user_id: userId, total: next.total })
      .catch(e => console.warn('[xp bookmark] sync:', e))
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
    upsertData('user_achievements', rows, 'user_id,achievement_id').catch(e => console.warn('[ach bookmark] sync:', e))
  }

  window.dispatchEvent(new CustomEvent('hsk:achievement', { detail: newAchs }))
}

export function useBookmark(userId = null) {
  const [bookmarks, setBookmarks] = useState(() =>
    storage.get(STORAGE_KEYS.BOOKMARKS, [])
  )
  const [loading, setLoading] = useState(!!userId)

  // ─── Hydrate dari Supabase saat mount / userId berubah ────────
  useEffect(() => {
    if (!userId) {
      setLoading(false)
      return
    }
    let cancelled = false
    setLoading(true)
    loadBookmarks(userId).then(data => {
      if (!cancelled) {
        setBookmarks(data)
        setLoading(false)
      }
    })
    return () => { cancelled = true }
  }, [userId])

  const bookmarkSet = new Set(bookmarks)

  const toggle = useCallback((wordId) => {
    setBookmarks(prev => {
      const set = new Set(prev)
      let added = false
      if (set.has(wordId)) {
        set.delete(wordId)
        if (userId) {
          deleteData('bookmarks', { user_id: userId, vocab_id: wordId })
            .catch(e => console.warn('[bookmark] delete sync:', e))
        }
      } else {
        set.add(wordId)
        added = true
        if (userId) {
          upsertData('bookmarks', { user_id: userId, vocab_id: wordId })
            .catch(e => console.warn('[bookmark] add sync:', e))
        }
      }
      const next = Array.from(set)
      storage.set(STORAGE_KEYS.BOOKMARKS, next)

      // Cek achievement cuma pas nambah bookmark (bukan pas hapus), mirror pola
      // di useprogress.js/usestreak.js/usetasks.js/dst
      if (added) {
        const progress     = storage.get(STORAGE_KEYS.PROGRESS, {})
        const streak       = storage.get(STORAGE_KEYS.STREAK, { count: 0 })
        const dailyLog     = storage.get(STORAGE_KEYS.DAILY_LOG, {})
        const quizHistory  = storage.get(STORAGE_KEYS.QUIZ_HISTORY, [])
        const grammar      = storage.get(STORAGE_KEYS.GRAMMAR, {})
        const tasks        = storage.get(STORAGE_KEYS.TASKS, {})
        const confusables  = storage.get(STORAGE_KEYS.CONFUSABLES, {})
        const dailyTarget  = storage.get(STORAGE_KEYS.SETTINGS, {})?.dailyTarget || 20
        const srsReviewCount = Object.keys(storage.get(STORAGE_KEYS.SRS, {})).length
        _checkAndUnlock({ progress, streak, dailyLog, bookmarks: next, quizHistory, grammar, tasks, confusables, dailyTarget, srsReviewCount }, userId)
      }

      return next
    })
  }, [userId])

  const isBookmarked = useCallback((wordId) => {
    return bookmarkSet.has(wordId)
  }, [bookmarks])

  const clear = useCallback(() => {
    storage.set(STORAGE_KEYS.BOOKMARKS, [])
    setBookmarks([])
  }, [])

  return { bookmarks, bookmarkSet, toggle, isBookmarked, clear, loading }
}