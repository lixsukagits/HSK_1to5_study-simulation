import { useState, useMemo, useEffect, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HSK_LEVELS } from '../constants/hsklevels'
import { hskData } from '../data'
import { useProgress } from '../hooks/useprogress'
import { useStreak } from '../hooks/usestreak'
import { useSettings } from '../hooks/usesettings'
import { storage, STORAGE_KEYS } from '../utils/storage'
import { toDateKey } from '../utils/datehelper'
import { shuffle } from '../utils/quizgenerator'

// ─── Konstanta ────────────────────────────────────────────────
const REVIEW_RATIO   = 0.35  // 35% kata review, 65% kata baru
const QUIZ_PER_BATCH = 5     // setiap 5 flash card → 1 mini quiz

// ─── Susun sesi harian ───────────────────────────────────────
function buildDailySession(progress, settings) {
  const target   = settings.dailyTarget || 20
  const newCount = Math.ceil(target * (1 - REVIEW_RATIO))
  const revCount = Math.floor(target * REVIEW_RATIO)

  // Kumpulkan kata baru (belum pernah dilihat) dari level rendah ke tinggi
  const newWords = []
  const revWords = []

  for (const lvl of HSK_LEVELS) {
    const vocab   = hskData[lvl.level] || []
    const lvlPrg  = progress[lvl.level] || { seen: [], mastered: [] }
    const seenSet = new Set(lvlPrg.seen)
    const mastSet = new Set(lvlPrg.mastered)

    // Kata baru: belum pernah dilihat
    const unseen = vocab.filter(v => !seenSet.has(v.id))
    newWords.push(...unseen.map(v => ({ ...v, _level: lvl.level, _isNew: true })))

    // Kata review: sudah dilihat tapi belum dikuasai
    const toReview = vocab.filter(v => seenSet.has(v.id) && !mastSet.has(v.id))
    revWords.push(...toReview.map(v => ({ ...v, _level: lvl.level, _isNew: false })))
  }

  const pickedNew = shuffle(newWords).slice(0, newCount)
  const pickedRev = shuffle(revWords).slice(0, revCount)

  // Gabung & acak, tapi biarkan kata baru ada di depan sedikit
  const session = shuffle([...pickedNew, ...pickedRev])
  return session
}

// ─── Buat soal pilihan ganda dari 1 kata ─────────────────────
function makeQuestion(kata, pool) {
  const distractors = shuffle(pool.filter(v => v.id !== kata.id)).slice(0, 3)
  const options     = shuffle([kata, ...distractors])
  return { kata, options, answer: kata.id }
}

