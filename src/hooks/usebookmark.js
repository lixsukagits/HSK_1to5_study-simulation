import { useState, useCallback } from 'react'
import { storage, STORAGE_KEYS } from '../utils/storage'

export function useBookmark() {
  const [bookmarks, setBookmarks] = useState(() =>
    storage.get(STORAGE_KEYS.BOOKMARKS, [])
  )

  const bookmarkSet = new Set(bookmarks)

  const toggle = useCallback((wordId) => {
    setBookmarks(prev => {
      const set  = new Set(prev)
      if (set.has(wordId)) set.delete(wordId)
      else                 set.add(wordId)
      const next = Array.from(set)
      storage.set(STORAGE_KEYS.BOOKMARKS, next)
      return next
    })
  }, [])

  const isBookmarked = useCallback((wordId) => {
    return bookmarkSet.has(wordId)
  }, [bookmarks])

  const clear = useCallback(() => {
    storage.set(STORAGE_KEYS.BOOKMARKS, [])
    setBookmarks([])
  }, [])

  return { bookmarks, bookmarkSet, toggle, isBookmarked, clear }
}