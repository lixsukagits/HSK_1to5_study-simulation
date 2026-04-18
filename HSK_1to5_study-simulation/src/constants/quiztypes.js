// Tipe-tipe soal kuis yang tersedia
export const QUIZ_TYPES = {
  HANZI_TO_INDO: 'hanzi_to_indo',   // Lihat Hanzi → pilih arti Indonesia
  INDO_TO_HANZI: 'indo_to_hanzi',   // Lihat arti Indonesia → pilih Hanzi
  HANZI_TO_PINYIN: 'hanzi_to_pinyin', // Lihat Hanzi → pilih Pinyin
  PINYIN_TO_HANZI: 'pinyin_to_hanzi', // Lihat Pinyin → pilih Hanzi
}

export const QUIZ_TYPE_LABELS = {
  [QUIZ_TYPES.HANZI_TO_INDO]:   'Hanzi → Arti',
  [QUIZ_TYPES.INDO_TO_HANZI]:   'Arti → Hanzi',
  [QUIZ_TYPES.HANZI_TO_PINYIN]: 'Hanzi → Pinyin',
  [QUIZ_TYPES.PINYIN_TO_HANZI]: 'Pinyin → Hanzi',
}

// Jumlah soal per sesi
export const QUIZ_LENGTHS = [10, 20, 30, 50]

// Batas waktu per soal (detik), 0 = tanpa batas
export const QUIZ_TIME_LIMITS = [0, 10, 15, 30]