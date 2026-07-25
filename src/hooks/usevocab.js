import { useState, useMemo, useCallback } from 'react'
import { shuffle } from '../utils/quizgenerator'
import { normalizePinyin } from '../utils/pinyinhelper'

/**
 * @param {Array} vocab
 * @param {'all'|'zh'|'id'} searchMode - 'zh' cari di hanzi+pinyin saja,
 *   'id' cari di arti saja, 'all' (default, backward-compatible) cari di ketiganya.
 */
export function useVocab(vocab = [], searchMode = 'all') {
  const [search,    setSearch]    = useState('')
  const [filterTag, setFilterTag] = useState('all') // 'all' | 'mastered' | 'unseen'

  const filtered = useMemo(() => {
    if (!search.trim()) return vocab
    const q     = search.trim().toLowerCase()
    const qPin  = normalizePinyin(search)

    return vocab.filter((v) => {
      const matchHanzi  = v.hanzi?.includes(search.trim())
      const matchPinyin = qPin.length > 0 && normalizePinyin(v.pinyin || '').includes(qPin)
      const matchArti   = v.arti?.toLowerCase().includes(q)

      if (searchMode === 'zh') return matchHanzi || matchPinyin
      if (searchMode === 'id') return matchArti
      return matchHanzi || matchPinyin || matchArti // 'all'
    })
  }, [vocab, search, searchMode])

  const randomized = useCallback(() => shuffle(vocab), [vocab])

  return { filtered, search, setSearch, filterTag, setFilterTag, randomized }
}