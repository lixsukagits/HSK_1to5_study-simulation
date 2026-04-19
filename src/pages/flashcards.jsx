import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HSK_LEVELS } from '../constants/hsklevels'
import { hskData, allWords } from '../data'
import { useProgress } from '../hooks/useprogress'
import { useStreak } from '../hooks/usestreak'
import { useSettings } from '../hooks/usesettings'
import { useBookmark } from '../hooks/usebookmark'
import { FlashCardDeck } from '../components/vocab/flashcarddeck'
import { initTTS } from '../utils/tts'

initTTS()

const LEVEL_EMOJIS = ['🌱','🌿','🌳','🎋','🎍']

export function FlashCards() {
  const { settings } = useSettings()
  const { progress, markSeen, markMastered, logActivity } = useProgress()
  const { recordActivity } = useStreak()
  const { bookmarkSet, toggle: toggleBookmark } = useBookmark()

  const [selectedLevel, setSelectedLevel] = useState(settings.preferredLevel || 1)
  const [mode,          setMode]          = useState(null)   // null | 'all' | 'unseen' | 'review' | 'bookmarks'
  const [finished,      setFinished]      = useState(false)
  const [lastStats,     setLastStats]     = useState(null)

  const lvl         = HSK_LEVELS.find(l => l.level === selectedLevel) || HSK_LEVELS[0]
  const vocab       = hskData[selectedLevel] || []
  const lvlPrg      = progress[selectedLevel] || { seen: [], mastered: [] }
  const masteredSet = new Set(lvlPrg.mastered || [])
  const seenSet     = new Set(lvlPrg.seen || [])

  // Bookmark words dari semua level
  const bookmarkWords = allWords.filter(w => bookmarkSet.has(w.id))

  function getDeck(m) {
    if (m === 'bookmarks') return bookmarkWords
    if (m === 'unseen')    return vocab.filter(v => !seenSet.has(v.id))
    if (m === 'review')    return vocab.filter(v => !masteredSet.has(v.id))
    return vocab
  }

  function handleMastered(kata) {
    markMastered(kata.level || selectedLevel, kata.id)
    markSeen(kata.level || selectedLevel, kata.id)
    logActivity(1, 1)
    recordActivity()
  }

  function handleSkip(kata) {
    markSeen(kata.level || selectedLevel, kata.id)
    logActivity(1, 0)
  }

  function handleFinish(stats) {
    setLastStats(stats)
    setFinished(true)
  }

  const deck = getDeck(mode)

  // ── Setup / Finish ──
  if (!mode || finished) {
    return (
      <div className="min-h-screen px-4 py-8 max-w-2xl mx-auto animate-fade-in">
        <Link to="/" className="btn-ghost mb-6 inline-flex text-sm px-3 py-1.5">← Kembali</Link>
        <h1 className="font-display text-3xl font-extrabold mb-1">Flash Card</h1>
        <p className="text-white/35 text-sm mb-8">Pilih level dan mode belajar</p>

        {finished && lastStats && (
          <div className="card p-6 mb-8 text-center animate-bounce-in"
            style={{ borderColor: 'rgba(74,222,128,0.2)', background: 'rgba(74,222,128,0.04)' }}>
            <p className="text-5xl mb-2">🎉</p>
            <p className="font-display text-xl font-bold mb-1">Sesi Selesai!</p>
            <p className="text-white/40 text-sm">{lastStats.shown} kartu · <span className="text-green-400 font-semibold">{lastStats.mastered} dikuasai</span></p>
          </div>
        )}

        {/* Level picker — sembunyikan jika mode bookmarks */}
        <p className="section-label mb-3">Level</p>
        <div className="grid grid-cols-5 gap-2 mb-8">
          {HSK_LEVELS.map((l, i) => (
            <button key={l.level} onClick={() => setSelectedLevel(l.level)}
              className={`card p-3 text-center transition-all duration-200 ${selectedLevel === l.level ? 'border-white/25 bg-white/5' : 'hover:border-white/15'}`}>
              <div className="text-xl mb-1">{LEVEL_EMOJIS[i]}</div>
              <div className="text-xs font-bold" style={{ color: l.warnaHex }}>{l.name}</div>
              <div className="text-white/20 text-[10px] mt-0.5">{l.totalKata}</div>
            </button>
          ))}
        </div>

        <p className="section-label mb-3">Mode Belajar</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { key: 'all',       icon: '📚', label: 'Semua Kata',   desc: `${vocab.length} kata` },
            { key: 'unseen',    icon: '✨', label: 'Kata Baru',    desc: `${vocab.filter(v => !seenSet.has(v.id)).length} belum dilihat` },
            { key: 'review',    icon: '🔄', label: 'Ulang',        desc: `${vocab.filter(v => !masteredSet.has(v.id)).length} belum hafal` },
            { key: 'bookmarks', icon: '🔖', label: 'Bookmark',     desc: `${bookmarkWords.length} kata tersimpan`, highlight: true },
          ].map(m => (
            <button key={m.key} onClick={() => { setMode(m.key); setFinished(false) }}
              disabled={getDeck(m.key).length === 0}
              className="card-hover p-4 text-left disabled:opacity-35 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              style={m.highlight ? { borderColor: 'rgba(245,158,11,0.2)', background: 'rgba(245,158,11,0.04)' } : {}}>
              <div className="text-2xl mb-2">{m.icon}</div>
              <div className="text-white font-semibold text-sm mb-0.5">{m.label}</div>
              <div className="text-white/30 text-xs">{m.desc}</div>
            </button>
          ))}
        </div>
      </div>
    )
  }

  // ── Session ──
  return (
    <div className="min-h-screen px-4 py-8 max-w-2xl mx-auto animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <button onClick={() => setMode(null)} className="btn-ghost text-sm px-3 py-1.5">← Berhenti</button>
        <span className={mode === 'bookmarks' ? 'badge' : `badge badge-level-${lvl.level}`}
          style={mode === 'bookmarks' ? { background:'rgba(245,158,11,0.12)', color:'#fbbf24', border:'1px solid rgba(245,158,11,0.25)' } : {}}>
          {mode === 'bookmarks' ? '🔖 Bookmark' : lvl.name}
        </span>
        <span className="text-green-400 text-sm font-bold">✓ {masteredSet.size}</span>
      </div>

      {deck.length === 0 ? (
        <div className="card p-16 text-center">
          <p className="text-5xl mb-4">✅</p>
          <p className="text-white/60 font-medium mb-6">Semua kata sudah dipelajari!</p>
          <button onClick={() => setMode(null)} className="btn-primary">Kembali</button>
        </div>
      ) : (
        <FlashCardDeck
          vocab={deck}
          levelColor={mode === 'bookmarks' ? '#fbbf24' : lvl.warnaHex}
          showPinyin={settings.showPinyin}
          autoFlip={settings.autoFlip}
          autoFlipDelay={settings.autoFlipDelay}
          masteredSet={masteredSet}
          bookmarkSet={bookmarkSet}
          onMastered={handleMastered}
          onSkip={handleSkip}
          onBookmark={toggleBookmark}
          onFinish={handleFinish}
        />
      )}
    </div>
  )
}