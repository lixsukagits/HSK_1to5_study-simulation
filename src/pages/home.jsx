import { Link } from 'react-router-dom'
import { HSK_LEVELS } from '../constants/hsklevels'
import { storage, STORAGE_KEYS } from '../utils/storage'
import { daysUntil, TARGET_DATE, toDateKey } from '../utils/datehelper'
import { StatsCard } from '../components/progress/statscard'

export default function Home() {
  const progress  = storage.get(STORAGE_KEYS.PROGRESS, {})
  const streak    = storage.get(STORAGE_KEYS.STREAK, { count: 0, longestStreak: 0 })
  const dailyLog  = storage.get(STORAGE_KEYS.DAILY_LOG, {})
  const todayLog  = dailyLog[toDateKey()] || { studied: 0, correct: 0 }
  const daysLeft  = daysUntil(TARGET_DATE)

  const totalMastered = Object.values(progress).reduce(
    (sum, lvl) => sum + (lvl.mastered?.length || 0), 0
  )
  const totalKata = HSK_LEVELS.reduce((sum, l) => sum + l.totalKata, 0)
  const overallPct = Math.min(100, Math.round((totalMastered / totalKata) * 100))

  return (
    <div className="min-h-screen px-4 py-8 max-w-4xl mx-auto animate-fade-in">

      {/* Hero */}
      <div className="relative mb-10 overflow-hidden">
        <div
          className="absolute top-0 right-0 font-hanzi font-bold leading-none select-none pointer-events-none"
          style={{ fontSize: 'clamp(100px,18vw,220px)', color: 'rgba(255,255,255,0.025)' }}
        >
          学
        </div>
        <p className="text-white/30 text-[10px] font-semibold tracking-widest uppercase mb-2">
          Dashboard Belajar
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-tight">
          你好，<span className="text-gradient-red">学习者</span>
        </h1>
        <p className="text-white/40 mt-3 text-sm">
          {daysLeft > 0
            ? `${daysLeft} hari lagi menuju target · Tetap semangat! 🔥`
            : 'Target sudah tercapai! Terus belajar 🎉'
          }
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        <StatsCard label="Streak"      value={streak.count}      unit="hari" color="text-gold-400"  icon="🔥" />
        <StatsCard label="Dikuasai"    value={totalMastered}     unit="kata" color="text-level-1"   icon="✓" />
        <StatsCard label="Hari ini"    value={todayLog.studied}  unit="kata" color="text-level-2"   icon="📖" />
        <StatsCard label="Sisa target" value={daysLeft}          unit="hari" color="text-level-5"   icon="⏳" />
      </div>

      {/* Overall progress */}
      <div className="card p-5 mb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="text-white/60 text-sm font-medium">Progress keseluruhan</span>
          <span className="text-white font-semibold text-sm">
            {totalMastered} <span className="text-white/30">/ {totalKata} kata</span>
          </span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${overallPct}%` }} />
        </div>
        <p className="text-white/30 text-xs mt-2">
          {overallPct}% dari total {totalKata} kata HSK 1–5
        </p>
      </div>

      {/* Level cards */}
      <h2 className="text-white/30 text-[10px] font-semibold tracking-widest uppercase mb-4">
        Level HSK
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {HSK_LEVELS.map((lvl, i) => {
          const lvlPrg  = progress[lvl.level] || {}
          const mastered = lvlPrg.mastered?.length || 0
          const seen     = lvlPrg.seen?.length || 0
          const pct      = Math.min(100, Math.round((mastered / lvl.totalKata) * 100))

          return (
            <Link
              key={lvl.level}
              to={`/vocab/${lvl.level}`}
              className={`card p-5 block hover:border-white/20 hover:-translate-y-0.5 transition-all duration-200 animate-slide-up stagger-${i + 1}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className={`badge badge-level-${lvl.level} text-xs mb-2`}>
                    {lvl.name}
                  </span>
                  <p className="text-white/40 text-xs mt-1">{lvl.keterangan}</p>
                </div>
                <span className="text-2xl font-display font-extrabold" style={{ color: lvl.warnaHex }}>
                  {pct}%
                </span>
              </div>
              <div className="progress-track mb-2">
                <div
                  className="progress-fill"
                  style={{
                    width: `${pct}%`,
                    background: `linear-gradient(90deg, ${lvl.warnaHex}70, ${lvl.warnaHex})`,
                  }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-white/30">
                <span>{mastered} dikuasai</span>
                <span>{seen} dipelajari · {lvl.totalKata} total</span>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Quick actions */}
      <h2 className="text-white/30 text-[10px] font-semibold tracking-widest uppercase mb-4">
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
