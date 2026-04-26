// ============================================================
// HSK 3.0 Vocabulary Index — Data Lengkap HSK 1-5
// Format: { id, hanzi, pinyin, arti, contoh, terjemahan, level }
// Sumber:
//   - HSK 3.0 Test Standard (汉考国际)
//   - GF 0025-2021 中文水平等级标准 (Kementerian Pendidikan China)
// ============================================================

import { hsk1 } from './hsk1.js'
import { hsk1Supplement } from './hsk1supplement.js'
import { hsk1Grammar } from './hsk1grammar.js'

import { hsk2 } from './hsk2.js'
import { hsk2Supplement } from './hsk2supplement.js'
import { hsk2Grammar } from './hsk2grammar.js'

import { hsk3 } from './hsk3.js'
import { hsk3Supplement } from './hsk3supplement.js'
import { hsk3Grammar } from './hsk3grammar.js'

import { hsk4 } from './hsk4.js'
import { hsk4Supplement } from './hsk4supplement.js'
import { hsk4Grammar } from './hsk4grammar.js'

import { hsk5a } from './hsk5a.js'
import { hsk5b } from './hsk5b.js'
import { hsk5Supplement } from './hsk5_supplement.js'
import { hsk5Grammar } from './hsk5grammar.js'

// ── Vocab: Gabungan Test Standard + Supplement GF 0025 ───────

/** HSK 1: 300 kata resmi + 145 kata tambahan GF 0025 */
export const hsk1Complete = [...hsk1, ...hsk1Supplement]

/** HSK 2: kata resmi + supplement GF 0025 */
export const hsk2Complete = [...hsk2, ...hsk2Supplement]

/** HSK 3: kata resmi + supplement GF 0025 */
export const hsk3Complete = [...hsk3, ...hsk3Supplement]

/** HSK 4: kata resmi + supplement GF 0025 */
export const hsk4Complete = [...hsk4, ...hsk4Supplement]

/** HSK 5: kata resmi (1592 kata) + supplement GF 0025 (64 kata) */
export const hsk5 = [...hsk5a, ...hsk5b]
export const hsk5Complete = [...hsk5a, ...hsk5b, ...hsk5Supplement]

// ── Grammar Exports ──────────────────────────────────────────
export { hsk1Grammar }
export { hsk2Grammar }
export { hsk3Grammar }
export { hsk4Grammar }
export { hsk5Grammar }

/** Semua grammar dalam satu object */
export const allGrammar = {
  1: hsk1Grammar,
  2: hsk2Grammar,
  3: hsk3Grammar,
  4: hsk4Grammar,
  5: hsk5Grammar,
}

// ── Raw Exports (Test Standard saja, tanpa supplement) ───────
export { hsk1, hsk2, hsk3, hsk4, hsk5 }
export { hsk1Supplement, hsk2Supplement, hsk3Supplement, hsk4Supplement, hsk5Supplement }

/** Semua kata HSK 1-5 (Test Standard) */
export const allWords = [...hsk1, ...hsk2, ...hsk3, ...hsk4, ...hsk5]

/** Semua kata HSK 1-5 (Test Standard + GF 0025 supplement) */
export const allWordsComplete = [
  ...hsk1Complete,
  ...hsk2Complete,
  ...hsk3Complete,
  ...hsk4Complete,
  ...hsk5Complete,
]

/** Objek berindeks level — Test Standard */
export const hskData = { 1: hsk1, 2: hsk2, 3: hsk3, 4: hsk4, 5: hsk5 }

/** Objek berindeks level — Complete (dengan supplement) */
export const hskDataComplete = {
  1: hsk1Complete,
  2: hsk2Complete,
  3: hsk3Complete,
  4: hsk4Complete,
  5: hsk5Complete,
}

// ── Fungsi Pencarian & Filter ────────────────────────────────

/**
 * Ambil semua kata sampai level tertentu (inklusif)
 * Contoh: getUpToLevel(3) => hsk1 + hsk2 + hsk3
 * @param {number} maxLevel
 * @param {boolean} [complete=false] - pakai data complete (dengan supplement)
 */
export function getUpToLevel(maxLevel, complete = false) {
  const pool = complete ? allWordsComplete : allWords
  return pool.filter(w => w.level <= maxLevel)
}

/**
 * Ambil kata dari level tertentu saja
 * @param {number} level
 * @param {boolean} [complete=false]
 */
export function getLevel(level, complete = false) {
  const data = complete ? hskDataComplete : hskData
  return data[level] || []
}

/**
 * Cari kata berdasarkan hanzi, pinyin, atau arti Indonesia
 * @param {string} query
 * @param {number[]} [levels] - filter level (opsional)
 * @param {boolean} [complete=false]
 */
