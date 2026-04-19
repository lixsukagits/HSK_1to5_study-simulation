import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { HSK_LEVELS } from '../constants/hsklevels'
import { hskData } from '../data'
import { useProgress } from '../hooks/useprogress'
import { useStreak } from '../hooks/usestreak'
import { useSettings } from '../hooks/usesettings'
import { useAuthContext } from '../context/authcontext'
import { shuffle } from '../utils/quizgenerator'
import { AudioButton } from '../components/ui/audiobutton'
import { initTTS } from '../utils/tts'

initTTS()

const PAIR_COUNT = 6  // 6 pasang per ronde

function buildRound(vocab) {
  const pool = shuffle(vocab).slice(0, PAIR_COUNT)
  const lefts  = shuffle(pool.map(v => ({ id: v.id, text: v.hanzi, type: 'hanzi', word: v })))
  const rights = shuffle(pool.map(v => ({ id: v.id, text: v.arti,  type: 'arti',  word: v })))
  return { pool, lefts, rights }
}

const LEVEL_EMOJIS = ['🌱','🌿','🌳','🎋','🎍']

export function WordMatch() {
  const { settings }    = useSettings()
  const { userId } = useAuthContext()
  const { logActivity } = useProgress(userId)
  const { recordActivity } = useStreak(userId)

  const [selectedLevel, setSelectedLevel] = useState(settings.preferredLevel || 1)
  const [started,   setStarted]   = useState(false)
  const [round,     setRound]     = useState(null)
  const [selected,  setSelected]  = useState(null)  // { side:'left'|'right', id, idx }
  const [matched,   setMatched]   = useState(new Set())
  const [wrong,     setWrong]     = useState(null)   // { left, right } yang salah
  const [score,     setScore]     = useState(0)
  const [mistakes,  setMistakes]  = useState(0)
  const [roundNum,  setRoundNum]  = useState(1)
  const [startTime, setStartTime] = useState(null)
  const [elapsed,   setElapsed]   = useState(0)
  const [finished,  setFinished]  = useState(false)
  const [totalRounds] = useState(3)

  const vocab = hskData[selectedLevel] || []
  const lvl   = HSK_LEVELS.find(l => l.level === selectedLevel) || HSK_LEVELS[0]

  // Timer
  useEffect(() => {
    if (!started || finished) return
    const t = setInterval(() => setElapsed(e => e + 1), 1000)
    return () => clearInterval(t)
  }, [started, finished])

  function startGame() {
    if (vocab.length < PAIR_COUNT) return
    setRound(buildRound(vocab))
    setMatched(new Set()); setSelected(null); setWrong(null)
    setScore(0); setMistakes(0); setRoundNum(1)
    setStartTime(Date.now()); setElapsed(0)
    setStarted(true); setFinished(false)
  }

  function nextRound() {
    if (roundNum >= totalRounds) {
      setFinished(true)
      logActivity(PAIR_COUNT * roundNum, score)
      recordActivity()
      return
    }
    setRound(buildRound(vocab))
    setMatched(new Set()); setSelected(null); setWrong(null)
    setRoundNum(r => r + 1)
  }

  function handlePick(side, id, idx) {
    if (matched.has(id)) return
    if (wrong) return

    if (!selected) {
      setSelected({ side, id, idx })
      return
    }

    // Sudah ada yang dipilih
    if (selected.side === side) {
      // Ganti pilihan di sisi yang sama
      setSelected({ side, id, idx })
      return
    }

    // Coba match
    const leftId  = side === 'left'  ? id            : selected.id
    const rightId = side === 'right' ? id            : selected.id

    if (leftId === rightId) {
      // Match!
      const word = round.pool.find(v => v.id === leftId)
      setMatched(prev => new Set([...prev, leftId]))
      setScore(s => s + 1)
      setSelected(null)
      logActivity(1, 1)

      // Cek apakah ronde selesai
      if (matched.size + 1 >= PAIR_COUNT) {
        setTimeout(nextRound, 600)
      }
    } else {
      // Wrong
      setWrong({ leftId, rightId })
      setMistakes(m => m + 1)
      setTimeout(() => { setWrong(null); setSelected(null) }, 800)
    }
  }

  function getCardStyle(side, id) {
    const isMatched  = matched.has(id)
    const isSelected = selected?.id === id && selected?.side === side
    const isWrong    = wrong && (
      (side === 'left'  && wrong.leftId  === id) ||
      (side === 'right' && wrong.rightId === id)
    )

    if (isMatched)  return { border:'1px solid rgba(74,222,128,0.4)', background:'rgba(74,222,128,0.1)', color:'#4ade80', opacity:0.6 }
    if (isWrong)    return { border:'1px solid rgba(239,68,68,0.5)',   background:'rgba(239,68,68,0.1)',  color:'#f87171' }
    if (isSelected) return { border:'1px solid rgba(237,21,21,0.6)',   background:'rgba(237,21,21,0.12)', color:'#fff', boxShadow:'0 0 16px rgba(237,21,21,0.2)' }
    return {}
  }

  const accuracy = (score + mistakes) > 0 ? Math.round((score / (score + mistakes)) * 100) : 0
  const formatTime = s => `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`

  // ── Setup ──
  if (!started) {
    return (
      <div className="min-h-screen px-4 py-8 max-w-2xl mx-auto animate-fade-in">
        <Link to="/" className="btn-ghost mb-6 inline-flex text-sm px-3 py-1.5">← Kembali</Link>
        <h1 className="font-display text-3xl font-extrabold mb-1">Word Match</h1>
        <p className="text-white/35 text-sm mb-8">Cocokkan hanzi dengan artinya sebelum waktu habis</p>

        <p className="section-label mb-3">Pilih Level</p>
        <div className="grid grid-cols-5 gap-2 mb-8">
          {HSK_LEVELS.map((l, i) => (
            <button key={l.level} onClick={() => setSelectedLevel(l.level)}
              className={`card p-3 text-center transition-all ${selectedLevel === l.level ? 'border-white/25 bg-white/5' : 'hover:border-white/15'}`}>
              <div className="text-xl mb-1">{LEVEL_EMOJIS[i]}</div>
              <div className="text-xs font-bold" style={{ color: l.warnaHex }}>{l.name}</div>
            </button>
          ))}
        </div>

        <div className="card p-5 mb-8">
          <h2 className="text-white/60 text-sm font-semibold mb-4">Cara Main</h2>
          {[
            ['🀄', 'Tap hanzi di kiri'],
            ['🔤', 'Tap artinya di kanan'],
            ['✅', '6 pasang = ronde selesai'],
            ['🏆', `${totalRounds} ronde untuk menang`],
          ].map(([icon, text]) => (
            <div key={text} className="flex items-center gap-3 mb-2.5">
              <span className="text-lg">{icon}</span>
              <span className="text-white/60 text-sm">{text}</span>
            </div>
          ))}
        </div>

        <button onClick={startGame} disabled={vocab.length < PAIR_COUNT} className="btn-primary w-full py-3 text-base">
          Mulai Main →
        </button>
      </div>
    )
  }

  // ── Finished ──
  if (finished) {
    const totalPairs = PAIR_COUNT * totalRounds
    const pct = Math.round((score / totalPairs) * 100)
    return (
      <div className="min-h-screen px-4 py-8 max-w-2xl mx-auto animate-bounce-in text-center">
        <div className="text-7xl mb-4 animate-float">🎮</div>
        <h2 className="font-display text-3xl font-extrabold mb-1">Selesai!</h2>
        <p className="text-white/35 text-sm mb-8">{totalRounds} ronde · {formatTime(elapsed)}</p>

        <div className="card p-6 mb-6">
          <div className="font-display text-6xl font-extrabold text-gradient-red mb-1">{accuracy}%</div>
          <div className="text-white/35 text-sm">Akurasi</div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { label:'Benar',    value: score,    color:'#4ade80', icon:'✅' },
            { label:'Salah',    value: mistakes, color:'#f87171', icon:'❌' },
            { label:'Waktu',    value: formatTime(elapsed), color:'#60a5fa', icon:'⏱' },
          ].map(s => (
            <div key={s.label} className="card p-4 text-center">
              <div className="text-xl mb-1">{s.icon}</div>
              <div className="font-display text-xl font-extrabold" style={{ color: s.color }}>{s.value}</div>
              <div className="text-white/30 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-3 justify-center flex-wrap">
          <button onClick={startGame} className="btn-primary">Main Lagi</button>
          <Link to="/" className="btn-ghost">Beranda</Link>
        </div>
      </div>
    )
  }

  // ── Game ──
  if (!round) return null
  const allMatched = matched.size >= PAIR_COUNT

  return (
    <div className="min-h-screen px-4 py-8 max-w-2xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => setStarted(false)} className="btn-ghost text-sm px-3 py-1.5">✕</button>
        <div className="flex items-center gap-4 text-sm">
          <span className="text-white/30">Ronde {roundNum}/{totalRounds}</span>
          <span className="text-green-400 font-bold">{score} ✓</span>
          <span className={`font-mono ${elapsed > 60 ? 'text-red-400' : 'text-white/50'}`}>{formatTime(elapsed)}</span>
        </div>
        <span className={`badge badge-level-${selectedLevel}`}>{lvl.name}</span>
      </div>

      {/* Progress */}
      <div className="h-1.5 bg-white/5 rounded-full mb-6 overflow-hidden">
        <div className="h-full rounded-full transition-all duration-300"
          style={{ width:`${(matched.size/PAIR_COUNT)*100}%`, background:'linear-gradient(90deg,#ed1515,#4ade80)' }} />
      </div>

      {allMatched ? (
        <div className="text-center py-12 animate-bounce-in">
          <div className="text-6xl mb-4">🎉</div>
          <p className="font-display text-2xl font-extrabold mb-2">Ronde {roundNum} Selesai!</p>
          <p className="text-white/40 text-sm mb-6">{roundNum < totalRounds ? `${totalRounds - roundNum} ronde lagi` : 'Semua ronde selesai!'}</p>
          <button onClick={nextRound} className="btn-primary px-8 py-3">
            {roundNum < totalRounds ? 'Ronde Berikutnya →' : 'Lihat Hasil →'}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {/* Left: Hanzi */}
          <div className="space-y-2.5">
            <p className="section-label text-center mb-3">汉字</p>
            {round.lefts.map((item, idx) => (
              <div key={item.id}
                onClick={() => !matched.has(item.id) && handlePick('left', item.id, idx)}
                className="card p-4 text-center cursor-pointer transition-all duration-200 hover:border-white/20 select-none"
                style={getCardStyle('left', item.id)}
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="font-hanzi text-2xl font-bold" style={{ color: matched.has(item.id) ? '#4ade80' : lvl.warnaHex }}>
                    {item.text}
                  </span>
                  {!matched.has(item.id) && (
                    <span onClick={e => e.stopPropagation()}>
                      <AudioButton text={item.text} size="sm" ghost />
                    </span>
                  )}
                </div>
                <div className="text-white/25 text-[10px] mt-1">{item.word.pinyin}</div>
              </div>
            ))}
          </div>

          {/* Right: Arti */}
          <div className="space-y-2.5">
            <p className="section-label text-center mb-3">Arti</p>
            {round.rights.map((item, idx) => (
              <div key={item.id}
                onClick={() => !matched.has(item.id) && handlePick('right', item.id, idx)}
                className="card p-4 text-center cursor-pointer transition-all duration-200 hover:border-white/20 select-none"
                style={getCardStyle('right', item.id)}
              >
                <span className="text-white/70 text-sm font-medium leading-tight">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Hints */}
      {!allMatched && (
        <p className="text-center text-white/15 text-xs mt-6">
          Tap hanzi di kiri, lalu tap artinya di kanan untuk mencocokkan
        </p>
      )}
    </div>
  )
}