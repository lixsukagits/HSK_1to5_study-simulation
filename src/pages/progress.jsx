import { Link } from 'react-router-dom'
import { HSK_LEVELS } from '../constants/hsklevels'
import { storage, STORAGE_KEYS } from '../utils/storage'
import { toDateKey } from '../utils/datehelper'
import { HeatmapCalendar } from '../components/progress/heatmapcalendar'
import { ProgressBar } from '../components/progress/progressbar'
import { StatsCard } from '../components/progress/statscard'
import { StreakCounter } from '../components/progress/streakcounter'

export function Progress() {
  const progress  = storage.get(STORAGE_KEYS.PROGRESS, {})
  const streak    = storage.get(STORAGE_KEYS.STREAK, { count: 0, longestStreak: 0 })
  const dailyLog  = storage.get(STORAGE_KEYS.DAILY_LOG, {})

  const totalKata     = HSK_LEVELS.reduce((s, l) => s + l.totalKata, 0)
  const totalMastered = Object.values(progress).reduce((s, l) => s + (l.mastered?.length || 0), 0)
  const totalSeen     = Object.values(progress).reduce((s, l) => s + (l.seen?.length || 0), 0)
  const overallPct    = Math.min(100, Math.round((totalMastered / totalKata) * 100))

  const activeDays    = Object.values(dailyLog).filter((d) => (d.studied || 0) > 0).length
  const totalStudied  = Object.values(dailyLog).reduce((s, d) => s + (d.studied || 0), 0)
  const totalCorrect  = Object.values(dailyLog).reduce((s, d) => s + (d.correct || 0), 0)
  const accuracy      = totalStudied > 0 ? Math.round((totalCorrect / totalStudied) * 100) : 0

  const todayLog = dailyLog[toDateKey()] || { studied: 0, correct: 0 }

  return (
    <div className="min-h-screen px-4 py-8 max-w-4xl mx-auto animate-fade-in">
      <Link to="/" className="btn-ghost mb-6 inline-flex text-sm px-3 py-1.5">← Kembali</Link>
      <h1 className="font-display text-3xl font-extrabold mb-8">Progress Belajar</h1>

      {/* Streak */}
      <div className="card p-5 mb-6 flex items-center justify-between flex-wrap gap-4">
        <StreakCounter count={streak.count} longest={streak.longestStreak} />
        <div className="text-right">
          <div className="text-white/40 text-xs">Hari ini</div>
          <div className="text-white font-bold">{todayLog.studied} kata</div>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <StatsCard label="Hari aktif"  value={activeDays}    unit="hari" color="text-blue-400"   icon="📅" />
        <StatsCard label="Dikuasai"    value={totalMastered} unit="kata" color="text-green-400"  icon="✓"  />
        <StatsCard label="Dipelajari"  value={totalSeen}     unit="kata" color="text-amber-400"  icon="👁" />
        <StatsCard label="Akurasi"     value={`${accuracy}`} unit="%"    color="text-violet-400" icon="🎯" />
      </div>

      {/* Overall progress */}
      <div className="card p-5 mb-6">
        <div className="flex justify-between mb-3">
          <span className="text-white/60 text-sm font-medium">Progress keseluruhan</span>
          <span className="text-white text-sm font-semibold">{totalMastered} / {totalKata}</span>
        </div>
        <ProgressBar value={totalMastered} max={totalKata} showLabel={false} size="lg" />
        <p className="text-white/30 text-xs mt-2">{overallPct}% dari total {totalKata} kata HSK 1–5</p>
      </div>

      {/* Heatmap */}
      <div className="card p-5 mb-6">
        <h2 className="text-white/60 text-sm font-medium mb-4">Aktivitas 9 Minggu Terakhir</h2>
        <HeatmapCalendar dailyLog={dailyLog} />
      </div>

      {/* Per level */}
      <h2 className="text-white/30 text-[10px] font-semibold tracking-widest uppercase mb-4">Per Level</h2>
      <div className="space-y-3">
        {HSK_LEVELS.map((lvl) => {
          const lvlPrg  = progress[lvl.level] || {}
          const mastered = lvlPrg.mastered?.length || 0
          const seen     = lvlPrg.seen?.length || 0
          return (
            <Link key={lvl.level} to={`/vocab/${lvl.level}`} className="card p-4 block hover:border-white/20 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className={`badge badge-level-${lvl.level} text-xs`}>{lvl.name}</span>
                  <span className="text-white/40 text-xs hidden sm:inline">{lvl.keterangan}</span>
                </div>
                <span className="font-bold text-sm" style={{ color: lvl.warnaHex }}>
                  {Math.round((mastered / lvl.totalKata) * 100)}%
                </span>
              </div>
              <ProgressBar value={mastered} max={lvl.totalKata} color={lvl.warnaHex} showLabel={false} />
              <div className="flex justify-between text-[10px] text-white/30 mt-1.5">
                <span>{mastered} dikuasai</span>
                <span>{seen} dilihat · {lvl.totalKata} total</span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
