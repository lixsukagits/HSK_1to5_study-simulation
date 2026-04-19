import { Link } from 'react-router-dom'
import { HSK_LEVELS } from '../constants/hsklevels'
import { hskData } from '../data'
import { storage, STORAGE_KEYS } from '../utils/storage'
import { daysUntil, TARGET_DATE, toDateKey } from '../utils/datehelper'
import { getDueWords } from '../utils/srs'

function getStudyTodayPreview(progress, settings) {
  const target    = settings.dailyTarget || 20
  const todayLog  = storage.get(STORAGE_KEYS.DAILY_LOG, {})[toDateKey()] || { studied: 0 }
  const srsData   = storage.get(STORAGE_KEYS.SRS, {})
  const doneToday = todayLog.studied >= target
  let newCount = 0, revCount = 0

  for (const lvl of HSK_LEVELS) {
    const vocab   = hskData[lvl.level] || []
    const lvlPrg  = progress[lvl.level] || { seen: [], mastered: [] }
    const seenSet = new Set(lvlPrg.seen)
    const mastSet = new Set(lvlPrg.mastered)
    newCount += vocab.filter(v => !seenSet.has(v.id)).length
    const seen = vocab.filter(v => seenSet.has(v.id) && !mastSet.has(v.id))
    revCount += getDueWords(seen, srsData).length
  }

  return {
    doneToday,
    newCount: Math.min(newCount, Math.ceil(target * 0.65)),
    revCount: Math.min(revCount, Math.floor(target * 0.35)),
    target,
    studied: todayLog.studied,
  }
}

