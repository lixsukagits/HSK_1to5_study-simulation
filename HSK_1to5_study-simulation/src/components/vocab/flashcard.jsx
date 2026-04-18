import { useState } from 'react'

export function FlashCard({ kata, levelColor, showPinyin = true, onMastered, onSkip, isMastered = false }) {
  const [flipped, setFlipped] = useState(false)

  function handleFlip() { setFlipped((f) => !f) }

  function handleMastered(e) {
    e.stopPropagation()
    onMastered?.(kata)
  }

  function handleSkip(e) {
    e.stopPropagation()
    onSkip?.(kata)
  }

  return (
    <div className="w-full">
      {/* 3D Flip Card */}
      <div
        className="perspective w-full cursor-pointer mb-5"
        style={{ minHeight: 240 }}
        onClick={handleFlip}
      >
        <div
          className="preserve-3d relative w-full transition-transform duration-500"
          style={{ minHeight: 240, transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)', transformStyle: 'preserve-3d' }}
        >
          {/* Front */}
          <div
            className="card backface-hidden absolute inset-0 flex flex-col items-center justify-center p-8 rounded-2xl"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className="text-white/20 text-[10px] uppercase tracking-widest mb-6">
              {flipped ? '' : 'Klik untuk lihat arti'}
            </div>
            <div className="font-hanzi text-7xl font-bold leading-none mb-4" style={{ color: levelColor }}>
              {kata.hanzi}
            </div>
            {showPinyin && (
              <div className="text-white/50 text-lg tracking-wide">{kata.pinyin}</div>
            )}
          </div>

          {/* Back */}
          <div
            className="card backface-hidden absolute inset-0 flex flex-col items-center justify-center p-8 rounded-2xl"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <div className="font-hanzi text-4xl font-bold mb-2" style={{ color: levelColor }}>
              {kata.hanzi}
            </div>
            <div className="text-white/50 text-sm mb-4">{kata.pinyin}</div>
            <div className="text-white text-2xl font-semibold text-center mb-4">{kata.arti}</div>
            {kata.contoh && (
              <div className="mt-2 text-center border-t border-surface-border pt-4 w-full">
                <div className="font-hanzi text-base text-white/70 mb-1">{kata.contoh}</div>
                <div className="text-white/40 text-xs italic">{kata.terjemahan}</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action buttons */}
      {flipped && (
        <div className="grid grid-cols-2 gap-3 animate-slide-up">
          <button
            onClick={handleSkip}
            className="btn-ghost justify-center py-3 text-sm"
          >
            😕 Belum hafal
          </button>
          <button
            onClick={handleMastered}
            className={`justify-center py-3 text-sm rounded-xl font-medium transition-all duration-200 active:scale-95 inline-flex items-center gap-2
              ${isMastered
                ? 'bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500/30'
                : 'bg-primary-600 hover:bg-primary-500 text-white hover:shadow-glow-red'
              }`}
          >
            {isMastered ? '✓ Sudah dikuasai' : '✓ Hafal!'}
          </button>
        </div>
      )}

      {!flipped && (
        <p className="text-center text-white/20 text-xs">Klik kartu untuk lihat jawaban</p>
      )}
    </div>
  )
}
