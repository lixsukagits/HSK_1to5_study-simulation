import { useState } from 'react'
import { AudioButton } from '../ui/audiobutton'
import { BookmarkButton } from '../ui/bookmarkbutton'

export function FlashCard({ kata, levelColor, showPinyin = true, onMastered, onSkip, isMastered = false, isBookmarked = false, onBookmark }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="w-full">
      {/* 3D Flip card */}
      <div className="perspective w-full cursor-pointer mb-5 select-none" style={{ minHeight: 260 }}
        onClick={() => setFlipped(f => !f)}>
        <div className="preserve-3d relative w-full transition-transform duration-500"
          style={{ minHeight: 260, transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>

          {/* Front */}
          <div className="backface-hidden card absolute inset-0 flex flex-col items-center justify-center p-8 rounded-2xl" style={{ minHeight: 260 }}>
            <p className="text-white/20 text-[10px] uppercase tracking-widest mb-6">
              {showPinyin ? 'Klik untuk lihat arti' : 'Klik untuk balik'}
            </p>
            <div className="font-hanzi font-bold leading-none mb-4"
              style={{ fontSize: 'clamp(64px,14vw,96px)', color: levelColor }}>
              {kata.hanzi}
            </div>
            {showPinyin && <div className="text-white/40 text-lg tracking-wide">{kata.pinyin}</div>}

            {/* Audio on front */}
            <div className="absolute top-4 right-4" onClick={e => e.stopPropagation()}>
              <AudioButton text={kata.hanzi} size="md" />
            </div>
          </div>

          {/* Back */}
          <div className="backface-hidden card absolute inset-0 flex flex-col items-center justify-center p-8 rounded-2xl"
            style={{ minHeight: 260, transform: 'rotateY(180deg)' }}>
            <div className="font-hanzi font-bold leading-none mb-2"
              style={{ fontSize: 'clamp(36px,8vw,52px)', color: levelColor }}>
              {kata.hanzi}
            </div>
            <div className="text-white/40 text-sm mb-3">{kata.pinyin}</div>
            <div className="text-white text-xl font-semibold text-center leading-relaxed">{kata.arti}</div>
            {kata.contoh && (
              <div className="mt-5 text-center border-t border-surface-border pt-4 w-full">
                <div className="font-hanzi text-sm text-white/55 mb-1">{kata.contoh}</div>
                <div className="text-white/30 text-xs italic">{kata.terjemahan}</div>
              </div>
            )}

            {/* Bookmark on back */}
            {onBookmark && (
              <div className="absolute top-4 right-4" onClick={e => e.stopPropagation()}>
                <BookmarkButton wordId={kata.id} isBookmarked={isBookmarked} onToggle={onBookmark} size="md" />
              </div>
            )}
            {/* Audio sentence on back */}
            <div className="absolute top-4 left-4" onClick={e => e.stopPropagation()}>
              <AudioButton text={kata.contoh || kata.hanzi} size="md" />
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      {flipped ? (
        <div className="grid grid-cols-2 gap-3 animate-slide-up">
          <button onClick={() => onSkip?.(kata)} className="btn-ghost justify-center py-3">😕 Belum hafal</button>
          <button onClick={() => onMastered?.(kata)}
            className={`justify-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-[0.97] inline-flex items-center gap-2 ${
              isMastered ? 'bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500/30' : 'btn-primary'
            }`}>
            ✓ {isMastered ? 'Sudah dikuasai' : 'Hafal!'}
          </button>
        </div>
      ) : (
        <p className="text-center text-white/20 text-xs">Klik kartu untuk melihat jawaban</p>
      )}
    </div>
  )
}