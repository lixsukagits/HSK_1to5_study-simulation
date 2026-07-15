import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HSK_LEVELS } from '../constants/hsklevels'
import { hskDataComplete, topicLabelsByLevel } from '../data'
import { useProgress } from '../hooks/useprogress'
import { useStreak } from '../hooks/usestreak'
import { useSettings } from '../hooks/usesettings'
import { useAuthContext } from '../context/authcontext'
import { shuffle } from '../utils/quizgenerator'
import { AudioButton } from '../components/ui/audiobutton'
import { VocabSearch } from '../components/vocab/vocabsearch'
import { GRADE } from '../utils/srs'
import { initTTS } from '../utils/tts'

initTTS()

const LEVEL_EMOJIS = ['🌱','🌿','🌳','🎋','🎍']

// Normalize: hapus tanda nada untuk perbandingan
function normalizePinyin(str) {
  return str.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ü/g, 'u')
    .replace(/\s+/g, ' ')
    .trim()
}

export function WritingPractice() {
  const { settings }     = useSettings()
  const { userId } = useAuthContext()
  const { markSeen, reviewSRS, logActivity } = useProgress(userId)
  const { recordActivity } = useStreak(userId)

  const [selectedLevel, setSelectedLevel] = useState(settings.preferredLevel || 1)
  const [topicFilter, setTopicFilter] = useState('all')
  const [searchedWord, setSearchedWord] = useState(null)
  const [mode,    setMode]   = useState(null)   // null | 'hanzi2pinyin' | 'pinyin2hanzi' | 'arti2hanzi'
  const [deck,    setDeck]   = useState([])
  const [idx,     setIdx]    = useState(0)
  const [input,   setInput]  = useState('')
  const [result,  setResult] = useState(null)  // null | 'correct' | 'wrong'
  const [correct, setCorrect] = useState(0)
  const [done,    setDone]   = useState(false)

  const vocabAll = hskDataComplete[selectedLevel] || []
  const lvl      = HSK_LEVELS.find(l => l.level === selectedLevel) || HSK_LEVELS[0]

  // Label kategori topic untuk level ini — pola sama seperti vocab.jsx
  const topicLabels = topicLabelsByLevel[selectedLevel] || {}
  const hasTopics   = Object.keys(topicLabels).length > 0
  const vocab       = (hasTopics && topicFilter !== 'all')
    ? vocabAll.filter(v => v.topic === topicFilter)
    : vocabAll

  const current = deck[idx]

  function selectLevel(level) {
    setSelectedLevel(level)
    setTopicFilter('all')
    setSearchedWord(null)
  }

  function startMode(m) {
    setDeck(searchedWord ? [searchedWord] : shuffle(vocab).slice(0, 20))
    setIdx(0); setInput(''); setResult(null)
    setCorrect(0); setDone(false); setMode(m)
  }

  function handleSearchSelect(kata) {
    setSearchedWord(kata)
  }

  function clearSearch() {
    setSearchedWord(null)
  }

  function getQuestion() {
    if (!current) return { prompt: '', placeholder: '', answer: '' }
    switch (mode) {
      case 'hanzi2pinyin': return {
        prompt: current.hanzi,
        subtitle: current.arti,
        placeholder: 'Ketik Pinyin (contoh: nǐ hǎo atau ni hao)',
        answer: current.pinyin,
        type: 'pinyin',
      }
      case 'pinyin2hanzi': return {
        prompt: current.pinyin,
        subtitle: current.arti,
        placeholder: 'Ketik karakter Hanzi',
        answer: current.hanzi,
        type: 'hanzi',
        matchField: 'pinyin',
      }
      case 'arti2hanzi': return {
        prompt: current.arti,
        subtitle: '',
        placeholder: 'Ketik karakter Hanzi',
        answer: current.hanzi,
        type: 'hanzi',
        matchField: 'arti',
      }
      default: return { prompt: '', placeholder: '', answer: '' }
    }
  }

  function checkAnswer() {
    if (!input.trim() || !current) return
    const q = getQuestion()
    let isCorrect = false

    if (q.type === 'pinyin') {
      // Bandingkan tanpa tanda nada (toleransi input keyboard biasa)
      const normalized = normalizePinyin(input)
      const expected   = normalizePinyin(q.answer)
      isCorrect = normalized === expected
    } else if (q.matchField) {
      // Beberapa kata HSK3-5 punya lebih dari satu hanzi valid untuk arti/pinyin
      // yang sama persis (mis. "atau; ataupun" -> 或 atau 或者). Terima semua
      // hanzi yang berbagi nilai matchField yang sama di level ini, bukan cuma
      // hanzi milik entri current secara spesifik.
      const acceptable = vocabAll
        .filter(v => v[q.matchField] === current[q.matchField])
        .map(v => v.hanzi)
      isCorrect = acceptable.includes(input.trim())
    } else {
      isCorrect = input.trim() === q.answer
    }

    setResult(isCorrect ? 'correct' : 'wrong')
    if (isCorrect) setCorrect(c => c + 1)
    markSeen(current.level || selectedLevel, current.id)
    reviewSRS(current.id, isCorrect ? GRADE.GOOD : GRADE.WRONG)
    logActivity(1, isCorrect ? 1 : 0)
    if (isCorrect) recordActivity()
  }

  function next() {
    if (idx + 1 >= deck.length) {
      setDone(true)
    } else {
      setIdx(i => i + 1)
      setInput(''); setResult(null)
    }
  }

  function skip() {
    setResult('wrong')
    logActivity(1, 0)
    setTimeout(next, 800)
  }

  // ── Setup ──
  if (!mode) {
    return (
      <div className="min-h-screen px-4 py-8 max-w-2xl mx-auto animate-fade-in">
        <Link to="/" className="btn-ghost mb-6 inline-flex text-sm px-3 py-1.5">← Kembali</Link>
        <h1 className="font-display text-3xl font-extrabold mb-1">Latihan Tulis</h1>
        <p className="text-white/35 text-sm mb-8">Ketik jawaban untuk melatih ingatan aktif</p>

        <p className="section-label mb-3">Latih Kata Tertentu</p>
        <div className="mb-4">
          <VocabSearch
            vocab={vocabAll}
            levelColor={lvl.warnaHex}
            placeholder="Cari kata untuk dilatih khusus..."
            onSelect={handleSearchSelect}
          />
        </div>
        {searchedWord && (
          <div className="card p-3 mb-8 flex items-center justify-between"
            style={{ borderColor: 'rgba(96,165,250,0.25)', background: 'rgba(96,165,250,0.05)' }}>
            <div className="flex items-center gap-2">
              <span className="font-hanzi text-lg font-bold" style={{ color: lvl.warnaHex }}>{searchedWord.hanzi}</span>
              <span className="text-white/40 text-xs">{searchedWord.pinyin} · {searchedWord.arti}</span>
            </div>
            <button onClick={clearSearch} className="text-white/30 hover:text-white/70 text-sm px-2">Batal</button>
          </div>
        )}

        <p className="section-label mb-3">Level</p>
        <div className="grid grid-cols-5 gap-2 mb-8">
          {HSK_LEVELS.map((l, i) => (
            <button key={l.level} onClick={() => selectLevel(l.level)}
              className={`card p-3 text-center transition-all ${selectedLevel === l.level ? 'border-white/25 bg-white/5' : 'hover:border-white/15'}`}>
              <div className="text-xl mb-1">{LEVEL_EMOJIS[i]}</div>
              <div className="text-xs font-bold" style={{ color: l.warnaHex }}>{l.name}</div>
            </button>
          ))}
        </div>

        {/* Topic filter — cuma muncul kalau level ini punya field `topic` di vocabnya */}
        {hasTopics && (
          <>
            <p className="section-label mb-3">Topik</p>
            <div className="flex gap-1.5 mb-8 flex-wrap">
              <button onClick={() => setTopicFilter('all')}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  topicFilter === 'all' ? 'bg-white/10 text-white' : 'text-white/25 hover:text-white/50 hover:bg-white/5'
                }`}>
                Semua Topik
              </button>
              {Object.entries(topicLabels).map(([key, label]) => (
                <button key={key} onClick={() => setTopicFilter(key)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                    topicFilter === key ? 'bg-white/10 text-white' : 'text-white/25 hover:text-white/50 hover:bg-white/5'
                  }`}>
                  {label.id}
                </button>
              ))}
            </div>
          </>
        )}

        <p className="section-label mb-3">{searchedWord ? `Mode Latihan — 1 kata terpilih` : 'Mode Latihan'}</p>
        <div className="grid grid-cols-1 gap-3">
          {[
            { key:'hanzi2pinyin', icon:'🔠', label:'Hanzi → Pinyin',          desc:'Lihat karakter, ketik cara bacanya',       color:'rgba(96,165,250,0.08)',  border:'rgba(96,165,250,0.2)' },
            { key:'pinyin2hanzi', icon:'🀄', label:'Pinyin → Hanzi',          desc:'Lihat pinyin, ketik karakternya',           color:'rgba(237,21,21,0.08)',   border:'rgba(237,21,21,0.2)' },
            { key:'arti2hanzi',   icon:'🔤', label:'Arti → Hanzi',            desc:'Lihat arti Indonesia, ketik karakternya',  color:'rgba(74,222,128,0.06)',  border:'rgba(74,222,128,0.15)' },
          ].map(m => (
            <button key={m.key} onClick={() => startMode(m.key)}
              disabled={vocab.length === 0}
              className="card-hover p-4 text-left flex items-center gap-4 disabled:opacity-35 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              style={{ background: m.color, borderColor: m.border }}>
              <span className="text-3xl">{m.icon}</span>
              <div>
                <div className="text-white font-semibold mb-0.5">{m.label}</div>
                <div className="text-white/35 text-sm">{m.desc}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    )
  }

  // ── Done ──
  if (done) {
    const total = deck.length
    const pct   = Math.round((correct / total) * 100)
    return (
      <div className="min-h-screen px-4 py-8 max-w-2xl mx-auto animate-bounce-in text-center">
        <div className="text-7xl mb-4 animate-float">{pct >= 80 ? '🏆' : pct >= 60 ? '🎯' : '📖'}</div>
        <h2 className="font-display text-3xl font-extrabold mb-1">{pct >= 80 ? 'Hebat!' : pct >= 60 ? 'Bagus!' : 'Terus Berlatih!'}</h2>
        <p className="text-white/35 text-sm mb-8">Latihan selesai</p>

        <div className="card p-6 mb-6">
          <div className="font-display text-6xl font-extrabold text-gradient-red mb-1">{pct}%</div>
          <div className="text-white/35 text-sm">{correct} benar dari {total} soal</div>
        </div>

        <div className="flex gap-3 justify-center">
          <button onClick={() => startMode(mode)} className="btn-primary">Ulangi</button>
          <button onClick={() => setMode(null)} className="btn-ghost">Ganti Mode</button>
          <Link to="/" className="btn-ghost">Beranda</Link>
        </div>
      </div>
    )
  }

  // ── Active ──
  const q = getQuestion()
  const modeLabels = { hanzi2pinyin: 'Hanzi → Pinyin', pinyin2hanzi: 'Pinyin → Hanzi', arti2hanzi: 'Arti → Hanzi' }

  return (
    <div className="min-h-screen px-4 py-8 max-w-lg mx-auto animate-fade-in">
      <div className="flex items-center justify-between mb-5">
        <button onClick={() => setMode(null)} className="btn-ghost text-sm px-3 py-1.5">← Berhenti</button>
        <span className="text-white/30 text-sm">{idx + 1} / {deck.length}</span>
        <span className="text-green-400 text-sm font-bold">{correct} ✓</span>
      </div>

      <div className="h-1.5 bg-white/5 rounded-full mb-7 overflow-hidden">
        <div className="h-full rounded-full transition-all duration-300"
          style={{ width:`${(idx/deck.length)*100}%`, background:'linear-gradient(90deg,#ed1515,#f59e0b)' }} />
      </div>

      {/* Question card */}
      <div className="card p-8 text-center mb-5 relative">
        <div className="absolute top-4 right-4">
          <AudioButton text={current?.hanzi || ''} size="md" />
        </div>
        <p className="section-label mb-5">{modeLabels[mode]}</p>

        {mode === 'hanzi2pinyin' ? (
          <div className="font-hanzi font-bold leading-none mb-3"
            style={{ fontSize:'clamp(56px,14vw,96px)', color: lvl.warnaHex }}>
            {q.prompt}
          </div>
        ) : mode === 'pinyin2hanzi' ? (
          <div className="text-white text-2xl font-medium tracking-wide mb-3">{q.prompt}</div>
        ) : (
          <div className="text-white text-xl font-semibold mb-3">{q.prompt}</div>
        )}

        {q.subtitle && <div className="text-white/35 text-sm">{q.subtitle}</div>}
      </div>

      {/* Input */}
      <div className="mb-4">
        <input
          type="text"
          className={`input w-full text-center text-lg font-medium transition-all ${
            result === 'correct' ? 'border-green-400/50 bg-green-400/5' :
            result === 'wrong'   ? 'border-red-400/50 bg-red-400/5' : ''
          }`}
          placeholder={q.placeholder}
          value={input}
          onChange={e => { if (!result) setInput(e.target.value) }}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              if (result) next()
              else if (input.trim()) checkAnswer()
            }
          }}
          autoFocus
          disabled={!!result}
        />

        {/* Result feedback */}
        {result === 'correct' && (
          <div className="mt-3 text-center animate-bounce-in">
            <span className="text-green-400 font-semibold">✓ Benar!</span>
          </div>
        )}
        {result === 'wrong' && (
          <div className="mt-3 text-center animate-bounce-in">
            <span className="text-red-400 font-semibold">✗ Jawaban: </span>
            <span className={`font-semibold ${q.type === 'hanzi' ? 'font-hanzi text-xl text-primary-400' : 'text-white'}`}>
              {q.matchField
                ? [...new Set(vocabAll.filter(v => v[q.matchField] === current[q.matchField]).map(v => v.hanzi))].join(' / ')
                : q.answer}
            </span>
          </div>
        )}
      </div>

      {/* Buttons */}
      {!result ? (
        <div className="flex gap-3">
          <button onClick={skip} className="btn-ghost flex-1 justify-center py-3">Lewati</button>
          <button onClick={checkAnswer} disabled={!input.trim()} className="btn-primary flex-1 justify-center py-3">
            Cek →
          </button>
        </div>
      ) : (
        <button onClick={next} className="btn-primary w-full justify-center py-3">
          {idx + 1 >= deck.length ? 'Lihat Hasil →' : 'Lanjut →'}
        </button>
      )}
    </div>
  )
}