export function QuizCard({ question, onAnswer, answered }) {
  if (!question) return null
  const { soal, pilihan } = question

  return (
    <div>
      {/* Soal */}
      <div className="card p-8 text-center mb-5">
        <div className="text-white/30 text-[10px] uppercase tracking-widest mb-5">Pilih jawaban yang benar</div>
        {soal.tipe === 'hanzi' ? (
          <div>
            <div className="font-hanzi text-7xl font-bold leading-none mb-3" style={{ color: answered?.levelColor }}>
              {soal.nilai}
            </div>
            {soal.pinyin && answered !== null && (
              <div className="text-white/40 text-base">{soal.pinyin}</div>
            )}
          </div>
        ) : (
          <div className="text-white text-2xl font-semibold">{soal.nilai}</div>
        )}
      </div>

      {/* Pilihan */}
      <div className="grid grid-cols-1 gap-3">
        {pilihan.map((pil, i) => {
          let state = 'idle'
          if (answered) {
            if (pil === question.jawaban) state = 'correct'
            else if (pil === answered.selected && pil !== question.jawaban) state = 'wrong'
          }

          return (
            <button
              key={i}
              onClick={() => answered === null && onAnswer(pil)}
              disabled={answered !== null}
              className={`card p-4 text-left font-medium transition-all duration-200 text-sm
                ${state === 'correct' ? 'border-green-400/60 bg-green-400/10 text-green-400' :
                  state === 'wrong'   ? 'border-red-400/60 bg-red-400/10 text-red-400' :
                  answered !== null   ? 'opacity-40 cursor-not-allowed' :
                  'hover:border-white/20 hover:bg-white/5 text-white/80 cursor-pointer'
                }`}
            >
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-white/5 text-white/30 text-xs font-bold mr-3 flex-shrink-0">
                {String.fromCharCode(65 + i)}
              </span>
              <span className={soal.tipe === 'teks' && (question.type === 'indo_to_hanzi' || question.type === 'pinyin_to_hanzi') ? 'font-hanzi text-xl' : ''}>
                {pil}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
