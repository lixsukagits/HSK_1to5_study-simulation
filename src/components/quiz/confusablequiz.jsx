// Komponen kuis "Kata Ketuker" — soal berbasis grup kata yang gampang tertukar
// (src/data/hsk1confusables.js). Prompt = catatan pembeda salah satu kata,
// pilihan = hanzi-hanzi dari grup yang sama (+ distraktor kalau perlu).
// Setelah dijawab, tampilkan penjelasan & contoh kontras dari grupnya.
export function ConfusableQuiz({ question, onAnswer, answered }) {
  if (!question) return null
  const { soal, pilihan, jawaban, groupTitle, explanation, examples } = question

  return (
    <div>
      {/* Soal */}
      <div className="card p-8 text-center mb-5">
        <div className="text-white/30 text-[10px] uppercase tracking-widest mb-2">
          Kata Ketuker · Pilih hanzi yang tepat
        </div>
        {groupTitle && (
          <div className="text-white/25 text-[11px] mb-4">{groupTitle}</div>
        )}
        <div className="text-white text-lg font-medium leading-snug">
          {soal.nilai}
        </div>
      </div>

      {/* Pilihan */}
      <div className="grid grid-cols-2 gap-3">
        {pilihan.map((pil, i) => {
          let state = 'idle'
          if (answered) {
            if (pil === jawaban) state = 'correct'
            else if (pil === answered.selected && pil !== jawaban) state = 'wrong'
          }

          return (
            <button
              key={i}
              onClick={() => answered === null && onAnswer(pil)}
              disabled={answered !== null}
              className={`quiz-option p-5 text-center font-hanzi text-3xl font-bold
                ${state === 'correct' ? 'correct' : ''} ${state === 'wrong' ? 'wrong' : ''} ${answered !== null ? 'answered' : ''}`}
            >
              {pil}
            </button>
          )
        })}
      </div>

      {/* Penjelasan (muncul setelah dijawab) */}
      {answered !== null && explanation && (
        <div className="card p-4 text-sm text-white/60 mt-4 animate-fade-in">
          <p className="text-white/30 text-[10px] uppercase tracking-widest mb-2">Penjelasan</p>
          <p className="mb-3 leading-relaxed">{explanation}</p>
          {examples?.length > 0 && (
            <div className="space-y-2">
              {examples.map((ex, i) => (
                <div key={i}>
                  <span className="font-hanzi text-white/80 text-base">{ex.zh}</span>
                  <span className="text-white/30 text-xs"> · {ex.pinyin}</span>
                  <div className="text-white/40 text-xs mt-0.5">{ex.id}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}