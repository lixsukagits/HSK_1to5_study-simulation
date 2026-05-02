import { useState, useCallback, useEffect } from 'react'
import { storage, STORAGE_KEYS, upsertData, loadSRS } from '../utils/storage'
import { sm2, getDueWords, GRADE } from '../utils/srs'

export function useSRS(userId = null) {
  const [srsData, setSrsData] = useState(() =>
    storage.get(STORAGE_KEYS.SRS, {})
  )
  const [loading, setLoading] = useState(!!userId)

  // ─── Hydrate dari Supabase on mount ───────────────────────────
  useEffect(() => {
    if (!userId) { setLoading(false); return }
    let cancelled = false
    setLoading(true)

    loadSRS(userId).then(data => {
      if (!cancelled) {
        setSrsData(data)
        setLoading(false)
      }
    })

    return () => { cancelled = true }
  }, [userId])

  const reviewWord = useCallback((wordId, grade) => {
    setSrsData(prev => {
      const card    = prev[wordId] || {}
      const next    = sm2(card, grade)
      const updated = { ...prev, [wordId]: { ...card, ...next } }
      storage.set(STORAGE_KEYS.SRS, updated)

      if (userId) {
        upsertData('user_srs', {
          user_id:     userId,
          word_id:     wordId,
          interval:    next.interval,
          ease_factor: next.easeFactor,
          next_review: next.nextReview,
          reps:        next.reps,
        }).catch(e => console.warn('[srs] sync:', e))
      }
      return updated
    })
  }, [userId])

  const getDue = useCallback((words) => {
    return getDueWords(words, srsData)
  }, [srsData])

  const getCardInfo = useCallback((wordId) => {
    return srsData[wordId] || null
  }, [srsData])

  const countDue = useCallback((words) => {
    return getDueWords(words, srsData).length
  }, [srsData])

  const resetCard = useCallback((wordId) => {
    setSrsData(prev => {
      const { [wordId]: _, ...rest } = prev
      storage.set(STORAGE_KEYS.SRS, rest)
      return rest
    })
  }, [])

  return { srsData, reviewWord, getDue, getCardInfo, countDue, resetCard, GRADE, loading }
}