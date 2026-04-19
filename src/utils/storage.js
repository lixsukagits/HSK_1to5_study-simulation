// Wrapper localStorage yang aman — tidak crash jika storage penuh / private mode
// Tetap dipakai sebagai cache lokal dan fallback offline

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
  BOOKMARKS:    'bookmarks',     // array id kata yang di-bookmark
  DAILY_LOG:    'daily_log',     // { 'YYYY-MM-DD': { studied, correct } }
  SRS:          'srs',           // { wordId: { interval, easeFactor, nextReview, reps } }
  ACHIEVEMENTS: 'achievements',  // { achievementId: { unlockedAt } }
  XP:           'xp',            // { total }
}

// ─── Supabase Abstraction Layer ────────────────────────────────
// Dipakai oleh hooks untuk sync ke Supabase (online) atau queue (offline)

import { supabase } from '../lib/supabase'
import { enqueue } from '../lib/offlinequeue'

export function isOnline() {
  return navigator.onLine
}

/**
 * Upsert data ke Supabase (atau queue jika offline)
 * @param {string} table - nama tabel Supabase
 * @param {object} payload - harus sudah include user_id
 */
export async function upsertData(table, payload) {
  if (isOnline()) {
    const { error } = await supabase.from(table).upsert(payload)
    if (error) {
      console.error(`[storage] Gagal upsert ke ${table}:`, error)
      throw error
    }
  } else {
    await enqueue(table, 'upsert', payload)
  }
}

/**
 * Delete data dari Supabase (atau queue jika offline)
 */
export async function deleteData(table, match) {
  if (isOnline()) {
    const { error } = await supabase.from(table).delete().match(match)
    if (error) {
      console.error(`[storage] Gagal delete dari ${table}:`, error)
      throw error
    }
  } else {
    await enqueue(table, 'delete', match)
  }
}

/**
 * Fetch data dari Supabase, fallback ke localStorage jika offline/error
 */
export async function fetchData(table, userId, localKey = null) {
  if (!isOnline() && localKey) {
    return storage.get(localKey, null)
  }

  const { data, error } = await supabase
    .from(table)
    .select('*')
    .eq('user_id', userId)

  if (error) {
    console.error(`[storage] Gagal fetch dari ${table}:`, error)
    return localKey ? storage.get(localKey, null) : null
  }

  return data
}