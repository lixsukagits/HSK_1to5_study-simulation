// ============================================================
// HSK 3.0 Vocabulary Index — Data Lengkap HSK 1-5
// Format: { id, hanzi, pinyin, arti, contoh, terjemahan, level }
// ============================================================

import { hsk1 } from './hsk1.js'
import { hsk2 } from './hsk2.js'
import { hsk3 } from './hsk3.js'
import { hsk4 } from './hsk4.js'
import { hsk5 } from './hsk5.js'

// ── Data Exports ──────────────────────────────────────────────
export { hsk1, hsk2, hsk3, hsk4, hsk5 }

/** Semua kata HSK 1-5 dalam satu array */
export const allWords = [...hsk1, ...hsk2, ...hsk3, ...hsk4, ...hsk5]

/** Objek berindeks level */
export const hskData = { 1: hsk1, 2: hsk2, 3: hsk3, 4: hsk4, 5: hsk5 }

// ── Fungsi Pencarian & Filter ────────────────────────────────

/**
 * Ambil semua kata sampai level tertentu (inklusif)
 * Contoh: getUpToLevel(3) => hsk1 + hsk2 + hsk3
 */
export function getUpToLevel(maxLevel) {
  return allWords.filter(w => w.level <= maxLevel)
}

/**
 * Ambil kata dari level tertentu saja
 */
export function getLevel(level) {
  return hskData[level] || []
}

/**
 * Cari kata berdasarkan hanzi, pinyin, atau arti Indonesia
 * @param {string} query - kata kunci pencarian
 * @param {number[]} [levels] - filter level (opsional)
 */
export function searchWords(query, levels = null) {
  const q = query.trim().toLowerCase()
  if (!q) return []
  let pool = levels ? allWords.filter(w => levels.includes(w.level)) : allWords
  return pool.filter(w =>
    w.hanzi.includes(q) ||
    w.pinyin.toLowerCase().includes(q) ||
    w.arti.toLowerCase().includes(q) ||
    w.contoh.includes(q) ||
    w.terjemahan.toLowerCase().includes(q)
  )
}

/**
 * Ambil kata berdasarkan ID
 * @param {string} id - contoh: '1-001', '4-123'
 */
export function getWordById(id) {
  return allWords.find(w => w.id === id) || null
}

/**
 * Ambil kata acak
 * @param {number} n - jumlah kata
 * @param {number[]} [levels] - filter level (opsional), default semua level
 */
export function getRandomWords(n, levels = null) {
  let pool = levels ? allWords.filter(w => levels.includes(w.level)) : allWords
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, n)
}

/**
 * Cari kata berdasarkan awal karakter hanzi
 * @param {string} char - karakter pertama
 */
export function getWordsByInitial(char) {
  return allWords.filter(w => w.hanzi.startsWith(char))
}

/**
 * Ambil kata berdasarkan panjang hanzi
 * @param {number} length - jumlah karakter
 * @param {number[]} [levels] - filter level (opsional)
 */
export function getWordsByLength(length, levels = null) {
  let pool = levels ? allWords.filter(w => levels.includes(w.level)) : allWords
  return pool.filter(w => w.hanzi.length === length)
}

/**
 * Ambil kata yang pinyinnya dimulai dengan nada tertentu
 * @param {number} tone - nada 1-4 (1=ā/ē/ī, 2=á/é, 3=ǎ/ě, 4=à/è)
 * @param {number[]} [levels] - filter level (opsional)
 */
export function getWordsByTone(tone, levels = null) {
  const toneChars = {
    1: /[āēīōūǖĀĒĪŌŪǕ]/,
    2: /[áéíóúǘÁÉÍÓÚǗ]/,
    3: /[ǎěǐǒǔǚǍĚǏǑǓǙ]/,
    4: /[àèìòùǜÀÈÌÒÙǛ]/,
  }
  const pattern = toneChars[tone]
  if (!pattern) return []
  let pool = levels ? allWords.filter(w => levels.includes(w.level)) : allWords
  return pool.filter(w => pattern.test(w.pinyin.split(' ')[0]))
}

/**
 * Cek apakah sebuah hanzi ada di database
 * @param {string} hanzi
 * @returns {{ found: boolean, word: object|null, level: number|null }}
 */
export function checkWord(hanzi) {
  const word = allWords.find(w => w.hanzi === hanzi)
  return {
    found: !!word,
    word: word || null,
    level: word ? word.level : null
  }
}

/**
 * Ambil semua kata dalam rentang id tertentu
 * @param {string} startId - contoh: '4-001'
 * @param {string} endId   - contoh: '4-100'
 */
export function getWordsByIdRange(startId, endId) {
  const [startLevel, startNum] = startId.split('-').map(Number)
  const [endLevel, endNum] = endId.split('-').map(Number)
  return allWords.filter(w => {
    const [level, num] = w.id.split('-').map(Number)
    if (level < startLevel || level > endLevel) return false
    if (level === startLevel && num < startNum) return false
    if (level === endLevel && num > endNum) return false
    return true
  })
}

// ── Quiz & Latihan ───────────────────────────────────────────

/**
 * Buat soal pilihan ganda
 * @param {object} correctWord - kata yang benar
 * @param {number} numOptions  - jumlah pilihan (default 4)
 * @param {number[]} [levels]  - pool soal dari level tertentu
 * @returns {{ question: string, options: string[], correct: number, word: object }}
 */
export function makeQuizQuestion(correctWord, numOptions = 4, levels = null) {
  let pool = (levels ? getUpToLevel(Math.max(...levels)) : allWords)
    .filter(w => w.id !== correctWord.id)

  const distractors = [...pool]
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
    word: correctWord
  }
}

/**
 * Buat sesi latihan flashcard
 * @param {number} n - jumlah kata dalam sesi
 * @param {number[]} [levels] - level yang dilatih
 * @returns {object[]} - array kata yang diacak
 */
export function createStudySession(n = 20, levels = null) {
  return getRandomWords(n, levels)
}

// ── Statistik ────────────────────────────────────────────────

/**
 * Statistik lengkap dataset
 */
export const dataStats = {
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
  description: 'HSK 3.0 Kosakata Lengkap Level 1-5 dengan Terjemahan Bahasa Indonesia'
}

// ── Helper Kecil ─────────────────────────────────────────────

/**
 * Ambil kata sebelum/sesudah berdasarkan ID
 */
export function getAdjacentWords(id) {
  const idx = allWords.findIndex(w => w.id === id)
  if (idx === -1) return { prev: null, next: null }
  return {
    prev: idx > 0 ? allWords[idx - 1] : null,
    next: idx < allWords.length - 1 ? allWords[idx + 1] : null,
    current: allWords[idx]
  }
}

/**
 * Filter kata berdasarkan panjang arti Indonesia (kata sederhana)
 * berguna untuk pemula yang ingin belajar kata dengan arti singkat
 */
export function getSimpleWords(maxArtiLength = 20, levels = null) {
  let pool = levels ? allWords.filter(w => levels.includes(w.level)) : allWords
  return pool.filter(w => w.arti.length <= maxArtiLength)
}

export default {
  hsk1, hsk2, hsk3, hsk4, hsk5,
  allWords, hskData, dataStats,
  getLevel, getUpToLevel, searchWords, getWordById,
  getRandomWords, getWordsByInitial, getWordsByLength,
  getWordsByTone, checkWord, getWordsByIdRange,
  makeQuizQuestion, createStudySession, getAdjacentWords,
  getSimpleWords
}