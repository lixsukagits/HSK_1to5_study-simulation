import { supabase } from './supabase'
import { getAll, remove, hasItems } from './offlinequeue'

// ─── Flush offline queue ke Supabase ────────────────────────────────────────

export async function flushOfflineQueue(userId) {
  if (!userId) return
  const hasQueue = await hasItems()
  if (!hasQueue) return

  const items = await getAll()

  for (const item of items) {
    try {
      if (item.operation === 'upsert') {
        const { error } = await supabase
          .from(item.table)
          .upsert({ ...item.payload, user_id: userId })
        if (error) throw error
      } else if (item.operation === 'delete') {
        const { error } = await supabase
          .from(item.table)
          .delete()
          .match({ ...item.payload, user_id: userId })
        if (error) throw error
      }
      await remove(item.id)
    } catch (err) {
      console.error(`[sync] Gagal sync item ${item.id}:`, err)
    }
  }
}

// ─── Migrasi localStorage → Supabase (1x saat login pertama) ────────────────

const MIGRATION_KEY = 'hsk_migrated_to_supabase'

export function isMigrated() {
  return localStorage.getItem(MIGRATION_KEY) === 'true'
}

export async function migrateFromLocalStorage(userId) {
  if (isMigrated()) return
  if (!userId) return

  console.log('[sync] Memulai migrasi dari localStorage ke Supabase...')

  try {
    await Promise.all([
      migrateProgress(userId),
      migrateBookmarks(userId),
      migrateDailyActivity(userId),
      migrateAchievements(userId),
      migrateSettings(userId),
      migrateSRS(userId),
      migrateXP(userId),
    ])
    localStorage.setItem(MIGRATION_KEY, 'true')
    console.log('[sync] Migrasi selesai!')
  } catch (err) {
    console.error('[sync] Migrasi gagal:', err)
  }
}

// progress: { level: { seen: [], mastered: [] } }
async function migrateProgress(userId) {
  const raw = localStorage.getItem('hsk_progress')
  if (!raw) return
  try {
    const data = JSON.parse(raw)
    await supabase.from('user_progress_snapshot').upsert({
      user_id: userId,
      data,
      updated_at: new Date().toISOString(),
    })
  } catch (e) { console.warn('[sync] Skip progress:', e) }
}

// bookmarks: array of wordId
async function migrateBookmarks(userId) {
  const raw = localStorage.getItem('hsk_bookmarks')
  if (!raw) return
  try {
    const ids = JSON.parse(raw)
    if (!Array.isArray(ids) || ids.length === 0) return
    const rows = ids.map(vocab_id => ({ user_id: userId, vocab_id }))
    await supabase.from('bookmarks').upsert(rows)
  } catch (e) { console.warn('[sync] Skip bookmarks:', e) }
}

// daily_log: { 'YYYY-MM-DD': { studied, correct } }
async function migrateDailyActivity(userId) {
  const raw = localStorage.getItem('hsk_daily_log')
  if (!raw) return
  try {
    const data = JSON.parse(raw)
    const rows = Object.entries(data).map(([date, val]) => ({
      user_id: userId,
      activity_date: date,
      words_studied: val.studied ?? 0,
      quiz_score: val.correct ?? null,
    }))
    if (rows.length > 0) await supabase.from('daily_activity').upsert(rows)
  } catch (e) { console.warn('[sync] Skip daily_log:', e) }
}

// achievements: { achievementId: { unlockedAt } }
async function migrateAchievements(userId) {
  const raw = localStorage.getItem('hsk_achievements')
  if (!raw) return
  try {
    const data = JSON.parse(raw)
    const rows = Object.entries(data).map(([achievement_id, val]) => ({
      user_id: userId,
      achievement_id,
      unlocked_at: val.unlockedAt ? new Date(val.unlockedAt).toISOString() : new Date().toISOString(),
    }))
    if (rows.length > 0) await supabase.from('user_achievements').upsert(rows)
  } catch (e) { console.warn('[sync] Skip achievements:', e) }
}

// settings: flat object
async function migrateSettings(userId) {
  const raw = localStorage.getItem('hsk_settings')
  if (!raw) return
  try {
    const data = JSON.parse(raw)
    await supabase.from('user_settings').upsert({
      user_id: userId,
      data,
      updated_at: new Date().toISOString(),
    })
  } catch (e) { console.warn('[sync] Skip settings:', e) }
}

// srs: { wordId: { interval, easeFactor, nextReview, reps } }
async function migrateSRS(userId) {
  const raw = localStorage.getItem('hsk_srs')
  if (!raw) return
  try {
    const data = JSON.parse(raw)
    const rows = Object.entries(data).map(([word_id, val]) => ({
      user_id: userId,
      word_id,
      interval: val.interval ?? 1,
      ease_factor: val.easeFactor ?? 2.5,
      next_review: val.nextReview ?? null,
      reps: val.reps ?? 0,
    }))
    if (rows.length > 0) await supabase.from('user_srs').upsert(rows)
  } catch (e) { console.warn('[sync] Skip srs:', e) }
}

// xp: { total }
async function migrateXP(userId) {
  const raw = localStorage.getItem('hsk_xp')
  if (!raw) return
  try {
    const data = JSON.parse(raw)
    await supabase.from('user_xp').upsert({
      user_id: userId,
      total: data.total ?? 0,
    })
  } catch (e) { console.warn('[sync] Skip xp:', e) }
}