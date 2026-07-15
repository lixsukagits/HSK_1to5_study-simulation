// ============================================================
// HSK 3.0 Vocabulary Index — Data Lengkap HSK 1-5
// Format vocab   : { id, hanzi, pinyin, arti, contoh, terjemahan, level, topic }
// Format grammar : { id, gfCode, title, titleZh, pattern, explanation, examples, tags, level, relatedVocabIds }
// Format topics  : { id, code, tier1, tier2, tier3, vocabIds, level }
// Format tasks   : { id, code, titleZh, titleId, skills, level }
// Format confus. : { id, title, items, explanation, examples, level }
// Sumber:
//   - HSK 3.0 Test Standard (汉考国际) — 任务大纲/话题大纲/语法大纲/词汇
//   - GF 0025-2021 中文水平等级标准 (Kementerian Pendidikan China)
//
// PENTING (naming convention untuk HSK 2-5, jangan typo — case sensitive):
//   hsk[N].js            → export const hsk[N]
//   hsk[N]grammar.js      → export const hsk[N]Grammar
//   hsk[N]topics.js       → export const hsk[N]Topics
//   hsk[N]tasks.js        → export const hsk[N]Tasks
//   hsk[N]confusables.js  → export const hsk[N]Confusables
// Semua nama file huruf kecil semua, semua nama export PascalCase setelah "hsk[N]".
// ============================================================

import { hsk1 } from './hsk1.js'
import { hsk1TopicLabels } from './hsk1.js'
import { hsk1Grammar } from './hsk1grammar.js'
import { hsk1Topics } from './hsk1topics.js'
import { hsk1Tasks } from './hsk1tasks.js'
import { hsk1Confusables } from './hsk1confusables.js'

import { hsk2 } from './hsk2.js'
import { hsk2TopicLabels } from './hsk2.js'
import { hsk2Grammar } from './hsk2grammar.js'
import { hsk2Topics } from './hsk2topics.js'
import { hsk2Tasks } from './hsk2tasks.js'
import { hsk2Confusables } from './hsk2confusables.js'

import { hsk3 } from './hsk3.js'
import { hsk3TopicLabels } from './hsk3.js'
import { hsk3Grammar } from './hsk3grammar.js'
import { hsk3Topics } from './hsk3topics.js'
import { hsk3Tasks } from './hsk3tasks.js'
import { hsk3Confusables } from './hsk3confusables.js'

import { hsk4 } from './hsk4.js'
import { hsk4TopicLabels } from './hsk4.js'
import { hsk4Grammar } from './hsk4grammar.js'
import { hsk4Topics } from './hsk4topics.js'
import { hsk4Tasks } from './hsk4tasks.js'
import { hsk4Confusables } from './hsk4confusables.js'

import { hsk5 } from './hsk5.js'
import { hsk5Grammar } from './hsk5grammar.js'
import { hsk5Topics } from './hsk5topics.js'
import { hsk5Tasks } from './hsk5tasks.js'
import { hsk5Confusables } from './hsk5confusables.js'

// ── Vocab: semua level murni dari Test Standard resmi (tanpa supplement) ──
// Catatan: supplement GF 0025 (kata tambahan di luar cakupan resmi HSK 3.0)
// SUDAH DIHAPUS TOTAL dari dataset ini untuk semua level (1-5) karena tidak
// terpakai lagi. "Complete" di bawah ini kini sama persis dengan data biasa
// (dipertahankan hanya demi kompatibilitas nama untuk kode yang sudah pakai
// hsk2Complete/hskDataComplete/allWordsComplete dst).
export const hsk1Complete = [...hsk1]

/** HSK 2: kata resmi (tanpa supplement) */
export const hsk2Complete = [...hsk2]

/** HSK 3: kata resmi (tanpa supplement) */
export const hsk3Complete = [...hsk3]

/** HSK 4: kata resmi (tanpa supplement) */
export const hsk4Complete = [...hsk4]

/** HSK 5: kata resmi (1600 kata, satu file hsk5.js, tanpa supplement) */
export const hsk5Complete = [...hsk5]