// ─── Komponen: Step Progress Bar ─────────────────────────────
function StepBar({ current, total, correctCount }) {
  const pct = Math.round((current / total) * 100)
  return (
    <div className="mb-8">
      <div className="flex justify-between text-xs text-white/30 mb-2">
        <span>{current} / {total} kata</span>
        <span className="text-green-400 font-semibold">✓ {correctCount} benar</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${pct}%`,
            background: 'linear-gradient(90deg, #c80d0d, #ed1515, #f59e0b)',
          }}
        />
      </div>
    </div>
  )
}

// ─── Komponen: Flash Step ────────────────────────────────────
function FlashStep({ kata, onNext }) {
  const [revealed, setRevealed] = useState(false)
  const lvl = HSK_LEVELS.find(l => l.level === kata._level) || HSK_LEVELS[0]

  return (
    <div className="animate-fade-in">
      {/* Label */}
      <div className="flex items-center gap-2 mb-6">
        {kata._isNew
          ? <span className="badge" style={{ background:'rgba(96,165,250,0.12)', color:'#60a5fa', border:'1px solid rgba(96,165,250,0.25)' }}>✨ Kata Baru</span>
          : <span className="badge" style={{ background:'rgba(245,158,11,0.12)', color:'#f59e0b', border:'1px solid rgba(245,158,11,0.25)' }}>🔄 Review</span>
        }
        <span className={`badge badge-level-${lvl.level}`}>{lvl.name}</span>
      </div>

      {/* Card */}
      <div
        className="card p-10 text-center mb-5 cursor-pointer select-none"
        style={{ minHeight: 220 }}
        onClick={() => setRevealed(true)}
      >
        <div
          className="font-hanzi font-bold leading-none mb-4"
          style={{ fontSize: 'clamp(64px,14vw,100px)', color: lvl.warnaHex }}
        >
          {kata.hanzi}
        </div>
        <div className="text-white/40 text-lg">{kata.pinyin}</div>

        {revealed && (
          <div className="mt-6 pt-5 border-t border-surface-border animate-slide-up">
            <div className="text-white text-xl font-semibold mb-2">{kata.arti}</div>
            {kata.contoh && (
              <>
                <div className="font-hanzi text-sm text-white/45 mt-2">{kata.contoh}</div>
                <div className="text-white/25 text-xs italic mt-1">{kata.terjemahan}</div>
              </>
            )}
          </div>
        )}
      </div>

      {!revealed ? (
        <p className="text-center text-white/20 text-xs mb-5">Klik kartu untuk melihat arti</p>
      ) : (
        <div className="grid grid-cols-2 gap-3 animate-slide-up">
          <button onClick={() => onNext(false)} className="btn-ghost justify-center py-3">
            😕 Belum hafal
          </button>
          <button onClick={() => onNext(true)} className="btn-primary justify-center py-3">
            ✓ Hafal!
          </button>
        </div>
      )}

      {!revealed && (
        <div className="text-center mt-4">
          <button onClick={() => onNext(false)} className="text-white/20 text-xs hover:text-white/40 transition-colors">
            Lewati →
          </button>
        </div>
      )}
    </div>
  )
}

// ─── Komponen: Quiz Step ─────────────────────────────────────
function QuizStep({ question, pool, onAnswer }) {
  const [selected, setSelected] = useState(null)
  const lvl = HSK_LEVELS.find(l => l.level === question.kata._level) || HSK_LEVELS[0]

  function pick(optId) {
    if (selected !== null) return
    setSelected(optId)
    const correct = optId === question.answer
    setTimeout(() => {
      onAnswer(correct)
      setSelected(null)
    }, 900)
  }

  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-2 mb-6">
        <span className="badge" style={{ background:'rgba(237,21,21,0.12)', color:'#ff6262', border:'1px solid rgba(237,21,21,0.25)' }}>
          ✏️ Mini Kuis
        </span>
        <span className={`badge badge-level-${lvl.level}`}>{lvl.name}</span>
      </div>

      {/* Soal */}
      <div className="card p-8 text-center mb-5">
        <p className="section-label mb-5">Pilih arti yang benar</p>
        <div
          className="font-hanzi font-bold leading-none mb-3"
          style={{ fontSize: 'clamp(56px,12vw,88px)', color: lvl.warnaHex }}
        >
          {question.kata.hanzi}
        </div>
        <div className="text-white/35 text-base">{question.kata.pinyin}</div>
      </div>

      {/* Pilihan */}
      <div className="grid grid-cols-1 gap-2.5">
        {question.options.map((opt, i) => {
          let state = 'idle'
          if (selected !== null) {
            if (opt.id === question.answer) state = 'correct'
            else if (opt.id === selected)   state = 'wrong'
            else                            state = 'dim'
          }
          return (
            <button
              key={opt.id}
              onClick={() => pick(opt.id)}
              className={`quiz-option ${state === 'correct' ? 'correct' : ''} ${state === 'wrong' ? 'wrong' : ''} ${selected !== null ? 'answered' : ''}`}
            >
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-lg bg-white/5 text-white/25 text-xs font-bold mr-3 flex-shrink-0">
                {String.fromCharCode(65 + i)}
              </span>
              {opt.arti}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─── Komponen: Hasil Sesi ────────────────────────────────────
function SessionResult({ stats, onRestart, streak }) {
  const { total, correct, newLearned, reviewed } = stats
  const pct   = total > 0 ? Math.round((correct / total) * 100) : 0
  const grade = pct >= 90 ? '🏆' : pct >= 70 ? '🎯' : pct >= 50 ? '📖' : '💪'
  const msg   = pct >= 90 ? 'Sempurna!' : pct >= 70 ? 'Kerja Bagus!' : pct >= 50 ? 'Terus Semangat!' : 'Ayo Coba Lagi!'

  return (
    <div className="animate-bounce-in text-center">
      {/* Trophy */}
      <div className="text-7xl mb-4 animate-float inline-block">{grade}</div>
      <h2 className="font-display text-3xl font-extrabold mb-1">{msg}</h2>
      <p className="text-white/35 text-sm mb-8">Sesi belajar hari ini selesai</p>

      {/* Score card */}
      <div className="card p-6 mb-5">
        <div className="font-display text-6xl font-extrabold text-gradient-red mb-1">{pct}%</div>
        <div className="text-white/35 text-sm mb-5">{correct} benar dari {total} soal kuis</div>
        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
          <div className="h-full rounded-full transition-all duration-1000"
            style={{ width: `${pct}%`, background: 'linear-gradient(90deg, #c80d0d, #ed1515, #f59e0b)' }} />
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        {[
          { label: 'Kata baru',  value: newLearned, color: '#60a5fa', icon: '✨' },
          { label: 'Diulang',    value: reviewed,   color: '#f59e0b', icon: '🔄' },
          { label: 'Streak',     value: streak,     color: '#fbbf24', icon: '🔥' },
        ].map(s => (
          <div key={s.label} className="card p-4 text-center">
            <div className="text-xl mb-1">{s.icon}</div>
            <div className="font-display text-2xl font-extrabold" style={{ color: s.color }}>{s.value}</div>
            <div className="text-white/30 text-xs mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="flex gap-3 justify-center flex-wrap">
        <Link to="/" className="btn-primary">← Kembali ke Beranda</Link>
        <button onClick={onRestart} className="btn-ghost">Sesi Lagi</button>
      </div>
    </div>
  )
}

// ─── Halaman Utama Study Today ───────────────────────────────
export function StudyToday() {
  const navigate = useNavigate()
  const { settings }  = useSettings()
  const { progress, markSeen, markMastered, logActivity } = useProgress()
  const { streak, recordActivity } = useStreak()

  // Cek apakah sudah selesai hari ini
  const todayLog    = storage.get(STORAGE_KEYS.DAILY_LOG, {})[toDateKey()] || { studied: 0, correct: 0 }
  const target      = settings.dailyTarget || 20
  const doneToday   = todayLog.studied >= target

  // Build session
  const [session,   setSession]   = useState(() => buildDailySession(progress, settings))
  const [stepIdx,   setStepIdx]   = useState(0)
  const [started,   setStarted]   = useState(false)
  const [finished,  setFinished]  = useState(false)
  const [phase,     setPhase]     = useState('flash') // 'flash' | 'quiz'
  const [quizQ,     setQuizQ]     = useState(null)
  const [flashCount,setFlashCount]= useState(0)      // flash cards sejak quiz terakhir

  // Stats sesi
  const [stats, setStats] = useState({ total: 0, correct: 0, newLearned: 0, reviewed: 0 })

  const current = session[stepIdx]

  // Pool semua kata untuk distractor quiz
  const allPool = useMemo(() => {
    return HSK_LEVELS.flatMap(l => (hskData[l.level] || []).map(v => ({ ...v, _level: l.level })))
  }, [])

  function restart() {
    const s = buildDailySession(progress, settings)
    setSession(s)
    setStepIdx(0)
    setStarted(true)
    setFinished(false)
    setPhase('flash')
    setQuizQ(null)
    setFlashCount(0)
    setStats({ total: 0, correct: 0, newLearned: 0, reviewed: 0 })
  }

  function advance() {
    const next = stepIdx + 1
    if (next >= session.length) {
      recordActivity()
      setFinished(true)
      return
    }
    setStepIdx(next)
    setPhase('flash')
    setQuizQ(null)
  }

  function handleFlashDone(knew) {
    const kata = current
    // Catat progress
    markSeen(kata._level, kata.id)
    if (knew) markMastered(kata._level, kata.id)

    const isNew = kata._isNew
    setStats(s => ({
      ...s,
      newLearned: isNew ? s.newLearned + 1 : s.newLearned,
      reviewed:   !isNew ? s.reviewed + 1 : s.reviewed,
    }))
    logActivity(1, knew ? 1 : 0)

    const newFlashCount = flashCount + 1

    // Setiap QUIZ_PER_BATCH flash → tampilkan mini quiz
    if (newFlashCount >= QUIZ_PER_BATCH && stepIdx + 1 < session.length) {
      const q = makeQuestion(kata, allPool)
      setQuizQ(q)
      setPhase('quiz')
      setFlashCount(0)
    } else {
      setFlashCount(newFlashCount)
      advance()
    }
  }

  function handleQuizAnswer(correct) {
    setStats(s => ({ ...s, total: s.total + 1, correct: s.correct + (correct ? 1 : 0) }))
    advance()
  }

  // ── Preview screen ──
  if (!started) {
    const newCount = session.filter(v => v._isNew).length
    const revCount = session.filter(v => !v._isNew).length

    return (
      <div className="min-h-screen px-4 py-8 max-w-lg mx-auto animate-fade-in">
        <Link to="/" className="btn-ghost mb-6 inline-flex text-sm px-3 py-1.5">← Kembali</Link>

        {/* Hero */}
        <div className="relative mb-8 overflow-hidden">
          <div className="hero-hanzi right-0 top-0" style={{ fontSize: 120 }}>学</div>
          <p className="section-label mb-2">Study Today</p>
          <h1 className="font-display text-4xl font-extrabold mb-2">
            Sesi Belajar<br /><span className="text-gradient-red">Hari Ini</span>
          </h1>
          <p className="text-white/40 text-sm">Dikurasi otomatis dari kata baru + kata review kamu</p>
        </div>

        {/* Sudah selesai hari ini? */}
        {doneToday && (
          <div className="card p-4 mb-6 flex items-center gap-3" style={{ borderColor: 'rgba(74,222,128,0.2)', background: 'rgba(74,222,128,0.05)' }}>
            <span className="text-2xl">✅</span>
            <div>
              <div className="text-green-400 font-semibold text-sm">Target hari ini tercapai!</div>
              <div className="text-white/35 text-xs">{todayLog.studied} / {target} kata dipelajari</div>
            </div>
          </div>
        )}

        {/* Session preview */}
        <div className="card p-5 mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-white/60 text-sm font-semibold">Sesi hari ini</span>
            <span className="font-display text-xl font-extrabold text-white">{session.length} <span className="text-white/30 text-sm font-medium">kata</span></span>
          </div>

          <div className="space-y-3">
            {[
              { label: 'Kata baru',    value: newCount, color: '#60a5fa', bg: 'rgba(96,165,250,0.08)',  icon: '✨', desc: 'Belum pernah dipelajari' },
              { label: 'Kata review',  value: revCount, color: '#f59e0b', bg: 'rgba(245,158,11,0.08)', icon: '🔄', desc: 'Perlu diulang' },
            ].map(row => (
              <div key={row.label} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: row.bg }}>
                <span className="text-xl">{row.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-white/70 text-sm font-medium">{row.label}</div>
                  <div className="text-white/30 text-xs">{row.desc}</div>
                </div>
                <span className="font-display text-xl font-extrabold" style={{ color: row.color }}>{row.value}</span>
              </div>
            ))}
          </div>

          {/* Mini quiz preview */}
          <div className="mt-3 p-3 rounded-xl" style={{ background: 'rgba(237,21,21,0.06)' }}>
            <div className="flex items-center gap-3">
              <span className="text-xl">✏️</span>
              <div className="flex-1">
                <div className="text-white/70 text-sm font-medium">Mini Kuis</div>
                <div className="text-white/30 text-xs">Setiap {QUIZ_PER_BATCH} kartu, ada 1 soal kuis</div>
              </div>
              <span className="font-display text-xl font-extrabold text-primary-400">
                ~{Math.floor(session.length / QUIZ_PER_BATCH)}
              </span>
            </div>
          </div>
        </div>

        {/* Estimasi waktu */}
        <p className="text-white/25 text-xs text-center mb-6">
          Estimasi ±{Math.ceil(session.length * 0.5)} menit
        </p>

        {session.length === 0 ? (
          <div className="card p-8 text-center text-white/40">
            <p className="text-4xl mb-3">🎉</p>
            <p className="font-semibold text-white/60">Semua kata sudah dipelajari!</p>
            <p className="text-sm mt-1">Coba level berikutnya di halaman Vocab.</p>
            <Link to="/" className="btn-ghost mt-4 inline-flex">Kembali</Link>
          </div>
        ) : (
          <button onClick={() => setStarted(true)} className="btn-primary w-full py-4 text-base">
            Mulai Belajar →
          </button>
        )}
      </div>
    )
  }

  // ── Finished screen ──
  if (finished) {
    return (
      <div className="min-h-screen px-4 py-8 max-w-lg mx-auto">
        <SessionResult stats={stats} onRestart={restart} streak={streak.count} />
      </div>
    )
  }

  // ── Active session ──
  return (
    <div className="min-h-screen px-4 py-8 max-w-lg mx-auto">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => {
            if (window.confirm('Keluar dari sesi belajar?')) navigate('/')
          }}
          className="btn-ghost text-sm px-3 py-1.5"
        >
          ✕
        </button>
        <span className="text-white/30 text-xs font-medium">Study Today</span>
        <span className="text-gold-400 text-sm font-bold">🔥 {streak.count}</span>
      </div>

      <StepBar current={stepIdx} total={session.length} correctCount={stats.correct} />

      {phase === 'flash' && current && (
        <FlashStep key={`flash-${stepIdx}`} kata={current} onNext={handleFlashDone} />
      )}

      {phase === 'quiz' && quizQ && (
        <QuizStep key={`quiz-${stepIdx}`} question={quizQ} pool={allPool} onAnswer={handleQuizAnswer} />
      )}
    </div>
  )
}