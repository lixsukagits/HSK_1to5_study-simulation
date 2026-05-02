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
  GRAMMAR:      'grammar',       // { level: [id, ...] }
}

// ─── Supabase Abstraction Layer ────────────────────────────────
import { supabase } from '../lib/supabase'
import { enqueue } from '../lib/offlinequeue'

export function isOnline() {
  return navigator.onLine
}

/**
 * Upsert data ke Supabase (atau queue jika offline)
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
 * Fetch raw rows dari Supabase, fallback ke localStorage jika offline/error
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

// ─── Per-tabel loader: baca Supabase → hydrate localStorage ───
// Setiap loader mengembalikan data siap pakai (sama shape dengan localStorage)
// dan menyimpannya ke localStorage sebagai cache.

/**
 * Load progress dari user_progress_snapshot
 * Shape: { level: { seen: [], mastered: [] } }
 */
export async function loadProgress(userId) {
  const fallback = storage.get(STORAGE_KEYS.PROGRESS, {})
  if (!userId) return fallback
  try {
    const { data, error } = await supabase
      .from('user_progress_snapshot')
      .select('data')
      .eq('user_id', userId)
      .maybeSingle()
    if (error || !data) return fallback
    const parsed = data.data ?? {}
    storage.set(STORAGE_KEYS.PROGRESS, parsed)
    return parsed
  } catch {
    return fallback
  }
}

/**
 * Load streak dari user_progress_snapshot (disimpan dalam field data.streak)
 * Shape: { count, lastDate, longestStreak }
 */
export async function loadStreak(userId) {
  const fallback = storage.get(STORAGE_KEYS.STREAK, { count: 0, longestStreak: 0, lastDate: null })
  if (!userId) return fallback
  try {
    const { data, error } = await supabase
      .from('user_progress_snapshot')
      .select('data')
      .eq('user_id', userId)
      .maybeSingle()
    if (error || !data?.data?.streak) return fallback
    const parsed = data.data.streak
    storage.set(STORAGE_KEYS.STREAK, parsed)
    return parsed
  } catch {
    return fallback
  }
}

/**
 * Load bookmarks dari tabel bookmarks
 * Shape: string[] (array vocab_id)
 */
export async function loadBookmarks(userId) {
  const fallback = storage.get(STORAGE_KEYS.BOOKMARKS, [])
  if (!userId) return fallback
  try {
    const { data, error } = await supabase
      .from('bookmarks')
      .select('vocab_id')
      .eq('user_id', userId)
    if (error) return fallback
    const ids = (data ?? []).map(r => r.vocab_id)
    storage.set(STORAGE_KEYS.BOOKMARKS, ids)
    return ids
  } catch {
    return fallback
  }
}

/**
 * Load settings dari user_settings
 * Shape: flat settings object
 */
export async function loadSettings(userId, defaults = {}) {
  const fallback = { ...defaults, ...storage.get(STORAGE_KEYS.SETTINGS, {}) }
  if (!userId) return fallback
  try {
    const { data, error } = await supabase
      .from('user_settings')
      .select('data')
      .eq('user_id', userId)
      .maybeSingle()
    if (error || !data) return fallback
    const parsed = { ...defaults, ...(data.data ?? {}) }
    storage.set(STORAGE_KEYS.SETTINGS, parsed)
    return parsed
  } catch {
    return fallback
  }
}

/**
 * Load SRS dari user_srs
 * Shape: { wordId: { interval, easeFactor, nextReview, reps } }
 */
export async function loadSRS(userId) {
  const fallback = storage.get(STORAGE_KEYS.SRS, {})
  if (!userId) return fallback
  try {
    const { data, error } = await supabase
      .from('user_srs')
      .select('word_id, interval, ease_factor, next_review, reps')
      .eq('user_id', userId)
    if (error) return fallback
    const map = {}
    for (const row of (data ?? [])) {
      map[row.word_id] = {
        interval:   row.interval,
        easeFactor: row.ease_factor,
        nextReview: row.next_review ? new Date(row.next_review).getTime() : null,
        reps:       row.reps,
      }
    }
    storage.set(STORAGE_KEYS.SRS, map)
    return map
  } catch {
    return fallback
  }
}

/**
 * Load achievements dari user_achievements
 * Shape: { achievementId: { unlockedAt } }
 */
export async function loadAchievements(userId) {
  const fallback = storage.get(STORAGE_KEYS.ACHIEVEMENTS, {})
  if (!userId) return fallback
  try {
    const { data, error } = await supabase
      .from('user_achievements')
      .select('achievement_id, unlocked_at')
      .eq('user_id', userId)
    if (error) return fallback
    const map = {}
    for (const row of (data ?? [])) {
      map[row.achievement_id] = { unlockedAt: new Date(row.unlocked_at).getTime() }
    }
    storage.set(STORAGE_KEYS.ACHIEVEMENTS, map)
    return map
  } catch {
    return fallback
  }
}

/**
 * Load XP dari user_xp
 * Shape: { total }
 */
export async function loadXP(userId) {
  const fallback = storage.get(STORAGE_KEYS.XP, { total: 0 })
  if (!userId) return fallback
  try {
    const { data, error } = await supabase
      .from('user_xp')
      .select('total')
      .eq('user_id', userId)
      .maybeSingle()
    if (error || !data) return fallback
    const parsed = { total: data.total ?? 0 }
    storage.set(STORAGE_KEYS.XP, parsed)
    return parsed
  } catch {
    return fallback
  }
}

/**
 * Load daily activity log dari daily_activity
 * Shape: { 'YYYY-MM-DD': { studied, correct } }
 */
export async function loadDailyLog(userId) {
  const fallback = storage.get(STORAGE_KEYS.DAILY_LOG, {})
  if (!userId) return fallback
  try {
    const { data, error } = await supabase
      .from('daily_activity')
      .select('activity_date, words_studied, quiz_score')
      .eq('user_id', userId)
    if (error) return fallback
    const map = {}
    for (const row of (data ?? [])) {
      map[row.activity_date] = {
        studied: row.words_studied ?? 0,
        correct: row.quiz_score   ?? 0,
      }
    }
    storage.set(STORAGE_KEYS.DAILY_LOG, map)
    return map
  } catch {
    return fallback
  }
}

/**
 * Load grammar progress dari user_progress_snapshot (field data.grammar)
 * Shape: { level: [id, ...] }
 */
export async function loadGrammar(userId) {
  const fallback = storage.get(STORAGE_KEYS.GRAMMAR, {})
  if (!userId) return fallback
  try {
    const { data, error } = await supabase
      .from('user_progress_snapshot')
      .select('data')
      .eq('user_id', userId)
      .maybeSingle()
    if (error || !data?.data?.grammar) return fallback
    const parsed = data.data.grammar
    storage.set(STORAGE_KEYS.GRAMMAR, parsed)
    return parsed
  } catch {
    return fallback
  }
}