export function searchWords(query, levels = null, complete = false) {
  const q = query.trim().toLowerCase()
  if (!q) return []
  const pool = complete ? allWordsComplete : allWords
  let filtered = levels ? pool.filter(w => levels.includes(w.level)) : pool
  return filtered.filter(w =>
    w.hanzi.includes(q) ||
    w.pinyin.toLowerCase().includes(q) ||
    w.arti.toLowerCase().includes(q) ||
    w.contoh.includes(q) ||
    w.terjemahan.toLowerCase().includes(q)
  )
}

/**
 * Ambil kata berdasarkan ID
 * @param {string} id - contoh: '1-001', '4-123', '1-s01'
 */
export function getWordById(id) {
  return allWordsComplete.find(w => w.id === id) || null
}

/**
 * Ambil kata acak
 * @param {number} n
 * @param {number[]} [levels]
 * @param {boolean} [complete=false]
 */
export function getRandomWords(n, levels = null, complete = false) {
  const pool = complete ? allWordsComplete : allWords
  let filtered = levels ? pool.filter(w => levels.includes(w.level)) : pool
  const shuffled = [...filtered].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, n)
}

/**
 * Cari kata berdasarkan awal karakter hanzi
 * @param {string} char
 */
export function getWordsByInitial(char) {
  return allWordsComplete.filter(w => w.hanzi.startsWith(char))
}

/**
 * Ambil kata berdasarkan panjang hanzi
 * @param {number} length
 * @param {number[]} [levels]
 * @param {boolean} [complete=false]
 */
export function getWordsByLength(length, levels = null, complete = false) {
  const pool = complete ? allWordsComplete : allWords
  let filtered = levels ? pool.filter(w => levels.includes(w.level)) : pool
  return filtered.filter(w => w.hanzi.length === length)
}

/**
 * Ambil kata yang pinyinnya dimulai dengan nada tertentu
 * @param {number} tone - 1=ā, 2=á, 3=ǎ, 4=à
 * @param {number[]} [levels]
 * @param {boolean} [complete=false]
 */
export function getWordsByTone(tone, levels = null, complete = false) {
  const toneChars = {
    1: /[āēīōūǖĀĒĪŌŪǕ]/,
    2: /[áéíóúǘÁÉÍÓÚǗ]/,
    3: /[ǎěǐǒǔǚǍĚǏǑǓǙ]/,
    4: /[àèìòùǜÀÈÌÒÙǛ]/,
  }
  const pattern = toneChars[tone]
  if (!pattern) return []
  const pool = complete ? allWordsComplete : allWords
  let filtered = levels ? pool.filter(w => levels.includes(w.level)) : pool
  return filtered.filter(w => pattern.test(w.pinyin.split(' ')[0]))
}

/**
 * Cek apakah sebuah hanzi ada di database
 * @param {string} hanzi
 */
export function checkWord(hanzi) {
  const word = allWordsComplete.find(w => w.hanzi === hanzi)
  return {
    found: !!word,
    word: word || null,
    level: word ? word.level : null,
    isSupplementary: word ? word.id.includes('-s') : false,
  }
}

/**
 * Ambil semua kata dalam rentang id tertentu
 * @param {string} startId - contoh: '4-001'
 * @param {string} endId   - contoh: '4-100'
 */
export function getWordsByIdRange(startId, endId) {
  const parseId = (id) => {
    const parts = id.split('-')
    return { level: Number(parts[0]), num: Number(parts[1]) }
  }
  const start = parseId(startId)
  const end = parseId(endId)
  return allWords.filter(w => {
    const { level, num } = parseId(w.id)
    if (level < start.level || level > end.level) return false
    if (level === start.level && num < start.num) return false
    if (level === end.level && num > end.num) return false
    return true
  })
}

// ── Grammar ──────────────────────────────────────────────────

/**
 * Ambil semua poin grammar untuk level tertentu
 * @param {number} level
 */
export function getGrammarByLevel(level) {
  return allGrammar[level] || []
}

/**
 * Cari poin grammar berdasarkan keyword
 * @param {string} query
 * @param {number} [level] - filter level (opsional)
 */
export function searchGrammar(query, level = null) {
  const q = query.trim().toLowerCase()
  if (!q) return []
  const pool = level
    ? (allGrammar[level] || [])
    : Object.values(allGrammar).flat()
  return pool.filter(g =>
    g.title?.toLowerCase().includes(q) ||
    g.pattern?.toLowerCase().includes(q) ||
    g.explanation?.toLowerCase().includes(q) ||
    g.tags?.some(t => t.toLowerCase().includes(q))
  )
}

