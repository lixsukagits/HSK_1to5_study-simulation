import { Link } from 'react-router-dom'
import { HSK_LEVELS } from '../constants/hsklevels'
import { storage, STORAGE_KEYS } from '../utils/storage'
import { daysUntil, TARGET_DATE, toDateKey } from '../utils/datehelper'

export default function Home() {
  const progress  = storage.get(STORAGE_KEYS.PROGRESS, {})
  const streak    = storage.get(STORAGE_KEYS.STREAK, { count: 0, longestStreak: 0 })
  const dailyLog  = storage.get(STORAGE_KEYS.DAILY_LOG, {})
  const todayKey  = toDateKey()
  const todayLog  = dailyLog[todayKey] || { studied: 0, correct: 0 }
  const daysLeft  = daysUntil(TARGET_DATE)

  // Hitung total kata yang sudah dikuasai
  const totalMastered = Object.values(progress).reduce(
    (sum, lvl) => sum + (lvl.mastered?.length || 0), 0
  )
  const totalKata = HSK_LEVELS.reduce((sum, l) => sum + l.totalKata, 0)

  return (
    <div className="min-h-screen px-4 py-8 max-w-4xl mx-auto animate-fade-in">

      {/* Header */}
      <div className="mb-10">
        <p className="text-white/40 text-sm font-medium tracking-widest uppercase mb-2">
          Dashboard Belajar
        </p>
        <h1 className="font-display text-4xl font-extrabold text-white">
          你好，学习者{' '}
          <span className="text-gradient-red">👋</span>
        </h1>
        <p className="text-white/50 mt-2">
          {daysLeft} hari lagi menuju target Desember 2025 · Tetap semangat!
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {[
          { label: 'Streak',       value: streak.count,         unit: 'hari',   color: 'text-gold-400' },
          { label: 'Dikuasai',     value: totalMastered,        unit: 'kata',   color: 'text-level-1' },
          { label: 'Hari ini',     value: todayLog.studied,     unit: 'kata',   color: 'text-level-2' },
          { label: 'Sisa waktu',   value: daysLeft,             unit: 'hari',   color: 'text-level-5' },
        ].map((stat) => (
          <div key={stat.label} className="card p-4 text-center">
            <div className={`text-3xl font-display font-extrabold ${stat.color}`}>
              {stat.value}
            </div>
            <div className="text-white/40 text-xs mt-1">{stat.unit}</div>
            <div className="text-white/60 text-sm font-medium mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Progress total */}
      <div className="card p-5 mb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="text-white/70 text-sm">Progress keseluruhan</span>
          <span className="text-white font-semibold text-sm">
            {totalMastered} / {totalKata} kata
          </span>
        </div>
        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${Math.round((totalMastered / totalKata) * 100)}%` }}
          />
        </div>
        <p className="text-white/30 text-xs mt-2">
          {Math.round((totalMastered / totalKata) * 100)}% dari total {totalKata} kata HSK 1–5
        </p>
      </div>

      {/* Level cards */}
      <h2 className="text-white/40 text-xs font-medium tracking-widest uppercase mb-4">
        Level HSK
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {HSK_LEVELS.map((lvl, i) => {
          const lvlProgress  = progress[lvl.level] || {}
          const mastered     = lvlProgress.mastered?.length || 0
          const seen         = lvlProgress.seen?.length || 0
          const pct          = Math.round((mastered / lvl.totalKata) * 100)

          return (
            <Link
              key={lvl.level}
              to={`/vocab/${lvl.level}`}
              className={`card p-5 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5 animate-slide-up stagger-${i + 1} group`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className={`badge badge-level-${lvl.level} text-xs mb-2`}>
                    {lvl.name}
                  </span>
                  <p className="text-white/40 text-xs mt-1">{lvl.keterangan}</p>
                </div>
                <span className="text-2xl font-display font-extrabold"
                  style={{ color: lvl.warnaHex }}
                >
                  {pct}%
                </span>
              </div>

              <div className="progress-track mb-2">
                <div
                  className="progress-fill"
                  style={{
                    width: `${pct}%`,
                    background: `linear-gradient(90deg, ${lvl.warnaHex}99, ${lvl.warnaHex})`,
                  }}
                />
              </div>

              <div className="flex justify-between text-xs text-white/30">
                <span>{mastered} dikuasai</span>
                <span>{seen} dipelajari · {lvl.totalKata} total</span>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Quick actions */}
      <h2 className="text-white/40 text-xs font-medium tracking-widest uppercase mb-4">
        Mulai Belajar
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Flash Card', icon: '🃏', to: '/flashcards', desc: 'Hafal kata baru' },
          { label: 'Kuis',       icon: '✏️', to: '/quiz',       desc: 'Latihan soal' },
          { label: 'Progress',   icon: '📊', to: '/progress',   desc: 'Lihat statistik' },
          { label: 'Pengaturan', icon: '⚙️', to: '/settings',   desc: 'Kustomisasi' },
        ].map((action) => (
          <Link
            key={action.label}
            to={action.to}
            className="card p-4 text-center hover:border-white/20 hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="text-2xl mb-2">{action.icon}</div>
            <div className="text-white text-sm font-medium">{action.label}</div>
            <div className="text-white/30 text-xs mt-0.5">{action.desc}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}