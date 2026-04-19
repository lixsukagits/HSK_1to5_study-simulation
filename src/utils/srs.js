/**
 * Spaced Repetition System — Algoritma SM-2
 * Referensi: https://www.supermemo.com/en/blog/application-of-a-computer-to-improve-the-results-obtained-in-working-with-the-supermemo-method
 *
 * Grade (kualitas jawaban):
 *   0 = salah total (blackout)
 *   1 = salah tapi ingat setelah lihat jawaban
 *   2 = salah tapi tampak mudah saat koreksi
 *   3 = benar tapi butuh usaha keras
 *   4 = benar dengan sedikit ragu
 *   5 = benar sempurna
 *
 * Untuk app ini kita sederhanakan:
 *   "Hafal!"     → grade 4
 *   "Belum hafal" → grade 1
 *   Jawab kuis benar → grade 4
 *   Jawab kuis salah → grade 1
 */

const DEFAULT_EASE  = 2.5   // ease factor awal
const MIN_EASE      = 1.3   // ease factor minimum
const ONE_DAY_MS    = 86400000

/**
 * Hitung jadwal review berikutnya dengan SM-2
 * @param {object} card - { interval, easeFactor, reps } (state sebelumnya)
 * @param {number} grade - 0-5
 * @returns {object} - { interval (hari), easeFactor, reps, nextReview (timestamp) }
 */
export function sm2(card, grade) {
  let { interval = 1, easeFactor = DEFAULT_EASE, reps = 0 } = card

  if (grade >= 3) {
    // Jawaban benar
    if (reps === 0)      interval = 1
    else if (reps === 1) interval = 6
    else                 interval = Math.round(interval * easeFactor)

    reps += 1
  } else {
    // Jawaban salah — reset
    reps     = 0
    interval = 1
  }

  // Update ease factor
  easeFactor = easeFactor + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02))
  if (easeFactor < MIN_EASE) easeFactor = MIN_EASE

  const nextReview = Date.now() + interval * ONE_DAY_MS

  return { interval, easeFactor: Math.round(easeFactor * 100) / 100, reps, nextReview }
}

/**
 * Apakah kata ini sudah waktunya direview?
 */
export function isDue(srsCard) {
  if (!srsCard) return true  // belum pernah direview → due
  return Date.now() >= srsCard.nextReview
}

/**
 * Dari pool kata, ambil yang due hari ini + sort priority (paling overdue dulu)
 */
export function getDueWords(words, srsData) {
  const now = Date.now()
  const due = words.filter(w => {
    const card = srsData[w.id]
    return !card || now >= card.nextReview
  })
  // Sort: kata tanpa card (baru) dulu, lalu yang paling overdue
  return due.sort((a, b) => {
    const ca = srsData[a.id]
    const cb = srsData[b.id]
    if (!ca && !cb) return 0
    if (!ca) return -1
    if (!cb) return 1
    return ca.nextReview - cb.nextReview
  })
}

/**
 * Grade shorthand untuk app ini
 */
export const GRADE = {
  WRONG:  1,   // belum hafal / jawab salah
  HARD:   3,   // hafal tapi susah
  GOOD:   4,   // hafal dengan baik
  EASY:   5,   // sangat mudah
}

/**
 * Label untuk user
 */
export function getNextReviewLabel(srsCard) {
  if (!srsCard) return 'Baru'
  const diff = srsCard.nextReview - Date.now()
  if (diff <= 0) return 'Sekarang'
  const days = Math.ceil(diff / ONE_DAY_MS)
  if (days === 1) return 'Besok'
  if (days < 7)  return `${days} hari`
  if (days < 30) return `${Math.ceil(days / 7)} minggu`
  return `${Math.ceil(days / 30)} bulan`
}