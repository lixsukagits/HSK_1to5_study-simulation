import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HSK_LEVELS } from '../constants/hsklevels'
import { hskData } from '../data'
import { useProgress } from '../hooks/useprogress'
import { useStreak } from '../hooks/usestreak'
import { useSettings } from '../hooks/usesettings'
import { FlashCardDeck } from '../components/vocab/flashcarddeck'

export function FlashCards() {
  const { settings } = useSettings()
  const { progress, markSeen, markMastered, unmarkMastered, logActivity } = useProgress()
  const { recordActivity } = useStreak()

  const [selectedLevel, setSelectedLevel] = useState(settings.preferredLevel || 1)
  const [mode,          setMode]          = useState(null)   // null | 'all' | 'unseen' | 'review'
  const [finished,      setFinished]      = useState(false)
  const [lastStats,     setLastStats]     = useState(null)

  const lvl    = HSK_LEVELS.find((l) => l.level === selectedLevel) || HSK_LEVELS[0]
  const vocab  = hskData[selectedLevel] || []
  const lvlPrg = progress[selectedLevel] || { seen: [], mastered: [] }
  const masteredSet = new Set(lvlPrg.mastered || [])
  const seenSet     = new Set(lvlPrg.seen || [])

  function getDeck(m) {
    if (m === 'unseen')  return vocab.filter((v) => !seenSet.has(v.id))
    if (m === 'review')  return vocab.filter((v) => !masteredSet.has(v.id))
    return vocab
  }

  function handleStart(m) {
    setMode(m)
    setFinished(false)
    setLastStats(null)
  }

  function handleMastered(kata) {
    markMastered(selectedLevel, kata.id)
    markSeen(selectedLevel, kata.id)
    logActivity(1, 1)
    recordActivity()
  }

  function handleSkip(kata) {
    markSeen(selectedLevel, kata.id)
    logActivity(1, 0)
  }

  function handleFinish(stats) {
    setLastStats(stats)
    setFinished(true)
  }

  const deck = getDeck(mode)

  // ── Setup screen ──
  if (!mode || finished) {
    return (
      <div className="min-h-screen px-4 py-8 max-w-2xl mx-auto animate-fade-in">
        <Link to="/" className="btn-ghost mb-6 inline-flex text-sm px-3 py-1.5">← Kembali</Link>
        <h1 className="font-display text-3xl font-extrabold mb-1">Flash Card</h1>
        <p className="text-white/40 text-sm mb-8">Pilih level dan mode belajar</p>

        {/* Selesai stats */}
        {finished && lastStats && (
          <div className="card p-5 mb-8 text-center animate-bounce-in">
            <p className="text-4xl mb-2">🎉</p>
            <p className="font-display text-xl font-bold mb-1">Sesi Selesai!</p>
            <p className="text-white/40 text-sm">
              {lastStats.shown} kartu · {lastStats.mastered} dikuasai
            </p>
          </div>
        )}

        {/* Level picker */}
        <h2 className="text-white/30 text-[10px] font-semibold tracking-widest uppercase mb-3">Level</h2>
        <div className="grid grid-cols-5 gap-2 mb-8">
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
              <div className="text-white/20 text-[10px] mt-0.5">{l.totalKata}</div>
            </button>
          ))}
        </div>

        {/* Mode */}
        <h2 className="text-white/30 text-[10px] font-semibold tracking-widest uppercase mb-3">Mode Belajar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              key: 'all',
              icon: '📚',
              label: 'Semua Kata',
              desc: `${vocab.length} kata`,
            },
            {
              key: 'unseen',
              icon: '✨',
              label: 'Kata Baru',
              desc: `${vocab.filter((v) => !seenSet.has(v.id)).length} belum dilihat`,
            },
            {
              key: 'review',
              icon: '🔄',
              label: 'Ulang',
              desc: `${vocab.filter((v) => !masteredSet.has(v.id)).length} belum hafal`,
            },
          ].map((m) => (
            <button
              key={m.key}
              onClick={() => handleStart(m.key)}
              disabled={getDeck(m.key).length === 0}
              className="card p-4 text-left hover:border-white/20 hover:-translate-y-0.5 transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <div className="text-2xl mb-2">{m.icon}</div>
              <div className="text-white font-semibold text-sm mb-0.5">{m.label}</div>
              <div className="text-white/30 text-xs">{m.desc}</div>
            </button>
          ))}
        </div>
      </div>
    )
  }

  // ── Session screen ──
  return (
    <div className="min-h-screen px-4 py-8 max-w-2xl mx-auto animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => setMode(null)} className="btn-ghost text-sm px-3 py-1.5">
          ← Berhenti
        </button>
        <span className={`badge badge-level-${lvl.level}`}>{lvl.name}</span>
        <span className="text-green-400 text-sm font-semibold">
          ✓ {masteredSet.size}
        </span>
      </div>

      {deck.length === 0 ? (
        <div className="card p-12 text-center text-white/40">
          <p className="text-4xl mb-3">✅</p>
          <p>Semua kata sudah dipelajari!</p>
          <button onClick={() => setMode(null)} className="btn-primary mt-6">Kembali</button>
        </div>
      ) : (
        <FlashCardDeck
          vocab={deck}
          levelColor={lvl.warnaHex}
          showPinyin={settings.showPinyin}
          autoFlip={settings.autoFlip}
          autoFlipDelay={settings.autoFlipDelay}
          masteredSet={masteredSet}
          onMastered={handleMastered}
          onSkip={handleSkip}
          onFinish={handleFinish}
        />
      )}
    </div>
  )
}
