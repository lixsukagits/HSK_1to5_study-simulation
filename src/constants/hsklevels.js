// Definisi level HSK 3.0 (New HSK / HSK Baru)
// Berlaku mulai Juli 2026
export const HSK_LEVELS = [
  {
    level: 1,
    name: 'HSK 1',
    totalKata: 500,
    warna: 'level-1',        // green
    warnaHex: '#4ade80',
    keterangan: 'Pemula — Kosakata dasar sehari-hari',
    targetSkor: 180,         // dari 300
  },
  {
    level: 2,
    name: 'HSK 2',
    totalKata: 772,
    warna: 'level-2',        // blue
    warnaHex: '#60a5fa',
    keterangan: 'Dasar — Komunikasi sederhana',
    targetSkor: 180,
  },
  {
    level: 3,
    name: 'HSK 3',
    totalKata: 973,
    warna: 'level-3',        // amber
    warnaHex: '#f59e0b',
    keterangan: 'Menengah Bawah — Topik umum',
    targetSkor: 180,
  },
  {
    level: 4,
    name: 'HSK 4',
    totalKata: 1000,
    warna: 'level-4',        // pink
    warnaHex: '#f472b6',
    keterangan: 'Menengah — Diskusi beragam topik',
    targetSkor: 180,
  },
  {
    level: 5,
    name: 'HSK 5',
    totalKata: 1071,
    warna: 'level-5',        // purple
    warnaHex: '#a78bfa',
    keterangan: 'Menengah Atas — Membaca surat kabar & sastra',
    targetSkor: 180,
  },
]

// Warna Tailwind per level (untuk className dinamis)
export const LEVEL_COLORS = {
  1: { bg: 'bg-level-1/15', text: 'text-level-1', border: 'border-level-1/30' },
  2: { bg: 'bg-level-2/15', text: 'text-level-2', border: 'border-level-2/30' },
  3: { bg: 'bg-level-3/15', text: 'text-level-3', border: 'border-level-3/30' },
  4: { bg: 'bg-level-4/15', text: 'text-level-4', border: 'border-level-4/30' },
  5: { bg: 'bg-level-5/15', text: 'text-level-5', border: 'border-level-5/30' },
}

export const getLevelInfo = (level) =>
  HSK_LEVELS.find((l) => l.level === level) || HSK_LEVELS[0]