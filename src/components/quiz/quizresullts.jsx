import { Link } from 'react-router-dom'
import { QUIZ_TYPE_LABELS } from '../../constants/quiztypes'

export function QuizResults({ answers = [], total, type, onRetry, onBack }) {
  const score  = answers.filter((a) => a.correct).length
  const pct    = total > 0 ? Math.round((score / total) * 100) : 0
  const grade  = pct >= 90 ? '🏆' : pct >= 70 ? '🎯' : pct >= 50 ? '📖' : '💪'
  const msg    = pct >= 90 ? 'Luar biasa!' : pct >= 70 ? 'Bagus sekali!' : pct >= 50 ? 'Terus semangat!' : 'Latihan lebih banyak ya!'

  return (
    <div className="animate-bounce-in">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="text-6xl mb-3">{grade}</div>
        <h2 className="font-display text-3xl font-extrabold mb-1">{msg}</h2>
        <p className="text-white/40 text-sm">{QUIZ_TYPE_LABELS[type] || 'Kuis'}</p>
      </div>

      {/* Score */}
      <div className="card p-6 text-center mb-6">
        <div className="text-7xl font-display font-extrabold text-gradient-red mb-1">{pct}%</div>
        <div className="text-white/40 text-sm">{score} benar dari {total} soal</div>
        <div className="h-2 bg-white/5 rounded-full mt-4 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-1000"
            style={{ width: `${pct}%`, background: 'linear-gradient(90deg, #ed1515, #f59e0b)' }}
          />
        </div>
      </div>

      {/* Review jawaban */}
      <div className="mb-6">
        <h3 className="text-white/30 text-[10px] font-semibold tracking-widest uppercase mb-3">Review Jawaban</h3>
        <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
          {answers.map((a, i) => (
            <div
              key={i}
              className={`card p-3 flex items-center gap-3 text-sm ${
                a.correct ? 'border-green-400/20 bg-green-400/5' : 'border-red-400/20 bg-red-400/5'
              }`}
            >
              <span className={`flex-shrink-0 text-base ${a.correct ? 'text-green-400' : 'text-red-400'}`}>
                {a.correct ? '✓' : '✗'}
              </span>
              <span className="font-hanzi text-xl text-white/80 flex-shrink-0">
                {a.question.kata?.hanzi}
              </span>
              <span className="text-white/40 flex-1 min-w-0 truncate">{a.question.kata?.arti}</span>
              {!a.correct && (
                <span className="text-red-400/60 text-xs flex-shrink-0 truncate max-w-24">{a.selectedJawaban}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Aksi */}
      <div className="flex gap-3 flex-wrap justify-center">
        <button onClick={onRetry} className="btn-primary">🔄 Ulangi</button>
        <button onClick={onBack}  className="btn-ghost">Ganti Pengaturan</button>
        <Link to="/" className="btn-ghost">Beranda</Link>
      </div>
    </div>
  )
}
