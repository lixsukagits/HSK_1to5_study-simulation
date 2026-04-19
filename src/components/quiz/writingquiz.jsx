import { useState } from 'react'

export function WritingQuiz({ question, onAnswer }) {
  const [input, setInput] = useState('')
  const [result, setResult] = useState(null)

  if (!question) return null

  function handleSubmit() {
    const trimmed  = input.trim().toLowerCase()
    const correct  = question.jawaban.toLowerCase()
    const isCorrect = trimmed === correct
    setResult(isCorrect)
    setTimeout(() => {
      onAnswer(input.trim())
      setInput('')
      setResult(null)
    }, 1200)
  }

  return (
    <div>
      <div className="card p-8 text-center mb-5">
        <div className="text-white/30 text-[10px] uppercase tracking-widest mb-5">Ketik jawabannya</div>
        <div className="font-hanzi text-7xl font-bold leading-none mb-3 text-white">
          {question.soal.nilai}
        </div>
      </div>

      <div className="flex gap-3">
        <input
          type="text"
          className="input flex-1"
          placeholder="Ketik jawaban..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && input.trim() && handleSubmit()}
          autoFocus
        />
        <button
          onClick={handleSubmit}
          disabled={!input.trim()}
          className="btn-primary px-6"
        >
          Cek
        </button>
      </div>

      {result !== null && (
        <div className={`mt-3 text-center font-semibold animate-bounce-in ${result ? 'text-green-400' : 'text-red-400'}`}>
          {result ? '✓ Benar!' : `✗ Jawaban: ${question.jawaban}`}
        </div>
      )}
    </div>
  )
}
