import { useState, useMemo, useCallback } from 'react'
import { shuffle } from '../utils/quizgenerator'

export function useVocab(vocab = []) {
  const [search,    setSearch]    = useState('')
  const [filterTag, setFilterTag] = useState('all') // 'all' | 'mastered' | 'unseen'

  const filtered = useMemo(() => {
    if (!search.trim()) return vocab
    const q = search.toLowerCase()
    return vocab.filter(
      (v) =>
        v.hanzi?.includes(q) ||
        v.pinyin?.toLowerCase().includes(q) ||
        v.arti?.toLowerCase().includes(q)
    )
  }, [vocab, search])

  const randomized = useCallback(() => shuffle(vocab), [vocab])

  return { filtered, search, setSearch, filterTag, setFilterTag, randomized }
}
