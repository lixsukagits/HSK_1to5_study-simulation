import { useState, useCallback } from 'react'
import { storage, STORAGE_KEYS } from '../utils/storage'
import { sm2, getDueWords, GRADE } from '../utils/srs'

export function useSRS() {
  const [srsData, setSrsData] = useState(() =>
    storage.get(STORAGE_KEYS.SRS, {})
  )

  /** Review sebuah kata dengan grade */
  const reviewWord = useCallback((wordId, grade) => {
    setSrsData(prev => {
      const card = prev[wordId] || {}
      const next = sm2(card, grade)
      const updated = { ...prev, [wordId]: { ...card, ...next } }
      storage.set(STORAGE_KEYS.SRS, updated)
      return updated
    })
  }, [])

  /** Ambil kata yang due dari pool */
  const getDue = useCallback((words) => {
    return getDueWords(words, srsData)
  }, [srsData])

  /** Info SRS satu kata */
  const getCardInfo = useCallback((wordId) => {
    return srsData[wordId] || null
  }, [srsData])

  /** Berapa kata yang due hari ini dari pool */
  const countDue = useCallback((words) => {
    return getDueWords(words, srsData).length
  }, [srsData])

  /** Reset SRS satu kata */
  const resetCard = useCallback((wordId) => {
    setSrsData(prev => {
      const { [wordId]: _, ...rest } = prev
      storage.set(STORAGE_KEYS.SRS, rest)
      return rest
    })
  }, [])

  return { srsData, reviewWord, getDue, getCardInfo, countDue, resetCard, GRADE }
}