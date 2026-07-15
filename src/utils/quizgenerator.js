import { QUIZ_TYPES } from '../constants/quiztypes'

// Acak array (Fisher-Yates)
export const shuffle = (arr) => {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Ambil n item acak dari array tanpa duplikat
export const sample = (arr, n) => shuffle(arr).slice(0, n)

// Buat satu soal dari satu kata + pool kata lainnya sebagai distraktor
export const buildQuestion = (kata, pool, type) => {
  // Ambil 3 distraktor yang berbeda dari jawaban benar
  const distractors = sample(
    pool.filter((k) => k.id !== kata.id),
    3
  )

  let soal, jawaban, pilihan

  switch (type) {
    case QUIZ_TYPES.HANZI_TO_INDO:
      soal    = { tipe: 'hanzi', nilai: kata.hanzi, pinyin: kata.pinyin }
      jawaban = kata.arti
      pilihan = shuffle([kata.arti, ...distractors.map((k) => k.arti)])
      break

    case QUIZ_TYPES.INDO_TO_HANZI:
      soal    = { tipe: 'teks', nilai: kata.arti }
      jawaban = kata.hanzi
      pilihan = shuffle([kata.hanzi, ...distractors.map((k) => k.hanzi)])
      break

    case QUIZ_TYPES.HANZI_TO_PINYIN:
      soal    = { tipe: 'hanzi', nilai: kata.hanzi }
      jawaban = kata.pinyin
      pilihan = shuffle([kata.pinyin, ...distractors.map((k) => k.pinyin)])
      break

    case QUIZ_TYPES.PINYIN_TO_HANZI:
      soal    = { tipe: 'teks', nilai: kata.pinyin }
      jawaban = kata.hanzi
      pilihan = shuffle([kata.hanzi, ...distractors.map((k) => k.hanzi)])
      break

    default:
      soal    = { tipe: 'hanzi', nilai: kata.hanzi, pinyin: kata.pinyin }
      jawaban = kata.arti
      pilihan = shuffle([kata.arti, ...distractors.map((k) => k.arti)])
  }

  return {
    id:      kata.id,
    kata,
    soal,
    jawaban,
    pilihan,
    type,
  }
}

// Buat sesi kuis lengkap
export const generateQuiz = ({ kataList, pool, count = 20, type }) => {
  const selected = sample(kataList, Math.min(count, kataList.length))
  return selected.map((kata) => buildQuestion(kata, pool, type))
}

// ── Kata Ketuker (Confusable Challenge) ─────────────────────────
//
// Sumber data grup confusable BUKAN daftar kata datar seperti vocab biasa,
// tapi grup { id, title, items: [{ hanzi, vocabId, note }], explanation,
// examples, level } — lihat src/data/hsk1confusables.js.
//
// Sebuah grup dianggap "usable" untuk pilihan ganda kalau:
//  - punya minimal 2 item
//  - semua hanzi di dalamnya UNIK (grup dengan hanzi yang sama persis,
//    misal 了¹ vs 了² yang sama-sama ditulis 了, tidak bisa jadi pilihan visual)
//  - tidak ada item placeholder/pola (hanzi mengandung "..." seperti 这.../那.../哪...)
export const getUsableConfusableGroups = (groups = []) => {
  return groups.filter((g) => {
    if (!g.items || g.items.length < 2) return false
    const hasPlaceholder = g.items.some((it) => it.hanzi.includes('...'))
    const hanziSet = new Set(g.items.map((it) => it.hanzi))
    return !hasPlaceholder && hanziSet.size === g.items.length
  })
}

// Bangun satu soal Kata Ketuker dari satu grup.
// prompt = note dari salah satu item (dipilih acak jadi jawaban benar)
// pilihan = hanzi dari item-item di grup yang sama; kalau grup cuma 2 item,
// tambah distraktor hanzi dari grup lain (di kumpulan grup yang sama) biar tetap 4 pilihan.
export const buildConfusableQuestion = (group, allGroups = []) => {
  const items = group.items
  const target = items[Math.floor(Math.random() * items.length)]

  let choiceHanzi = items.map((it) => it.hanzi)

  if (choiceHanzi.length < 4) {
    const otherHanzi = allGroups
      .filter((g) => g.id !== group.id)
      .flatMap((g) => g.items.map((it) => it.hanzi))
      .filter((h) => !choiceHanzi.includes(h))
    const needed = Math.min(4 - choiceHanzi.length, otherHanzi.length)
    choiceHanzi = [...choiceHanzi, ...sample(otherHanzi, needed)]
  } else if (choiceHanzi.length > 4) {
    const others = sample(choiceHanzi.filter((h) => h !== target.hanzi), 3)
    choiceHanzi = [target.hanzi, ...others]
  }

  return {
    id: `${group.id}-${target.hanzi}-${target.note}`,
    groupId: group.id,
    groupTitle: group.title,
    vocabId: target.vocabId || null, // untuk link balik ke kata di SRS, bisa null (lihat catatan format di hsk1confusables.js)
    explanation: group.explanation,
    examples: group.examples,
    soal: { tipe: 'confusable_prompt', nilai: target.note },
    jawaban: target.hanzi,
    pilihan: shuffle(choiceHanzi),
    type: QUIZ_TYPES.CONFUSABLE,
  }
}

// Buat sesi kuis Kata Ketuker lengkap dari kumpulan grup confusable.
export const generateConfusableQuiz = ({ groups = [], count = 10 }) => {
  const usable = getUsableConfusableGroups(groups)
  const selected = sample(usable, Math.min(count, usable.length))
  return selected.map((g) => buildConfusableQuestion(g, usable))
}