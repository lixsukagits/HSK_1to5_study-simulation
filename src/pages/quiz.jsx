import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HSK_LEVELS } from '../constants/hsklevels'
import { QUIZ_TYPES, QUIZ_TYPE_LABELS, QUIZ_LENGTHS } from '../constants/quiztypes'
import { hskData } from '../data'
import { useQuiz } from '../hooks/usequiz'
import { useProgress } from '../hooks/useprogress'
import { useStreak } from '../hooks/usestreak'
import { useSettings } from '../hooks/usesettings'
import { storage, STORAGE_KEYS } from '../utils/storage'
import { AudioButton } from '../components/ui/audiobutton'
import { XP_REWARDS } from '../utils/achievements'
import { initTTS } from '../utils/tts'

initTTS()

function _addXP(amount) {
  const xp = storage.get(STORAGE_KEYS.XP, { total: 0 })
  storage.set(STORAGE_KEYS.XP, { ...xp, total: (xp.total || 0) + amount })
}

function _saveQuizHistory(entry) {
  const hist = storage.get(STORAGE_KEYS.QUIZ_HISTORY, [])
  storage.set(STORAGE_KEYS.QUIZ_HISTORY, [entry, ...hist].slice(0, 100))
}

const LEVEL_EMOJIS = ['🌱','🌿','🌳','🎋','🎍']

