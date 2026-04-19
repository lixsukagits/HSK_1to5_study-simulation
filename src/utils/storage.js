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
    } catch { /* silent fail */ }
  },

  clear() {
    try {
      Object.keys(localStorage)
        .filter(k => k.startsWith(PREFIX))
        .forEach(k => localStorage.removeItem(k))
    } catch { /* silent fail */ }
  },
}

// ─── Storage Keys ─────────────────────────────────────────────
export const STORAGE_KEYS = {
  PROGRESS:     'progress',      // { level: { seen: [], mastered: [] } }
  STREAK:       'streak',        // { count, lastDate, longestStreak }
  SETTINGS:     'settings',      // pengaturan user
  QUIZ_HISTORY: 'quiz_history',  // array hasil kuis
  BOOKMARKS:    'bookmarks',     // Set id kata yang di-bookmark
  DAILY_LOG:    'daily_log',     // { 'YYYY-MM-DD': { studied, correct } }
  SRS:          'srs',           // { wordId: { interval, easeFactor, nextReview, reps } }
  ACHIEVEMENTS: 'achievements',  // { achievementId: { unlockedAt } }
  XP:           'xp',            // { total, weeklyLog: { 'YYYY-WW': xp } }
}