// ── Grammar Exports ──────────────────────────────────────────
export { hsk1Grammar }
export { hsk2Grammar }
export { hsk3Grammar }
export { hsk4Grammar }
export { hsk5Grammar }

/** Semua grammar dalam satu object, per level */
export const allGrammar = {
  1: hsk1Grammar,
  2: hsk2Grammar,
  3: hsk3Grammar,
  4: hsk4Grammar,
  5: hsk5Grammar,
}

// ── Topics Exports (HSK1-4 lengkap; HSK5 baru di-wire sesi ini) ──
export { hsk1Topics, hsk2Topics, hsk3Topics, hsk4Topics, hsk5Topics }
export { hsk1TopicLabels, hsk2TopicLabels, hsk3TopicLabels, hsk4TopicLabels }

/** Semua topik per level */
export const allTopics = {
  1: hsk1Topics,
  2: hsk2Topics,
  3: hsk3Topics,
  4: hsk4Topics,
  5: hsk5Topics,
}

/** Label kategori filter vocab per level (hsk1TopicLabels dst) — object kosong
 *  di level yang belum punya field `topic` di vocabnya (HSK5 memang tidak punya field topic) */
export const topicLabelsByLevel = {
  1: hsk1TopicLabels,
  2: hsk2TopicLabels,
  3: hsk3TopicLabels,
  4: hsk4TopicLabels,
  5: {},
}

// ── Tasks Exports (HSK1-5 lengkap) ────────────────────────────
export { hsk1Tasks, hsk2Tasks, hsk3Tasks, hsk4Tasks, hsk5Tasks }

/** Semua task (任务大纲) per level */
export const allTasks = {
  1: hsk1Tasks,
  2: hsk2Tasks,
  3: hsk3Tasks,
  4: hsk4Tasks,
  5: hsk5Tasks,
}

// ── Confusables Exports (HSK1-5 lengkap) ──────────────────────
export { hsk1Confusables, hsk2Confusables, hsk3Confusables, hsk4Confusables, hsk5Confusables }

/** Semua confusable-word groups per level */
export const allConfusables = {
  1: hsk1Confusables,
  2: hsk2Confusables,
  3: hsk3Confusables,
  4: hsk4Confusables,
  5: hsk5Confusables,
}

// ── Raw Exports (Test Standard resmi, tanpa supplement) ──────
export { hsk1, hsk2, hsk3, hsk4, hsk5 }

/** Semua kata HSK 1-5 (Test Standard, HSK1 tanpa supplement) */
export const allWords = [...hsk1, ...hsk2, ...hsk3, ...hsk4, ...hsk5]

/** Semua kata HSK 1-5 (Complete — alias kompatibilitas nama, sama dengan allWords karena supplement sudah dihapus) */
export const allWordsComplete = [
  ...hsk1Complete,
  ...hsk2Complete,
  ...hsk3Complete,
  ...hsk4Complete,
  ...hsk5Complete,
]

/** Objek berindeks level — Test Standard */
export const hskData = { 1: hsk1, 2: hsk2, 3: hsk3, 4: hsk4, 5: hsk5 }

/** Objek berindeks level — Complete (alias kompatibilitas nama, supplement sudah dihapus) */
export const hskDataComplete = {
  1: hsk1Complete,
  2: hsk2Complete,
  3: hsk3Complete,
  4: hsk4Complete,
  5: hsk5Complete,
}

// ── Fungsi Pencarian & Filter (Vocab) ─────────────────────────

/**
 * Ambil semua kata sampai level tertentu (inklusif)
 * Contoh: getUpToLevel(3) => hsk1 + hsk2 + hsk3
 * @param {number} maxLevel
 * @param {boolean} [complete=false] - pakai data complete (alias, sama dengan data biasa)
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
 * Ambil kata dari satu level, difilter berdasarkan kategori topic
 * (field `topic` ada di vocab HSK1-4; HSK5 tidak punya field ini)
 * @param {number} level
 * @param {string} topic - kode kategori, misal 'makanan', 'pribadi', dst
 */
