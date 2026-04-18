// Wrapper localStorage yang aman — tidak crash jika storage penuh / private mode

const PREFIX = 'hsk_'

export const storage = {
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(PREFIX + key)
      return item ? JSON.parse(item) : defaultValue
    } catch {
      return defaultValue
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify(value))
      return true
    } catch {
      console.warn('[storage] Gagal menyimpan:', key)
      return false
    }
  },

  remove(key) {
    try {
      localStorage.removeItem(PREFIX + key)
    } catch {
      // silent fail
    }
  },

  clear() {
    try {
      Object.keys(localStorage)
        .filter((k) => k.startsWith(PREFIX))
        .forEach((k) => localStorage.removeItem(k))
    } catch {
      // silent fail
    }
  },
}

// ─── Key-key yang dipakai di seluruh app ──────────────────────
export const STORAGE_KEYS = {
  PROGRESS:       'progress',      // { level: { seen: [], mastered: [] } }
  STREAK:         'streak',        // { count, lastDate, longestStreak }
  SETTINGS:       'settings',      // { theme, dailyTarget, quizMode, ... }
  QUIZ_HISTORY:   'quiz_history',  // array hasil kuis
  BOOKMARKS:      'bookmarks',     // array id kata yang di-bookmark
  DAILY_LOG:      'daily_log',     // { 'YYYY-MM-DD': { studied: n, correct: n } }
}