import { useState, useEffect } from 'react'
import { FlashCard } from './flashcard'
import { shuffle } from '../../utils/quizgenerator'

export function FlashCardDeck({
  vocab = [],
  levelColor,
  showPinyin = true,
  autoFlip = false,
  autoFlipDelay = 3,
  masteredSet = new Set(),
  onMastered,
  onSkip,
  onFinish,
}) {
  const [deck,  setDeck]  = useState(() => shuffle(vocab))
  const [index, setIndex] = useState(0)
  const [sessionMastered, setSessionMastered] = useState(0)
  const [sessionShown,    setSessionShown]    = useState(0)

  const current = deck[index]

  useEffect(() => {
    setDeck(shuffle(vocab))
    setIndex(0)
    setSessionMastered(0)
    setSessionShown(0)
  }, [vocab])

  function handleMastered(kata) {
    onMastered?.(kata)
    setSessionMastered((n) => n + 1)
    advance()
  }

  function handleSkip(kata) {
    onSkip?.(kata)
    advance()
  }

  function advance() {
    setSessionShown((n) => n + 1)
    if (index + 1 >= deck.length) {
      onFinish?.({ shown: sessionShown + 1, mastered: sessionMastered })
    } else {
      setIndex((i) => i + 1)
    }
  }

  if (!current) return null

  return (
    <div>
      {/* Progress */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-white/30 text-sm">{index + 1} / {deck.length}</span>
        <span className="text-green-400 text-sm font-semibold">✓ {sessionMastered}</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full mb-6 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${(index / deck.length) * 100}%`,
            background: 'linear-gradient(90deg, #ed1515, #f59e0b)',
          }}
        />
      </div>

      <FlashCard
        kata={current}
        levelColor={levelColor}
        showPinyin={showPinyin}
        isMastered={masteredSet.has(current.id)}
        onMastered={handleMastered}
        onSkip={handleSkip}
      />
    </div>
  )
}
