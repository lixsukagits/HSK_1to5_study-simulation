import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HSK_LEVELS } from '../constants/hsklevels'
import { hskDataComplete, allWordsComplete, topicLabelsByLevel } from '../data'
import { useProgress } from '../hooks/useprogress'
import { useStreak } from '../hooks/usestreak'
import { useSettings } from '../hooks/usesettings'
import { useBookmark } from '../hooks/usebookmark'
import { useSRS } from '../hooks/usesrs'
import { useAuthContext } from '../context/authcontext'
import { FlashCardDeck } from '../components/vocab/flashcarddeck'
import { VocabSearch } from '../components/vocab/vocabsearch'
import { GRADE } from '../utils/srs'
import { initTTS } from '../utils/tts'

initTTS()

const LEVEL_EMOJIS = ['🌱','🌿','🌳','🎋','🎍']

export function FlashCards() {
  const { settings } = useSettings()
  const { userId } = useAuthContext()
  const { progress, markSeen, markMastered, reviewSRS, logActivity } = useProgress(userId)
  const { recordActivity } = useStreak(userId)
  const { bookmarkSet, toggle: toggleBookmark } = useBookmark(userId)
  const { getDue, countDue, refresh: refreshSRS } = useSRS(userId)

  const [selectedLevel, setSelectedLevel] = useState(settings.preferredLevel || 1)
  const [topicFilter,   setTopicFilter]   = useState('all')
  const [mode,          setMode]          = useState(null)   // null | 'all' | 'unseen' | 'review' | 'srs' | 'bookmarks' | 'search'
  const [searchedWord,  setSearchedWord]  = useState(null)
  const [finished,      setFinished]      = useState(false)
  const [lastStats,     setLastStats]     = useState(null)

  const lvl         = HSK_LEVELS.find(l => l.level === selectedLevel) || HSK_LEVELS[0]
  const vocabAll     = hskDataComplete[selectedLevel] || []

  // Label kategori topic untuk level ini — object kosong kalau level belum
  // punya field `topic` di vocabnya (saat ini baru HSK1, pola sama seperti vocab.jsx)
  const topicLabels = topicLabelsByLevel[selectedLevel] || {}
  const hasTopics   = Object.keys(topicLabels).length > 0
  const vocab       = (hasTopics && topicFilter !== 'all')
    ? vocabAll.filter(v => v.topic === topicFilter)
    : vocabAll

  const lvlPrg      = progress[selectedLevel] || { seen: [], mastered: [] }
  const masteredSet = new Set(lvlPrg.mastered || [])
  const seenSet     = new Set(lvlPrg.seen || [])

  // Bookmark words dari semua level (tidak difilter topik — bookmark lintas level)
  const bookmarkWords = allWordsComplete.filter(w => bookmarkSet.has(w.id))

  function selectLevel(level) {
    setSelectedLevel(level)
    setTopicFilter('all')
  }

  function getDeck(m) {
    if (m === 'bookmarks') return bookmarkWords
    if (m === 'unseen')    return vocab.filter(v => !seenSet.has(v.id))
    if (m === 'review')    return vocab.filter(v => !masteredSet.has(v.id))
    if (m === 'srs')       return getDue(vocab)
    if (m === 'search')    return searchedWord ? [searchedWord] : []
    return vocab
  }

  // markMastered() nulis grade SRS GOOD di DALAM updater setProgress() (lihat
  // useprogress.js), yang di-batch React — jadi refreshSRS() tidak bisa dipanggil
  // langsung sesudahnya (bisa baca cache lama sebelum tulisannya commit).
  // markMastered SELALU mengganti reference `progress` (tidak ada bail-out),
  // jadi effect ini dijamin jalan setelah tulisan SRS-nya benar-benar commit.
  useEffect(() => {
    refreshSRS()
  }, [progress])

  function handleMastered(kata) {
    markMastered(kata.level || selectedLevel, kata.id)
    markSeen(kata.level || selectedLevel, kata.id)
    logActivity(1, 1)
    recordActivity()
  }

  function handleSkip(kata) {
    markSeen(kata.level || selectedLevel, kata.id)
    // Catat sebagai "belum hafal" di SRS juga, supaya kata ini dijadwalkan
    // ulang lebih cepat lewat mode Review Terjadwal (bukan cuma dicatat "seen").
    // reviewSRS() nulis storage SECARA SINKRON (bukan lewat updater setState),
    // jadi aman langsung refresh sesudahnya di sini.
    reviewSRS(kata.id, GRADE.WRONG)
    logActivity(1, 0)
    refreshSRS()
  }

  function handleFinish(stats) {
    setLastStats(stats)
    setFinished(true)
  }

  function handleSearchSelect(kata) {
    setSearchedWord(kata)
    setMode('search')
    setFinished(false)
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

        {/* Cari kata tertentu — buka sesi flash card 1 kata langsung */}
        <p className="section-label mb-3">Cari Kata</p>
        <div className="mb-8">
          <VocabSearch
            vocab={vocabAll}
            levelColor={lvl.warnaHex}
            placeholder="Lompat ke kata tertentu..."
            onSelect={handleSearchSelect}
          />
        </div>

        {/* Level picker — sembunyikan jika mode bookmarks */}
        <p className="section-label mb-3">Level</p>
        <div className="grid grid-cols-5 gap-2 mb-8">
          {HSK_LEVELS.map((l, i) => (
            <button key={l.level} onClick={() => selectLevel(l.level)}
              className={`card p-3 text-center transition-all duration-200 ${selectedLevel === l.level ? 'border-white/25 bg-white/5' : 'hover:border-white/15'}`}>
              <div className="text-xl mb-1">{LEVEL_EMOJIS[i]}</div>
              <div className="text-xs font-bold" style={{ color: l.warnaHex }}>{l.name}</div>
              <div className="text-white/20 text-[10px] mt-0.5">{l.totalKata}</div>
            </button>
          ))}
        </div>

        {/* Topic filter — cuma muncul kalau level ini punya field `topic` di vocabnya */}
        {hasTopics && (
          <>
            <p className="section-label mb-3">Topik</p>
            <div className="flex gap-1.5 mb-8 flex-wrap">
              <button onClick={() => setTopicFilter('all')}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  topicFilter === 'all' ? 'bg-white/10 text-white' : 'text-white/25 hover:text-white/50 hover:bg-white/5'
                }`}>
                Semua Topik
              </button>
              {Object.entries(topicLabels).map(([key, label]) => (
                <button key={key} onClick={() => setTopicFilter(key)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                    topicFilter === key ? 'bg-white/10 text-white' : 'text-white/25 hover:text-white/50 hover:bg-white/5'
                  }`}>
                  {label.id}
                </button>
              ))}
            </div>
          </>
        )}

        <p className="section-label mb-3">Mode Belajar</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { key: 'srs',       icon: '🧠', label: 'Review Terjadwal', desc: `${countDue(vocab)} kata jatuh tempo`, highlight: true, highlightColor: 'rgba(96,165,250,0.2)', highlightBg: 'rgba(96,165,250,0.04)' },
            { key: 'all',       icon: '📚', label: 'Semua Kata',   desc: `${vocab.length} kata` },
            { key: 'unseen',    icon: '✨', label: 'Kata Baru',    desc: `${vocab.filter(v => !seenSet.has(v.id)).length} belum dilihat` },
            { key: 'review',    icon: '🔄', label: 'Ulang',        desc: `${vocab.filter(v => !masteredSet.has(v.id)).length} belum hafal` },
            { key: 'bookmarks', icon: '🔖', label: 'Bookmark',     desc: `${bookmarkWords.length} kata tersimpan`, highlight: true, highlightColor: 'rgba(245,158,11,0.2)', highlightBg: 'rgba(245,158,11,0.04)' },
          ].map(m => (
            <button key={m.key} onClick={() => { setMode(m.key); setFinished(false) }}
              disabled={getDeck(m.key).length === 0}
              className="card-hover p-4 text-left disabled:opacity-35 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              style={m.highlight ? { borderColor: m.highlightColor, background: m.highlightBg } : {}}>
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
          {mode === 'bookmarks' ? '🔖 Bookmark' : mode === 'srs' ? '🧠 Review Terjadwal' : lvl.name}
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