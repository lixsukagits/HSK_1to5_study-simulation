import { AudioButton } from '../ui/audiobutton'

// Kartu soal untuk kuis pilihan-ganda "biasa" (hanzi_to_indo, indo_to_hanzi,
// hanzi_to_pinyin, pinyin_to_hanzi). Dipakai bersama oleh src/pages/quiz.jsx
// supaya tidak ada duplikasi render logic antara halaman kuis & komponen ini.
//
// Props:
// - question   : object soal dari quizgenerator.js ({ soal, jawaban, pilihan, type, kata })
// - onAnswer   : (pilihanTerpilih) => void
// - answered   : null | { selected } — null berarti belum dijawab
// - typeLabel  : label tipe soal buat ditampilkan di section-label (opsional)
// - levelColor : warna hex level HSK buat mewarnai hanzi besar (opsional)
export function QuizCard({ question, onAnswer, answered, typeLabel, levelColor }) {
  if (!question) return null
  const { soal, pilihan, jawaban, type } = question

  return (
    <div>
      {/* Soal */}
      <div className="card p-8 text-center mb-5 relative">
        <div className="absolute top-4 right-4">
          <AudioButton text={soal.nilai} size="md" />
        </div>
        <div className="section-label mb-5">{typeLabel || 'Pilih jawaban yang benar'}</div>
        {soal.tipe === 'hanzi' ? (
          <div>
            <div
              className="font-hanzi font-bold leading-none mb-3"
              style={{ fontSize: 'clamp(56px,12vw,88px)', color: levelColor }}
            >
              {soal.nilai}
            </div>
            {soal.pinyin && answered !== null && (
              <div className="text-white/35 text-base">{soal.pinyin}</div>
            )}
          </div>
        ) : (
          <div className="text-white text-2xl font-semibold">{soal.nilai}</div>
        )}
      </div>

      {/* Pilihan */}
      <div className="grid grid-cols-1 gap-2.5">
        {pilihan.map((pil, i) => {
          let state = 'idle'
          if (answered) {
            if (pil === jawaban) state = 'correct'
            else if (pil === answered.selected && pil !== jawaban) state = 'wrong'
          }

          return (
            <button
              key={i}
              onClick={() => state === 'idle' && onAnswer(pil)}
              disabled={answered !== null}
              className={`quiz-option ${state === 'correct' ? 'correct' : ''} ${state === 'wrong' ? 'wrong' : ''} ${answered !== null ? 'answered' : ''}`}
            >
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-lg bg-white/5 text-white/25 text-xs font-bold mr-3 flex-shrink-0">
                {String.fromCharCode(65 + i)}
              </span>
              <span className={soal.tipe !== 'hanzi' && (type === 'indo_to_hanzi' || type === 'pinyin_to_hanzi') ? 'font-hanzi text-xl' : ''}>
                {pil}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}