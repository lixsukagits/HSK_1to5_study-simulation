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