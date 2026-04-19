import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HSK_LEVELS } from '../constants/hsklevels'
import { QUIZ_TYPES, QUIZ_TYPE_LABELS, QUIZ_LENGTHS } from '../constants/quiztypes'
import { hskData } from '../data'
import { useQuiz } from '../hooks/usequiz'
import { useProgress } from '../hooks/useprogress'
import { useStreak } from '../hooks/usestreak'
import { useSettings } from '../hooks/usesettings'
import { QuizCard } from '../components/quiz/quizcard'
import { QuizResults } from '../components/quiz/quizresullts'

export function Quiz() {
  const { settings } = useSettings()
  const { logActivity } = useProgress()
  const { recordActivity } = useStreak()

  const [selectedLevel, setSelectedLevel] = useState(settings.preferredLevel || 1)
  const [selectedType,  setSelectedType]  = useState(settings.quizType || QUIZ_TYPES.HANZI_TO_INDO)
  const [selectedCount, setSelectedCount] = useState(settings.quizSize || 20)
  const [answered,      setAnswered]      = useState(null)

  const vocab = hskData[selectedLevel] || []
  const lvl   = HSK_LEVELS.find((l) => l.level === selectedLevel) || HSK_LEVELS[0]

  const {
    started, finished, currentQuestion, total, score,
    current, answers, start, answer, reset,
  } = useQuiz(vocab, selectedType, selectedCount)

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

  // ── Setup screen ──
  if (!started) {
    return (
      <div className="min-h-screen px-4 py-8 max-w-2xl mx-auto animate-fade-in">
        <Link to="/" className="btn-ghost mb-6 inline-flex text-sm px-3 py-1.5">← Kembali</Link>
        <h1 className="font-display text-3xl font-extrabold mb-1">Kuis</h1>
        <p className="text-white/40 text-sm mb-8">Pilih level, tipe soal, dan jumlah soal</p>

        {/* Level */}
        <h2 className="text-white/30 text-[10px] font-semibold tracking-widest uppercase mb-3">Level</h2>
        <div className="grid grid-cols-5 gap-2 mb-7">
          {HSK_LEVELS.map((l) => (
            <button
              key={l.level}
              onClick={() => setSelectedLevel(l.level)}
              className={`card p-3 text-center transition-all ${
                selectedLevel === l.level ? 'border-white/30' : 'hover:border-white/15'
              }`}
            >
              <div className="text-xl mb-1">
                {['🌱','🌿','🌳','🎋','🎍'][l.level - 1]}
              </div>
              <div className="text-xs font-bold" style={{ color: l.warnaHex }}>{l.name}</div>
            </button>
          ))}
        </div>

        {/* Tipe soal */}
        <h2 className="text-white/30 text-[10px] font-semibold tracking-widest uppercase mb-3">Tipe Soal</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-7">
          {Object.entries(QUIZ_TYPE_LABELS).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedType(key)}
              className={`card p-3 text-left text-sm transition-all flex items-center gap-3 ${
                selectedType === key
                  ? 'border-primary-600/50 bg-primary-600/10'
                  : 'hover:border-white/15'
              }`}
            >
              <span className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${
                selectedType === key ? 'border-primary-500 bg-primary-500' : 'border-white/20'
              }`} />
              <span className="text-white/80">{label}</span>
            </button>
          ))}
        </div>

        {/* Jumlah soal */}
        <h2 className="text-white/30 text-[10px] font-semibold tracking-widest uppercase mb-3">Jumlah Soal</h2>
        <div className="flex gap-2 mb-8">
          {QUIZ_LENGTHS.map((n) => (
            <button
              key={n}
              onClick={() => setSelectedCount(n)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                selectedCount === n
                  ? 'bg-primary-600 text-white'
                  : 'card text-white/50 hover:text-white hover:border-white/20'
              }`}
            >
              {n}
            </button>
          ))}
        </div>

        <button
          onClick={start}
          disabled={vocab.length < 4}
          className="btn-primary w-full justify-center py-3 text-base"
        >
          Mulai Kuis →
        </button>

        {vocab.length < 4 && (
          <p className="text-red-400/60 text-xs text-center mt-2">Data level ini belum tersedia.</p>
        )}
      </div>
    )
  }

  // ── Results screen ──
  if (finished) {
    return (
      <div className="min-h-screen px-4 py-8 max-w-2xl mx-auto">
        <QuizResults
          answers={answers}
          total={total}
          type={selectedType}
          onRetry={start}
          onBack={reset}
        />
      </div>
    )
  }

  // ── Quiz screen ──
  return (
    <div className="min-h-screen px-4 py-8 max-w-2xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <button onClick={reset} className="btn-ghost text-sm px-3 py-1.5">← Berhenti</button>
        <div className="flex items-center gap-3">
          <span className="text-white/40 text-sm">{current + 1} / {total}</span>
          <span className="text-green-400 text-sm font-semibold">
            {answers.filter((a) => a.correct).length} ✓
          </span>
        </div>
      </div>

      {/* Progress */}
      <div className="h-1.5 bg-white/5 rounded-full mb-7 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${(current / total) * 100}%`,
            background: 'linear-gradient(90deg, #ed1515, #f59e0b)',
          }}
        />
      </div>

      {/* Tipe label */}
      <p className="text-white/30 text-[10px] uppercase tracking-widest mb-5 text-center">
        {QUIZ_TYPE_LABELS[selectedType]}
      </p>

      <QuizCard
        question={currentQuestion}
        onAnswer={handleAnswer}
        answered={answered}
      />
    </div>
  )
}