export function getWordsByTopic(level, topic) {
  const pool = hskData[level] || []
  if (!topic || topic === 'all') return pool
  return pool.filter(w => w.topic === topic)
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
    // Supplement (dan id berakhiran '-s') sudah dihapus total dari dataset,
    // field ini dipertahankan demi kompatibilitas nama tapi selalu false.
    isSupplementary: false,
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

/**
 * Ambil kosakata yang relevan untuk satu poin grammar tertentu
 * @param {number} level
 * @param {string} grammarId - contoh: 'g1-002'
 */
export function getVocabForGrammar(level, grammarId) {
  const g = (allGrammar[level] || []).find(g => g.id === grammarId)
  if (!g || !g.relatedVocabIds?.length) return []
  const pool = hskDataComplete[level] || []
  return g.relatedVocabIds.map(id => pool.find(w => w.id === id)).filter(Boolean)
}

// ── Topics (话题大纲) ─────────────────────────────────────────

/**
 * Ambil semua topik (tier3) untuk level tertentu
 * @param {number} level
 */
export function getTopicsByLevel(level) {
  return allTopics[level] || []
}

/**
 * Ambil kosakata yang tergabung dalam satu tier3 topic tertentu
 * @param {number} level
 * @param {string} topicId - contoh: 'topic-1-08' (id tier3) atau code '2.2.1'
 */
export function getVocabForTopic(level, topicIdOrCode) {
  const topics = allTopics[level] || []
  const t = topics.find(t => t.id === topicIdOrCode || t.code === topicIdOrCode)
  if (!t) return []
  const pool = hskDataComplete[level] || []
  return t.vocabIds.map(id => pool.find(w => w.id === id)).filter(Boolean)
}

// ── Tasks (任务大纲) ──────────────────────────────────────────

/**
 * Ambil semua task/kompetensi untuk level tertentu
 * @param {number} level
 */
export function getTasksByLevel(level) {
  return allTasks[level] || []
}

// ── Confusables ──────────────────────────────────────────────

/**
 * Ambil semua grup kata gampang-ketuker untuk level tertentu
 * @param {number} level
 */
export function getConfusablesByLevel(level) {
  return allConfusables[level] || []
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
  // Complete (alias kompatibilitas nama — supplement sudah dihapus, sama dengan byLevel)
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
  topicsCount: {
    1: hsk1Topics.length,
    2: hsk2Topics.length,
    3: hsk3Topics.length,
    4: hsk4Topics.length,
    5: hsk5Topics.length,
  },
  tasksCount: {
    1: hsk1Tasks.length,
    2: hsk2Tasks.length,
    3: hsk3Tasks.length,
    4: hsk4Tasks.length,
    5: hsk5Tasks.length,
  },
  confusablesCount: {
    1: hsk1Confusables.length,
    2: hsk2Confusables.length,
    3: hsk3Confusables.length,
    4: hsk4Confusables.length,
    5: hsk5Confusables.length,
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
  hsk1Complete, hsk2Complete, hsk3Complete, hsk4Complete, hsk5Complete,
  allWords, allWordsComplete, hskData, hskDataComplete, dataStats,
  // Grammar
  allGrammar, hsk1Grammar, hsk2Grammar, hsk3Grammar, hsk4Grammar, hsk5Grammar,
  // Topics / Tasks / Confusables
  allTopics, hsk1Topics, hsk2Topics, hsk3Topics, hsk4Topics, hsk5Topics,
  hsk1TopicLabels, hsk2TopicLabels, hsk3TopicLabels, hsk4TopicLabels, topicLabelsByLevel,
  allTasks, hsk1Tasks, hsk2Tasks, hsk3Tasks, hsk4Tasks, hsk5Tasks,
  allConfusables, hsk1Confusables, hsk2Confusables, hsk3Confusables, hsk4Confusables, hsk5Confusables,
  // Fungsi
  getLevel, getUpToLevel, getWordsByTopic, searchWords, getWordById,
  getRandomWords, getWordsByInitial, getWordsByLength,
  getWordsByTone, checkWord, getWordsByIdRange,
  makeQuizQuestion, createStudySession,
  getAdjacentWords, getSimpleWords,
  getGrammarByLevel, searchGrammar, getVocabForGrammar,
  getTopicsByLevel, getVocabForTopic,
  getTasksByLevel,
  getConfusablesByLevel,
}