/**
 * Definisi semua Achievement / Badge
 * Setiap achievement punya: id, nama, deskripsi, icon, condition checker
 */

export const ACHIEVEMENTS = [
  // ── Streak ──────────────────────────────────────────────────
  { id: 'streak_3',    icon: '🔥', name: '3 Hari Berturut',    desc: 'Belajar 3 hari berturut-turut',   xp: 50  },
  { id: 'streak_7',    icon: '🔥', name: 'Seminggu Penuh',      desc: 'Belajar 7 hari berturut-turut',   xp: 150 },
  { id: 'streak_30',   icon: '🏅', name: 'Satu Bulan Penuh',    desc: 'Belajar 30 hari berturut-turut',  xp: 500 },
  { id: 'streak_100',  icon: '👑', name: 'Legenda',              desc: 'Belajar 100 hari berturut-turut', xp: 2000 },

  // ── Kata dikuasai ────────────────────────────────────────────
  { id: 'mastered_10',   icon: '⭐', name: 'Pemula',              desc: 'Kuasai 10 kata',    xp: 30  },
  { id: 'mastered_50',   icon: '⭐', name: 'Belajar Tekun',       desc: 'Kuasai 50 kata',    xp: 80  },
  { id: 'mastered_100',  icon: '🌟', name: 'Seratus Kata',        desc: 'Kuasai 100 kata',   xp: 150 },
  { id: 'mastered_250',  icon: '🌟', name: 'Setengah Jalan',      desc: 'Kuasai 250 kata',   xp: 300 },
  { id: 'mastered_500',  icon: '💫', name: 'Tamat HSK 1',         desc: 'Kuasai 500 kata',   xp: 600 },
  { id: 'mastered_1000', icon: '💫', name: 'Lebih dari Seribu',   desc: 'Kuasai 1000 kata',  xp: 1000 },
  { id: 'mastered_all',  icon: '🏆', name: 'Grand Master',        desc: 'Kuasai semua kata HSK 1-5', xp: 5000 },

  // ── Tamat level ──────────────────────────────────────────────
  { id: 'level1_done', icon: '🌱', name: 'HSK 1 Selesai!',   desc: 'Semua kata HSK 1 dikuasai', xp: 700  },
  { id: 'level2_done', icon: '🌿', name: 'HSK 2 Selesai!',   desc: 'Semua kata HSK 2 dikuasai', xp: 1000 },
  { id: 'level3_done', icon: '🌳', name: 'HSK 3 Selesai!',   desc: 'Semua kata HSK 3 dikuasai', xp: 1400 },
  { id: 'level4_done', icon: '🎋', name: 'HSK 4 Selesai!',   desc: 'Semua kata HSK 4 dikuasai', xp: 1800 },
  { id: 'level5_done', icon: '🎍', name: 'HSK 5 Selesai!',   desc: 'Semua kata HSK 5 dikuasai', xp: 2500 },

  // ── Kuis ─────────────────────────────────────────────────────
  { id: 'quiz_perfect',   icon: '🎯', name: 'Sempurna!',          desc: 'Kuis dengan skor 100%',    xp: 100 },
  { id: 'quiz_10',        icon: '✏️', name: 'Rajin Kuis',          desc: 'Selesaikan 10 sesi kuis',  xp: 80  },
  { id: 'quiz_50',        icon: '✏️', name: 'Jagoan Kuis',         desc: 'Selesaikan 50 sesi kuis',  xp: 300 },

  // ── Belajar harian ───────────────────────────────────────────
  { id: 'daily_first',    icon: '🌅', name: 'Hari Pertama',        desc: 'Selesaikan sesi belajar pertama', xp: 20 },
  { id: 'daily_target_7', icon: '📅', name: 'Konsisten Seminggu',  desc: 'Capai target harian 7 hari berurutan', xp: 200 },

  // ── Bookmark ─────────────────────────────────────────────────
  { id: 'bookmark_10',    icon: '🔖', name: 'Penanda Buku',        desc: 'Bookmark 10 kata',         xp: 30  },

  // ── Khusus ───────────────────────────────────────────────────
  { id: 'first_review',   icon: '🔄', name: 'Review Pertama',       desc: 'Review kata dengan SRS pertama kali', xp: 20 },
  { id: 'speed_learner',  icon: '⚡', name: 'Belajar Cepat',        desc: 'Pelajari 50 kata dalam satu hari', xp: 200 },
]

/** Map id → achievement untuk lookup cepat */
export const ACHIEVEMENT_MAP = Object.fromEntries(ACHIEVEMENTS.map(a => [a.id, a]))

/**
 * Cek achievement mana yang baru di-unlock
 * @param {object} state - { progress, streak, dailyLog, bookmarks, quizHistory, unlockedIds }
 * @returns {string[]} - array achievement id yang baru unlock
 */
export function checkAchievements(state) {
  const { progress, streak, dailyLog, bookmarks = [], quizHistory = [], unlockedIds = new Set() } = state

  const totalMastered = Object.values(progress).reduce((s, l) => s + (l.mastered?.length || 0), 0)
  const newUnlocks = []

  function check(id, condition) {
    if (!unlockedIds.has(id) && condition) newUnlocks.push(id)
  }

  // Streak
  check('streak_3',   streak.count >= 3)
  check('streak_7',   streak.count >= 7)
  check('streak_30',  streak.count >= 30)
  check('streak_100', streak.count >= 100)

  // Kata dikuasai
  check('mastered_10',   totalMastered >= 10)
  check('mastered_50',   totalMastered >= 50)
  check('mastered_100',  totalMastered >= 100)
  check('mastered_250',  totalMastered >= 250)
  check('mastered_500',  totalMastered >= 500)
  check('mastered_1000', totalMastered >= 1000)
  check('mastered_all',  totalMastered >= 4316)  // total HSK 1-5

  // Level selesai — pakai totalKata per level (dari constants)
  const LEVEL_TOTALS = { 1: 500, 2: 772, 3: 973, 4: 1000, 5: 1071 }
  for (const [lvlNum, total] of Object.entries(LEVEL_TOTALS)) {
    const lvlPrg = progress[lvlNum] || {}
    check(`level${lvlNum}_done`, (lvlPrg.mastered?.length || 0) >= total)
  }

  // Kuis
  const perfectQuiz = quizHistory.some(q => q.score === q.total && q.total > 0)
  check('quiz_perfect',   perfectQuiz)
  check('quiz_10',        quizHistory.length >= 10)
  check('quiz_50',        quizHistory.length >= 50)

  // Belajar harian
  const activeDays = Object.values(dailyLog).filter(d => (d.studied || 0) > 0).length
  check('daily_first', activeDays >= 1)

  // Bookmark
  check('bookmark_10', bookmarks.length >= 10)

  // Speed learner
  const todayKey = new Date().toISOString().slice(0, 10)
  check('speed_learner', (dailyLog[todayKey]?.studied || 0) >= 50)

  return newUnlocks
}

/** XP per aktivitas */
export const XP_REWARDS = {
  WORD_SEEN:      2,
  WORD_MASTERED:  10,
  QUIZ_CORRECT:   5,
  QUIZ_PERFECT:   50,
  DAILY_TARGET:   30,
  STREAK_DAY:     15,
}