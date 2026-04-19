import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import HanziWriter from 'hanzi-writer'
import { HSK_LEVELS } from '../constants/hsklevels'
import { hskData } from '../data'
import { useProgress } from '../hooks/useprogress'
import { useSettings } from '../hooks/usesettings'
import { AudioButton } from '../components/ui/audiobutton'
import { shuffle } from '../utils/quizgenerator'
import { initTTS } from '../utils/tts'

initTTS()

const LEVEL_EMOJIS = ['🌱','🌿','🌳','🎋','🎍']

// ─── Hanzi Writer Canvas Component ───────────────────────────
function HanziCanvas({ char, mode, onComplete, key: _key }) {
  const containerRef = useRef(null)
  const writerRef    = useRef(null)

  useEffect(() => {
    if (!containerRef.current || !char) return
    containerRef.current.innerHTML = ''

    const writer = HanziWriter.create(containerRef.current, char, {
      width:             280,
      height:            280,
      padding:           20,
      strokeColor:       '#ed1515',
      outlineColor:      'rgba(255,255,255,0.08)',
      strokeAnimationSpeed: 0.8,
      delayBetweenStrokes:  200,
      showOutline:       true,
      showCharacter:     mode !== 'quiz',
      // Quiz mode
      showHintAfterMisses: mode === 'quiz' ? 3 : 0,
      highlightColor:    '#f59e0b',
      highlightOnComplete: true,
      drawingWidth:      6,
      radicalColor:      '#ff6262',
    })
    writerRef.current = writer

    if (mode === 'animate') {
      writer.animateCharacter({ onComplete })
    } else if (mode === 'quiz') {
      writer.quiz({
        onComplete: (summary) => onComplete?.(summary),
        onMistake:  () => {},
      })
    }
    // mode === 'view': just show static

    return () => { try { writer.cancelQuiz?.() } catch {} }
  }, [char, mode])

  return (
    <div className="flex items-center justify-center">
      <div
        ref={containerRef}
        className="rounded-2xl"
        style={{
          width: 280, height: 280,
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      />
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────
export function StrokeOrder() {
  const { settings }    = useSettings()
  const { progress }    = useProgress()

  const [selectedLevel, setSelectedLevel] = useState(settings.preferredLevel || 1)
  const [mode,    setMode]    = useState(null)   // null | 'browse' | 'animate' | 'quiz'
  const [wordIdx, setWordIdx] = useState(0)
  const [deck,    setDeck]    = useState([])
  const [quizResult, setQuizResult] = useState(null)  // summary dari hanzi-writer
  const [quizDone, setQuizDone]    = useState(false)

  const vocab = hskData[selectedLevel] || []
  const lvl   = HSK_LEVELS.find(l => l.level === selectedLevel) || HSK_LEVELS[0]

  // Filter kata 1 karakter saja (lebih mudah untuk latihan stroke)
  const singleChar = vocab.filter(v => v.hanzi.length === 1)
  const multiChar  = vocab.filter(v => v.hanzi.length > 1)

  function startMode(m) {
    const pool = shuffle(singleChar.length >= 5 ? singleChar : vocab).slice(0, 30)
    setDeck(pool)
    setWordIdx(0)
    setMode(m)
    setQuizResult(null)
    setQuizDone(false)
  }

  function next() {
    if (wordIdx + 1 >= deck.length) {
      setWordIdx(0)
    } else {
      setWordIdx(i => i + 1)
    }
    setQuizResult(null)
    setQuizDone(false)
  }

  function prev() {
    setWordIdx(i => Math.max(0, i - 1))
    setQuizResult(null)
    setQuizDone(false)
  }

  const current = deck[wordIdx]

  // ── Setup ──
  if (!mode) {
    return (
      <div className="min-h-screen px-4 py-8 max-w-2xl mx-auto animate-fade-in">
        <Link to="/" className="btn-ghost mb-6 inline-flex text-sm px-3 py-1.5">← Kembali</Link>
        <h1 className="font-display text-3xl font-extrabold mb-1">Urutan Goresan</h1>
        <p className="text-white/35 text-sm mb-8">Pelajari cara menulis karakter Hanzi dengan benar</p>

        <p className="section-label mb-3">Level</p>
        <div className="grid grid-cols-5 gap-2 mb-8">
          {HSK_LEVELS.map((l, i) => (
            <button key={l.level} onClick={() => setSelectedLevel(l.level)}
              className={`card p-3 text-center transition-all ${selectedLevel === l.level ? 'border-white/25 bg-white/5' : 'hover:border-white/15'}`}>
              <div className="text-xl mb-1">{LEVEL_EMOJIS[i]}</div>
              <div className="text-xs font-bold" style={{ color: l.warnaHex }}>{l.name}</div>
              <div className="text-white/20 text-[10px] mt-0.5">{singleChar.length} karakter</div>
            </button>
          ))}
        </div>

        <p className="section-label mb-3">Mode</p>
        <div className="grid grid-cols-1 gap-3 mb-4">
          {[
            { key:'animate', icon:'▶️', label:'Animasi',       desc:'Lihat urutan goresan dianimasikan secara otomatis', color:'rgba(96,165,250,0.08)', border:'rgba(96,165,250,0.2)' },
            { key:'quiz',    icon:'✏️', label:'Latihan Tulis',  desc:'Ikuti urutan goresan dengan mouse/jari kamu',       color:'rgba(237,21,21,0.08)', border:'rgba(237,21,21,0.2)' },
            { key:'browse',  icon:'👁', label:'Lihat Karakter', desc:'Browse karakter dan pinyin dengan outline goresan', color:'rgba(74,222,128,0.06)', border:'rgba(74,222,128,0.15)' },
          ].map(m => (
            <button key={m.key} onClick={() => startMode(m.key)}
              className="card-hover p-5 text-left flex items-center gap-4"
              style={{ background: m.color, borderColor: m.border }}>
              <span className="text-3xl flex-shrink-0">{m.icon}</span>
              <div>
                <div className="text-white font-semibold mb-0.5">{m.label}</div>
                <div className="text-white/35 text-sm">{m.desc}</div>
              </div>
            </button>
          ))}
        </div>

        <p className="text-white/20 text-xs text-center">
          {singleChar.length} karakter tunggal tersedia di {lvl.name}
        </p>
      </div>
    )
  }

  // ── Active Mode ──
  return (
    <div className="min-h-screen px-4 py-8 max-w-lg mx-auto animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => setMode(null)} className="btn-ghost text-sm px-3 py-1.5">← Ganti Mode</button>
        <span className={`badge badge-level-${selectedLevel}`}>
          {mode === 'animate' ? '▶️ Animasi' : mode === 'quiz' ? '✏️ Latihan' : '👁 Browse'}
        </span>
        <span className="text-white/30 text-sm">{wordIdx + 1} / {deck.length}</span>
      </div>

      {current && (
        <>
          {/* Word info */}
          <div className="text-center mb-5">
            <div className="flex items-center justify-center gap-3 mb-1">
              <span className="font-hanzi text-5xl font-bold" style={{ color: lvl.warnaHex }}>
                {current.hanzi}
              </span>
              <AudioButton text={current.hanzi} size="lg" />
            </div>
            <div className="text-white/45 text-base">{current.pinyin}</div>
            <div className="text-white/70 text-sm font-medium">{current.arti}</div>
            {current.contoh && (
              <div className="mt-2">
                <div className="font-hanzi text-xs text-white/30">{current.contoh}</div>
              </div>
            )}
          </div>

          {/* Canvas */}
          <div className="mb-5">
            <HanziCanvas
              key={`${current.hanzi}-${mode}-${wordIdx}`}
              char={current.hanzi}
              mode={mode}
              onComplete={(summary) => {
                if (mode === 'quiz') {
                  setQuizResult(summary)
                  setQuizDone(true)
                }
              }}
            />
          </div>

          {/* Quiz result */}
          {mode === 'quiz' && quizDone && quizResult && (
            <div className="card p-4 mb-4 text-center animate-bounce-in"
              style={{ borderColor:'rgba(74,222,128,0.3)', background:'rgba(74,222,128,0.06)' }}>
              <div className="text-3xl mb-1">
                {quizResult.totalMistakes === 0 ? '🌟' : quizResult.totalMistakes < 3 ? '✅' : '📖'}
              </div>
              <div className="text-white font-semibold text-sm">
                {quizResult.totalMistakes === 0 ? 'Sempurna!' : `${quizResult.totalMistakes} kesalahan`}
              </div>
            </div>
          )}

          {/* Mode-specific hint */}
          {mode === 'animate' && (
            <p className="text-white/20 text-xs text-center mb-4">Animasi diputar otomatis</p>
          )}
          {mode === 'quiz' && !quizDone && (
            <p className="text-white/20 text-xs text-center mb-4">Gambar goresan mengikuti urutan yang benar</p>
          )}
          {mode === 'browse' && (
            <p className="text-white/20 text-xs text-center mb-4">Lihat outline goresan karakter</p>
          )}

          {/* Navigation */}
          <div className="flex gap-3">
            <button onClick={prev} disabled={wordIdx === 0} className="btn-ghost flex-1 justify-center disabled:opacity-30">← Prev</button>
            <button onClick={next} className="btn-primary flex-1 justify-center">
              {wordIdx + 1 >= deck.length ? 'Ulangi' : 'Next →'}
            </button>
          </div>
        </>
      )}
    </div>
  )
}