// ── Quiz & Latihan ───────────────────────────────────────────

/**
 * Buat soal pilihan ganda
 * @param {object} correctWord
 * @param {number} numOptions
 * @param {number[]} [levels]
 * @param {boolean} [complete=false]
 */
export function makeQuizQuestion(correctWord, numOptions = 4, levels = null, complete = false) {
  const pool = complete ? allWordsComplete : allWords
  let filtered = (levels ? pool.filter(w => levels.includes(w.level)) : pool)
    .filter(w => w.id !== correctWord.id)

  const distractors = [...filtered]
    .sort(() => Math.random() - 0.5)
    .slice(0, numOptions - 1)
    .map(w => w.arti)

  const options = [...distractors, correctWord.arti].sort(() => Math.random() - 0.5)
  const correctIndex = options.indexOf(correctWord.arti)

  return {
    question: correctWord.hanzi,
    pinyin: correctWord.pinyin,
    options,
    correct: correctIndex,
    word: correctWord,
  }
}

/**
 * Buat sesi latihan flashcard
 * @param {number} n
 * @param {number[]} [levels]
 * @param {boolean} [complete=false]
 */
export function createStudySession(n = 20, levels = null, complete = false) {
  return getRandomWords(n, levels, complete)
}

// ── Statistik ────────────────────────────────────────────────

/** Statistik lengkap dataset */
export const dataStats = {
  // Test Standard
  total: allWords.length,
  byLevel: {
    1: hsk1.length,
    2: hsk2.length,
    3: hsk3.length,
    4: hsk4.length,
    5: hsk5.length,
  },
  cumulative: {
    upToLevel1: hsk1.length,
    upToLevel2: hsk1.length + hsk2.length,
    upToLevel3: hsk1.length + hsk2.length + hsk3.length,
    upToLevel4: hsk1.length + hsk2.length + hsk3.length + hsk4.length,
    upToLevel5: allWords.length,
  },
  // Complete (dengan supplement GF 0025)
  totalComplete: allWordsComplete.length,
  byLevelComplete: {
    1: hsk1Complete.length,
    2: hsk2Complete.length,
    3: hsk3Complete.length,
    4: hsk4Complete.length,
    5: hsk5Complete.length,
  },
  grammarPoints: {
    1: hsk1Grammar.length,
    2: hsk2Grammar.length,
    3: hsk3Grammar.length,
    4: hsk4Grammar.length,
    5: hsk5Grammar.length,
  },
  description: 'HSK 3.0 Kosakata Lengkap Level 1-5 dengan Terjemahan Bahasa Indonesia',
  sources: [
    'HSK 3.0 Test Standard (汉考国际)',
    'GF 0025-2021 中文水平等级标准 (Kementerian Pendidikan China)',
  ],
}

// ── Helper Kecil ─────────────────────────────────────────────

/**
 * Ambil kata sebelum/sesudah berdasarkan ID
 */
export function getAdjacentWords(id) {
  const idx = allWordsComplete.findIndex(w => w.id === id)
  if (idx === -1) return { prev: null, next: null, current: null }
  return {
    prev: idx > 0 ? allWordsComplete[idx - 1] : null,
    next: idx < allWordsComplete.length - 1 ? allWordsComplete[idx + 1] : null,
    current: allWordsComplete[idx],
  }
}

/**
 * Filter kata berdasarkan panjang arti Indonesia (kata sederhana)
 * @param {number} maxArtiLength
 * @param {number[]} [levels]
 */
export function getSimpleWords(maxArtiLength = 20, levels = null) {
  let pool = levels ? allWords.filter(w => levels.includes(w.level)) : allWords
  return pool.filter(w => w.arti.length <= maxArtiLength)
}

export default {
  // Data
  hsk1, hsk2, hsk3, hsk4, hsk5,
  hsk1Supplement, hsk2Supplement, hsk3Supplement, hsk4Supplement, hsk5Supplement,
  hsk1Complete, hsk2Complete, hsk3Complete, hsk4Complete, hsk5Complete,
  allWords, allWordsComplete, hskData, hskDataComplete, dataStats,
  // Grammar
  allGrammar, hsk1Grammar, hsk2Grammar, hsk3Grammar, hsk4Grammar, hsk5Grammar,
  // Fungsi
  getLevel, getUpToLevel, searchWords, getWordById,
  getRandomWords, getWordsByInitial, getWordsByLength,
  getWordsByTone, checkWord, getWordsByIdRange,
  makeQuizQuestion, createStudySession,
  getAdjacentWords, getSimpleWords,
  getGrammarByLevel, searchGrammar,
}