export default function Home() {
  const progress  = storage.get(STORAGE_KEYS.PROGRESS, {})
  const streak    = storage.get(STORAGE_KEYS.STREAK, { count: 0 })
  const dailyLog  = storage.get(STORAGE_KEYS.DAILY_LOG, {})
  const settings  = storage.get(STORAGE_KEYS.SETTINGS, { dailyTarget: 20 })
  const xpData    = storage.get(STORAGE_KEYS.XP, { total: 0 })
  const todayLog  = dailyLog[toDateKey()] || { studied: 0 }
  const daysLeft  = daysUntil(TARGET_DATE)

  const totalMastered = Object.values(progress).reduce((s, l) => s + (l.mastered?.length || 0), 0)
  const totalKata     = HSK_LEVELS.reduce((s, l) => s + l.totalKata, 0)
  const overallPct    = Math.min(100, Math.round((totalMastered / totalKata) * 100))
  const study         = getStudyTodayPreview(progress, settings)
  const target        = settings.dailyTarget || 20
  const todayPct      = Math.min(100, Math.round((todayLog.studied / target) * 100))

  return (
    <div className="min-h-screen px-4 py-8 max-w-4xl mx-auto animate-fade-in">

      {/* Hero */}
      <div className="relative mb-8 pt-2 overflow-hidden">
        <p className="section-label mb-3">Dashboard Belajar</p>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-[1.1] mb-3">
          你好，<span className="text-gradient-red">学习者</span>
        </h1>
        <p className="text-white/40 text-sm">
          {daysLeft > 0 ? `🔥 ${daysLeft} hari lagi menuju target` : '🎉 Target tercapai!'}
        </p>
      </div>

      {/* Study Today hero */}
      <Link to="/study" className="block mb-8 group" style={{ textDecoration:'none' }}>
        <div className="relative overflow-hidden rounded-3xl p-6 sm:p-8 transition-all duration-300 group-hover:-translate-y-1"
          style={{
            background: study.doneToday
              ? 'linear-gradient(135deg,rgba(74,222,128,0.12),rgba(74,222,128,0.05))'
              : 'linear-gradient(135deg,rgba(237,21,21,0.18),rgba(200,13,13,0.08),rgba(245,158,11,0.06))',
            border: study.doneToday ? '1px solid rgba(74,222,128,0.2)' : '1px solid rgba(237,21,21,0.2)',
            boxShadow: study.doneToday
              ? '0 0 40px rgba(74,222,128,0.06),0 8px 32px rgba(0,0,0,0.3)'
              : '0 0 40px rgba(237,21,21,0.08),0 8px 32px rgba(0,0,0,0.3)',
          }}>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 font-hanzi font-bold leading-none pointer-events-none"
            style={{ fontSize:120, color: study.doneToday ? 'rgba(74,222,128,0.06)' : 'rgba(237,21,21,0.08)' }}>
            {study.doneToday ? '完' : '学'}
          </div>
          <div className="relative flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                {study.doneToday
                  ? <span className="badge" style={{ background:'rgba(74,222,128,0.15)',color:'#4ade80',border:'1px solid rgba(74,222,128,0.3)' }}>✅ Selesai hari ini</span>
                  : <span className="badge" style={{ background:'rgba(237,21,21,0.15)',color:'#ff6262',border:'1px solid rgba(237,21,21,0.3)' }}>📅 Belajar Sekarang</span>
                }
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-1">Study Today</h2>
              <p className="text-white/45 text-sm">
                {study.doneToday
                  ? `${todayLog.studied} kata dipelajari · target ${target} tercapai!`
                  : `${study.newCount} kata baru + ${study.revCount} SRS review`}
              </p>
              <div className="mt-4">
                <div className="flex justify-between text-xs text-white/30 mb-1.5">
                  <span>Progress hari ini</span>
                  <span>{todayLog.studied} / {target}</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ background:'rgba(255,255,255,0.06)' }}>
                  <div className="h-full rounded-full transition-all duration-700"
                    style={{ width:`${todayPct}%`, background: study.doneToday ? 'linear-gradient(90deg,#16a34a,#4ade80)' : 'linear-gradient(90deg,#c80d0d,#ed1515,#f59e0b)' }} />
                </div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-200 group-hover:scale-105"
                style={{ background: study.doneToday ? 'rgba(74,222,128,0.2)' : 'rgba(237,21,21,0.9)', color:'#fff',
                  boxShadow: study.doneToday ? '0 0 20px rgba(74,222,128,0.2)' : '0 0 20px rgba(237,21,21,0.4)' }}>
                {study.doneToday ? '🔄 Sesi Lagi' : '▶ Mulai'}
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {[
          { label:'Streak',     value: streak.count,     unit:'hari', color:'#fbbf24', icon:'🔥' },
          { label:'Dikuasai',   value: totalMastered,    unit:'kata', color:'#4ade80', icon:'✓'  },
          { label:'XP Total',   value: xpData.total.toLocaleString(), unit:'xp', color:'#a78bfa', icon:'⚡' },
          { label:'Sisa target',value: daysLeft,         unit:'hari', color:'#60a5fa', icon:'⏳' },
        ].map(s => (
          <div key={s.label} className="card p-4 text-center">
            <div className="text-xl mb-1 leading-none">{s.icon}</div>
            <div className="font-display text-2xl font-extrabold leading-none" style={{ color:s.color }}>{s.value}</div>
            <div className="text-white/25 text-[10px] uppercase tracking-widest mt-1">{s.unit}</div>
            <div className="text-white/50 text-xs font-medium mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Overall progress */}
      <div className="card p-5 mb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="text-white/60 text-sm font-medium">Progress keseluruhan</span>
          <span className="font-semibold text-sm">
            <span className="text-white">{totalMastered}</span>
            <span className="text-white/30"> / {totalKata}</span>
          </span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width:`${overallPct}%` }} />
        </div>
        <p className="text-white/25 text-xs mt-2">{overallPct}% dari {totalKata} kata HSK 1–5</p>
      </div>

      {/* Level cards */}
      <p className="section-label mb-4">Level HSK</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
        {HSK_LEVELS.map((lvl, i) => {
          const lvlPrg   = progress[lvl.level] || {}
          const mastered = lvlPrg.mastered?.length || 0
          const seen     = lvlPrg.seen?.length || 0
          const pct      = Math.min(100, Math.round((mastered/lvl.totalKata)*100))
          return (
            <Link key={lvl.level} to={`/vocab/${lvl.level}`}
              className={`card-hover p-5 block animate-slide-up stagger-${i+1}`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className={`badge badge-level-${lvl.level} text-xs`}>{lvl.name}</span>
                  <p className="text-white/35 text-xs mt-2">{lvl.keterangan}</p>
                </div>
                <span className="font-display text-2xl font-extrabold" style={{ color:lvl.warnaHex }}>{pct}%</span>
              </div>
              <div className="progress-track mb-2">
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

      {/* Fitur mini games + latihan */}
      <p className="section-label mb-4">Fitur Lainnya</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {[
          { label:'Flash Card',      icon:'🃏', to:'/flashcards',  color:'rgba(237,21,21,0.08)',  border:'rgba(237,21,21,0.15)'  },
          { label:'Kuis',            icon:'✏️', to:'/quiz',        color:'rgba(96,165,250,0.08)', border:'rgba(96,165,250,0.15)' },
          { label:'Word Match',      icon:'🎮', to:'/wordmatch',   color:'rgba(74,222,128,0.08)', border:'rgba(74,222,128,0.15)' },
          { label:'Latihan Tulis',   icon:'🔤', to:'/writing',     color:'rgba(245,158,11,0.08)', border:'rgba(245,158,11,0.15)' },
          { label:'Urutan Goresan',  icon:'🖌️', to:'/strokeorder', color:'rgba(167,139,250,0.08)',border:'rgba(167,139,250,0.15)'},
          { label:'Progress',        icon:'📊', to:'/progress',    color:'rgba(244,114,182,0.08)',border:'rgba(244,114,182,0.15)'},
          { label:'Achievement',     icon:'🏆', to:'/achievements',color:'rgba(245,158,11,0.08)', border:'rgba(245,158,11,0.15)' },
          { label:'Bookmark',        icon:'🔖', to:'/bookmarks',   color:'rgba(251,191,36,0.08)', border:'rgba(251,191,36,0.15)' },
        ].map(a => (
          <Link key={a.label} to={a.to} className="card-hover p-4 text-center"
            style={{ background:a.color, borderColor:a.border }}>
            <div className="text-2xl mb-2 leading-none">{a.icon}</div>
            <div className="text-white text-xs font-semibold">{a.label}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}