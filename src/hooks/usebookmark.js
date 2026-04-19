import { useState, useCallback } from 'react'
import { storage, STORAGE_KEYS, upsertData, deleteData } from '../utils/storage'

export function useBookmark(userId = null) {
  const [bookmarks, setBookmarks] = useState(() =>
    storage.get(STORAGE_KEYS.BOOKMARKS, [])
  )

  const bookmarkSet = new Set(bookmarks)

  const toggle = useCallback((wordId) => {
    setBookmarks(prev => {
      const set = new Set(prev)
      if (set.has(wordId)) {
        set.delete(wordId)
        if (userId) {
          deleteData('bookmarks', { user_id: userId, vocab_id: wordId })
            .catch(e => console.warn('[bookmark] delete sync:', e))
        }
      } else {
        set.add(wordId)
        if (userId) {
          upsertData('bookmarks', { user_id: userId, vocab_id: wordId })
            .catch(e => console.warn('[bookmark] add sync:', e))
        }
      }
      const next = Array.from(set)
      storage.set(STORAGE_KEYS.BOOKMARKS, next)
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

  return { bookmarks, bookmarkSet, toggle, isBookmarked, clear }
}