export function Quiz() {
  const { settings }   = useSettings()
  const { logActivity } = useProgress()
  const { recordActivity } = useStreak()

  const [selectedLevel, setSelectedLevel] = useState(settings.preferredLevel || 1)
  const [selectedType,  setSelectedType]  = useState(settings.quizType || QUIZ_TYPES.HANZI_TO_INDO)
  const [selectedCount, setSelectedCount] = useState(settings.quizSize || 20)
  const [answered,      setAnswered]      = useState(null)

  const vocab = hskData[selectedLevel] || []
  const lvl   = HSK_LEVELS.find(l => l.level === selectedLevel) || HSK_LEVELS[0]

  const { started, finished, currentQuestion, total, score, current, answers, start, answer, reset } =
    useQuiz(vocab, selectedType, selectedCount)

  function handleStart() {
    start()
  }

  function handleAnswer(selected) {
    if (answered !== null) return
    setAnswered({ selected })
    const correct = selected === currentQuestion.jawaban
    setTimeout(() => {
      answer(selected)
      setAnswered(null)
      logActivity(1, correct ? 1 : 0)
      if (correct) recordActivity()
    }, 900)
  }

  function handleFinished() {
    const pct = Math.round((score / total) * 100)
    // Bonus XP untuk kuis sempurna
    if (pct === 100 && total > 0) _addXP(XP_REWARDS.QUIZ_PERFECT)
    // Simpan ke quiz history
    _saveQuizHistory({ score, total, type: selectedType, level: selectedLevel, pct, date: Date.now() })
  }

  // ── Setup ──
  if (!started) {
    return (
      <div className="min-h-screen px-4 py-8 max-w-2xl mx-auto animate-fade-in">
        <Link to="/" className="btn-ghost mb-6 inline-flex text-sm px-3 py-1.5">← Kembali</Link>
        <h1 className="font-display text-3xl font-extrabold mb-1">Kuis</h1>
        <p className="text-white/35 text-sm mb-8">Pilih level, tipe soal, dan jumlah soal</p>

        <p className="section-label mb-3">Level</p>
        <div className="grid grid-cols-5 gap-2 mb-7">
          {HSK_LEVELS.map((l, i) => (
            <button key={l.level} onClick={() => setSelectedLevel(l.level)}
              className={`card p-3 text-center transition-all duration-200 ${selectedLevel === l.level ? 'border-white/25 bg-white/5' : 'hover:border-white/15'}`}>
              <div className="text-xl mb-1">{LEVEL_EMOJIS[i]}</div>
              <div className="text-xs font-bold" style={{ color: l.warnaHex }}>{l.name}</div>
            </button>
          ))}
        </div>

        <p className="section-label mb-3">Tipe Soal</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-7">
          {Object.entries(QUIZ_TYPE_LABELS).map(([key, label]) => (
            <button key={key} onClick={() => setSelectedType(key)}
              className={`card p-3.5 text-left text-sm flex items-center gap-3 transition-all duration-200 ${selectedType === key ? 'border-primary-600/50 bg-primary-600/8' : 'hover:border-white/15'}`}>
              <span className={`w-4 h-4 rounded-full border-2 flex-shrink-0 transition-all ${selectedType === key ? 'border-primary-500 bg-primary-500' : 'border-white/20'}`} />
              <span className="text-white/70">{label}</span>
            </button>
          ))}
        </div>

        <p className="section-label mb-3">Jumlah Soal</p>
        <div className="flex gap-2 mb-8">
          {QUIZ_LENGTHS.map(n => (
            <button key={n} onClick={() => setSelectedCount(n)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${selectedCount === n ? 'bg-primary-600 text-white' : 'card text-white/40 hover:text-white hover:border-white/20'}`}>
              {n}
            </button>
          ))}
        </div>

        <button onClick={handleStart} disabled={vocab.length < 4} className="btn-primary w-full py-3 text-base">
          Mulai Kuis →
        </button>
      </div>
    )
  }

  // ── Results ──
  if (finished) {
    // Save on first render of results
    const pct   = Math.round((score / total) * 100)
    const grade = pct >= 90 ? '🏆' : pct >= 70 ? '🎯' : pct >= 50 ? '📖' : '💪'
    const msg   = pct >= 90 ? 'Luar Biasa!' : pct >= 70 ? 'Bagus Sekali!' : pct >= 50 ? 'Terus Semangat!' : 'Ayo Latihan Lagi!'

    return (
      <div className="min-h-screen px-4 py-8 max-w-2xl mx-auto animate-bounce-in">
        <div className="text-center mb-8">
          <div className="text-6xl mb-3">{grade}</div>
          <h2 className="font-display text-3xl font-extrabold mb-1">{msg}</h2>
          <p className="text-white/35 text-sm">{QUIZ_TYPE_LABELS[selectedType]}</p>
          {pct === 100 && <p className="text-gold-400 text-sm mt-1 font-semibold">+{XP_REWARDS.QUIZ_PERFECT} XP bonus sempurna! 🎉</p>}
        </div>

        <div className="card p-6 text-center mb-6">
          <div className="font-display text-7xl font-extrabold text-gradient-red mb-1">{pct}%</div>
          <div className="text-white/35 text-sm">{score} benar dari {total} soal</div>
          <div className="progress-track mt-4">
            <div className="progress-fill transition-all duration-1000" style={{ width:`${pct}%` }} />
          </div>
        </div>

        <div className="mb-6">
          <p className="section-label mb-3">Review Jawaban</p>
          <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
            {answers.map((a, i) => (
              <div key={i} className={`card p-3 flex items-center gap-3 text-sm ${a.correct ? 'border-green-400/20 bg-green-400/5' : 'border-red-400/20 bg-red-400/5'}`}>
                <span className={`text-sm font-bold ${a.correct ? 'text-green-400' : 'text-red-400'}`}>{a.correct ? '✓' : '✗'}</span>
                <span className="font-hanzi text-xl text-white/80">{a.question.kata?.hanzi}</span>
                <span className="text-white/35 flex-1 truncate text-xs">{a.question.kata?.arti}</span>
                <AudioButton text={a.question.kata?.hanzi || ''} size="sm" ghost />
                {!a.correct && <span className="text-red-400/50 text-xs truncate max-w-20">{a.selectedJawaban}</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-3 flex-wrap justify-center">
          <button onClick={() => { handleFinished(); start() }} className="btn-primary">🔄 Ulangi</button>
          <button onClick={() => { handleFinished(); reset() }} className="btn-ghost">Ganti Pengaturan</button>
          <Link to="/" className="btn-ghost">Beranda</Link>
        </div>
      </div>
    )
  }

  // ── Active Quiz ──
  const q = currentQuestion
  if (!q) return null

  return (
    <div className="min-h-screen px-4 py-8 max-w-2xl mx-auto animate-fade-in">
      <div className="flex items-center justify-between mb-5">
        <button onClick={reset} className="btn-ghost text-sm px-3 py-1.5">← Berhenti</button>
        <div className="flex items-center gap-3">
          <span className="text-white/35 text-sm">{current + 1} / {total}</span>
          <span className="text-green-400 text-sm font-bold">{answers.filter(a => a.correct).length} ✓</span>
        </div>
      </div>

      <div className="h-1 bg-white/5 rounded-full mb-8 overflow-hidden">
        <div className="h-full rounded-full transition-all duration-500"
          style={{ width:`${(current/total)*100}%`, background:'linear-gradient(90deg,#ed1515,#f59e0b)' }} />
      </div>

      {/* Question */}
      <div className="card p-8 text-center mb-5 relative">
        <div className="absolute top-4 right-4">
          <AudioButton text={q.soal.nilai} size="md" />
        </div>
        <p className="section-label mb-5">{QUIZ_TYPE_LABELS[selectedType]}</p>
        {q.soal.tipe === 'hanzi' ? (
          <div>
            <div className="font-hanzi font-bold leading-none mb-3"
              style={{ fontSize:'clamp(56px,12vw,88px)', color: lvl.warnaHex }}>
              {q.soal.nilai}
            </div>
            {q.soal.pinyin && answered !== null && (
              <div className="text-white/35 text-base">{q.soal.pinyin}</div>
            )}
          </div>
        ) : (
          <div className="text-white text-2xl font-semibold">{q.soal.nilai}</div>
        )}
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 gap-2.5">
        {q.pilihan.map((pil, i) => {
          let state = 'idle'
          if (answered) {
            if (pil === q.jawaban) state = 'correct'
            else if (pil === answered.selected) state = 'wrong'
          }
          return (
            <button key={i} onClick={() => state === 'idle' && handleAnswer(pil)}
              className={`quiz-option ${state === 'correct' ? 'correct' : ''} ${state === 'wrong' ? 'wrong' : ''} ${answered !== null ? 'answered' : ''}`}>
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-lg bg-white/5 text-white/25 text-xs font-bold mr-3 flex-shrink-0">
                {String.fromCharCode(65+i)}
              </span>
              <span className={q.soal.tipe !== 'hanzi' && (selectedType === 'indo_to_hanzi' || selectedType === 'pinyin_to_hanzi') ? 'font-hanzi text-xl' : ''}>
                {pil}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}