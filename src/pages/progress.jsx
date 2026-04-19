import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HSK_LEVELS } from '../constants/hsklevels'
import { storage, STORAGE_KEYS } from '../utils/storage'
import { toDateKey, formatDate } from '../utils/datehelper'
import { useAchievements } from '../hooks/useachievements'
import { useAuthContext } from '../context/authcontext'

// ─── Helpers ─────────────────────────────────────────────────
function lastNDays(n) {
  return Array.from({ length: n }, (_, i) => {
    const d = new Date(); d.setDate(d.getDate() - (n - 1 - i)); return toDateKey(d)
  })
}

function getWeekKey(date = new Date()) {
  const d    = new Date(date)
  const day  = d.getDay()
  const diff = d.getDate() - day + (day === 0 ? -6 : 1)
  d.setDate(diff)
  return toDateKey(d)
}

function buildWeeklyData(dailyLog) {
  const weeks = {}
  Object.entries(dailyLog).forEach(([date, val]) => {
    const wk = getWeekKey(new Date(date))
    if (!weeks[wk]) weeks[wk] = { studied: 0, correct: 0, days: 0 }
    weeks[wk].studied += val.studied || 0
    weeks[wk].correct += val.correct || 0
    if ((val.studied || 0) > 0) weeks[wk].days++
  })
  return weeks
}

// ─── Heatmap dengan klik detail ──────────────────────────────
function HeatmapCalendar({ dailyLog }) {
  const [selectedDay, setSelectedDay] = useState(null)
  const days  = lastNDays(63)
  const weeks = []
  for (let i = 0; i < days.length; i += 7) weeks.push(days.slice(i, i + 7))
  const max   = Math.max(1, ...Object.values(dailyLog).map(d => d.studied || 0))
  const today = toDateKey()

  return (
    <div>
      <div className="flex gap-1 overflow-x-auto pb-1">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map(day => {
              const count    = dailyLog[day]?.studied || 0
              const pct      = count / max
              const bg       = count === 0 ? 'rgba(255,255,255,0.04)'
                : pct < 0.25 ? 'rgba(200,13,13,0.35)'
                : pct < 0.5  ? 'rgba(237,21,21,0.55)'
                : pct < 0.75 ? 'rgba(237,21,21,0.78)'
                : '#ed1515'
              const isSelected = selectedDay === day
              return (
                <button
                  key={day}
                  title={`${formatDate(day)}: ${count} kata`}
                  onClick={() => setSelectedDay(isSelected ? null : day)}
                  className="w-3 h-3 rounded-sm flex-shrink-0 transition-all hover:scale-125 hover:z-10"
                  style={{
                    background: bg,
                    boxShadow: isSelected ? '0 0 0 1.5px #fbbf24' : day === today ? '0 0 0 1.5px rgba(255,255,255,0.3)' : 'none',
                  }}
                />
              )
            })}
          </div>
        ))}
      </div>

      {/* Detail panel saat hari diklik */}
      {selectedDay && (
        <div className="mt-4 p-4 rounded-xl animate-slide-up"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-white/60 text-xs font-semibold mb-1">{formatDate(selectedDay)}</div>
              <div className="flex gap-4">
                <span>
                  <span className="font-display font-bold text-lg text-primary-400">{dailyLog[selectedDay]?.studied || 0}</span>
                  <span className="text-white/40 text-xs ml-1">kata</span>
                </span>
                <span>
                  <span className="font-display font-bold text-lg text-green-400">{dailyLog[selectedDay]?.correct || 0}</span>
                  <span className="text-white/40 text-xs ml-1">benar</span>
                </span>
                {(dailyLog[selectedDay]?.studied || 0) > 0 && (
                  <span>
                    <span className="font-display font-bold text-lg text-blue-400">
                      {Math.round(((dailyLog[selectedDay]?.correct || 0) / (dailyLog[selectedDay]?.studied || 1)) * 100)}%
                    </span>
                    <span className="text-white/40 text-xs ml-1">akurasi</span>
                  </span>
                )}
              </div>
            </div>
            <button onClick={() => setSelectedDay(null)} className="text-white/25 hover:text-white/60 text-lg">×</button>
          </div>
        </div>
      )}

      <div className="flex items-center gap-2 mt-3 text-[10px] text-white/25">
        <span>Kurang</span>
        {['rgba(255,255,255,0.04)','rgba(200,13,13,0.35)','rgba(237,21,21,0.55)','rgba(237,21,21,0.78)','#ed1515'].map((c,i) => (
          <div key={i} className="w-3 h-3 rounded-sm" style={{ background:c }} />
        ))}
        <span>Banyak</span>
        <span className="ml-2">· Klik untuk detail</span>
      </div>
    </div>
  )
}

