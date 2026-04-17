import { hsk1 } from './hsk1'
import { hsk2 } from './hsk2'
import { hsk3 } from './hsk3'
import { hsk4 } from './hsk4'
import { hsk5 } from './hsk5'

// ── Export individual ─────────────────────────────────────────
export { hsk1, hsk2, hsk3, hsk4, hsk5 }

// ── Semua kata dalam satu array ───────────────────────────────
export const allWords = [...hsk1, ...hsk2, ...hsk3, ...hsk4, ...hsk5]

// ── Map level → data ──────────────────────────────────────────
export const hskData = {
  1: hsk1,
  2: hsk2,
  3: hsk3,
  4: hsk4,
  5: hsk5,
}

// ── Ambil data untuk level tertentu ──────────────────────────
export const getLevel = (level) => hskData[level] || []

// ── Ambil data gabungan level 1 s/d level N ───────────────────
export const getUpToLevel = (maxLevel) => {
  return Array.from({ length: maxLevel }, (_, i) => hskData[i + 1] || []).flat()
}

// ── Cari kata berdasarkan query ───────────────────────────────
export const searchWords = (query, levels = [1, 2, 3, 4, 5]) => {
  const q = query.toLowerCase().trim()
  if (!q) return []

  const pool = levels.flatMap((l) => hskData[l] || [])
  return pool.filter(
    (w) =>
      w.hanzi.includes(q) ||
      w.pinyin.toLowerCase().includes(q) ||
      w.arti.toLowerCase().includes(q)
  )
}

// ── Ambil kata berdasarkan ID ─────────────────────────────────
export const getWordById = (id) => allWords.find((w) => w.id === id) || null

// ── Statistik data ────────────────────────────────────────────
export const dataStats = {
  totalWords:  allWords.length,
  byLevel: {
    1: hsk1.length,
    2: hsk2.length,
    3: hsk3.length,
    4: hsk4.length,
    5: hsk5.length,
  },
}