// ─── Weekly Report ────────────────────────────────────────────
function WeeklyReport({ dailyLog }) {
  const weeklyData = buildWeeklyData(dailyLog)
  const weekKeys   = Object.keys(weeklyData).sort().reverse().slice(0, 8)

  if (weekKeys.length === 0) {
    return (
      <div className="card p-8 text-center text-white/30">
        <p className="text-3xl mb-2">📅</p>
        <p className="text-sm">Belum ada data mingguan</p>
      </div>
    )
  }

  const thisWeek = weeklyData[getWeekKey()] || { studied: 0, correct: 0, days: 0 }
  const lastWeek = weeklyData[weekKeys[1]]  || { studied: 0, correct: 0, days: 0 }
  const diff     = thisWeek.studied - lastWeek.studied

  return (
    <div>
      {/* Ringkasan minggu ini vs minggu lalu */}
      <div className="card p-5 mb-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-white/60 text-sm font-semibold">Minggu Ini</span>
          {diff !== 0 && (
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
              diff > 0 ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'
            }`}>
              {diff > 0 ? '+' : ''}{diff} vs minggu lalu
            </span>
          )}
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Kata dipelajari', value: thisWeek.studied, color: '#60a5fa' },
            { label: 'Jawaban benar',   value: thisWeek.correct, color: '#4ade80' },
            { label: 'Hari aktif',      value: thisWeek.days,    color: '#f59e0b' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className="font-display text-2xl font-extrabold" style={{ color: s.color }}>{s.value}</div>
              <div className="text-white/30 text-xs mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bar chart mingguan */}
      <div className="space-y-2">
        {weekKeys.slice(0, 6).map((wk, i) => {
          const data     = weeklyData[wk]
          const maxStudy = Math.max(1, ...weekKeys.map(k => weeklyData[k]?.studied || 0))
          const pct      = Math.round((data.studied / maxStudy) * 100)
          const isThisWk = wk === getWeekKey()
          const label    = i === 0 ? 'Minggu ini' : i === 1 ? 'Minggu lalu' : wk

          return (
            <div key={wk} className="flex items-center gap-3">
              <div className="text-[10px] text-white/30 w-20 flex-shrink-0 text-right">{label}</div>
              <div className="flex-1 h-5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${pct}%`,
                    background: isThisWk ? 'linear-gradient(90deg,#c80d0d,#ed1515,#f59e0b)' : 'rgba(237,21,21,0.4)',
                  }} />
              </div>
              <div className="text-xs text-white/40 w-10 flex-shrink-0">{data.studied}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────
export function Progress() {
  const { userId } = useAuthContext()
  const { unlocked, xp, getRank } = useAchievements(userId)
  const [tab, setTab] = useState('overview') // 'overview' | 'weekly' | 'heatmap'

  const progress  = storage.get(STORAGE_KEYS.PROGRESS, {})
  const streak    = storage.get(STORAGE_KEYS.STREAK, { count: 0, longestStreak: 0 })
  const dailyLog  = storage.get(STORAGE_KEYS.DAILY_LOG, {})
  const todayLog  = dailyLog[toDateKey()] || { studied: 0, correct: 0 }

  const totalKata     = HSK_LEVELS.reduce((s, l) => s + l.totalKata, 0)
  const totalMastered = Object.values(progress).reduce((s, l) => s + (l.mastered?.length || 0), 0)
  const totalSeen     = Object.values(progress).reduce((s, l) => s + (l.seen?.length || 0), 0)
  const overallPct    = Math.min(100, Math.round((totalMastered / totalKata) * 100))
  const activeDays    = Object.values(dailyLog).filter(d => (d.studied || 0) > 0).length
  const totalStudied  = Object.values(dailyLog).reduce((s, d) => s + (d.studied || 0), 0)
  const totalCorrect  = Object.values(dailyLog).reduce((s, d) => s + (d.correct || 0), 0)
  const accuracy      = totalStudied > 0 ? Math.round((totalCorrect / totalStudied) * 100) : 0
  const rank          = getRank(xp)
  const unlockedCount = Object.keys(unlocked).length

  return (
    <div className="min-h-screen px-4 py-8 max-w-4xl mx-auto animate-fade-in">
      <Link to="/" className="btn-ghost mb-6 inline-flex text-sm px-3 py-1.5">← Kembali</Link>
      <h1 className="font-display text-3xl font-extrabold mb-6">Progress Belajar</h1>

      {/* Streak + Rank card */}
      <div className="card p-6 mb-6 flex items-center gap-6 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="text-5xl animate-float">🔥</div>
          <div>
            <div className="font-display text-5xl font-extrabold text-gold-400 leading-none">{streak.count}</div>
            <div className="text-white/40 text-sm mt-0.5">Hari streak</div>
          </div>
        </div>
        <div className="w-px h-12 bg-surface-border hidden sm:block" />
        {/* Rank */}
        <Link to="/achievements" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div>
            <div className="font-hanzi text-3xl font-bold" style={{ color: rank.color }}>{rank.title}</div>
            <div className="text-white/30 text-xs">{rank.en} · {xp.toLocaleString()} XP</div>
          </div>
          <div className="text-right">
            <div className="text-white font-bold text-sm">{unlockedCount} Badge</div>
            <div className="text-white/30 text-xs">Lihat semua →</div>
          </div>
        </Link>
        <div className="w-px h-12 bg-surface-border hidden sm:block" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 flex-1">
          {[
            { label:'Streak terpanjang', value: streak.longestStreak || 0, unit:'hari', color:'text-gold-500' },
            { label:'Hari aktif',        value: activeDays,                unit:'hari', color:'text-blue-400' },
            { label:'Kata hari ini',     value: todayLog.studied,          unit:'kata', color:'text-green-400' },
            { label:'Akurasi',           value: `${accuracy}`,             unit:'%',    color:'text-violet-400' },
          ].map(s => (
            <div key={s.label}>
              <div className={`font-display text-2xl font-extrabold ${s.color}`}>
                {s.value}<span className="text-sm ml-0.5 font-medium opacity-60">{s.unit}</span>
              </div>
              <div className="text-white/30 text-xs mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Overall progress */}
      <div className="card p-5 mb-6">
        <div className="flex justify-between mb-3">
          <span className="text-white/60 text-sm font-medium">Progress keseluruhan</span>
          <span className="text-sm"><span className="font-bold">{totalMastered}</span><span className="text-white/30"> / {totalKata}</span></span>
        </div>
        <div className="progress-track h-3">
          <div className="progress-fill h-full" style={{ width:`${overallPct}%` }} />
        </div>
        <div className="flex justify-between text-xs text-white/25 mt-2">
          <span>{overallPct}% dikuasai</span>
          <span>{totalSeen} kata pernah dilihat</span>
        </div>
      </div>

      {/* Tab navigation */}
      <div className="flex gap-1 mb-6 p-1 rounded-xl" style={{ background:'rgba(255,255,255,0.04)' }}>
        {[
          { key:'overview', label:'Per Level' },
          { key:'heatmap',  label:'Aktivitas' },
          { key:'weekly',   label:'Mingguan' },
        ].map(t => (
          <button key={t.key} onClick={() => setTab(t.key)}
            className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
              tab === t.key ? 'bg-surface-card text-white shadow-card' : 'text-white/40 hover:text-white/70'
            }`}>
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab: Per Level */}
      {tab === 'overview' && (
        <div className="space-y-2.5">
          {HSK_LEVELS.map(lvl => {
            const lvlPrg  = progress[lvl.level] || {}
            const mastered = lvlPrg.mastered?.length || 0
            const seen     = lvlPrg.seen?.length || 0
            const pct      = Math.min(100, Math.round((mastered/lvl.totalKata)*100))
            return (
              <Link key={lvl.level} to={`/vocab/${lvl.level}`} className="card-hover p-4 block">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className={`badge badge-level-${lvl.level} text-xs`}>{lvl.name}</span>
                    <span className="text-white/30 text-xs hidden sm:inline">{lvl.keterangan}</span>
                  </div>
                  <span className="font-bold text-sm" style={{ color:lvl.warnaHex }}>{pct}%</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width:`${pct}%`, background:`linear-gradient(90deg,${lvl.warnaHex}60,${lvl.warnaHex})` }} />
                </div>
                <div className="flex justify-between text-[10px] text-white/25 mt-1.5">
                  <span>{mastered} dikuasai</span>
                  <span>{seen} dilihat · {lvl.totalKata} total</span>
                </div>
              </Link>
            )
          })}
        </div>
      )}

      {/* Tab: Heatmap */}
      {tab === 'heatmap' && (
        <div className="card p-5">
          <h2 className="text-white/60 text-sm font-semibold mb-4">Aktivitas 9 Minggu Terakhir</h2>
          <HeatmapCalendar dailyLog={dailyLog} />
        </div>
      )}

      {/* Tab: Weekly */}
      {tab === 'weekly' && (
        <div>
          <WeeklyReport dailyLog={dailyLog} />
        </div>
      )}
    </div>
  )
}