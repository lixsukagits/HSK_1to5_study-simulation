import { useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { HSK_LEVELS } from '../constants/hsklevels'
import { hskData } from '../data'
import { useProgress } from '../hooks/useprogress'
import { useStreak } from '../hooks/usestreak'
import { useBookmark } from '../hooks/usebookmark'
import { AudioButton } from '../components/ui/audiobutton'
import { BookmarkButton } from '../components/ui/bookmarkbutton'
import { initTTS } from '../utils/tts'

// Init TTS saat modul di-load
initTTS()

const PAGE_SIZE = 30

export function Vocab() {
  const { level } = useParams()
  const lvl   = HSK_LEVELS.find(l => l.level === Number(level)) || HSK_LEVELS[0]
  const vocab = hskData[lvl.level] || []

  const { progress, markSeen, markMastered, unmarkMastered, logActivity } = useProgress()
  const { recordActivity } = useStreak()
  const { bookmarkSet, toggle: toggleBookmark } = useBookmark()

  const lvlPrg      = progress[lvl.level] || { seen: [], mastered: [] }
  const masteredSet = new Set(lvlPrg.mastered || [])
  const seenSet     = new Set(lvlPrg.seen || [])

  const [search,   setSearch]   = useState('')
  const [filter,   setFilter]   = useState('all')
  const [page,     setPage]     = useState(1)
  const [expanded, setExpanded] = useState(null)

  const filtered = useMemo(() => {
    let list = vocab
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(v =>
        v.hanzi?.includes(q) || v.pinyin?.toLowerCase().includes(q) || v.arti?.toLowerCase().includes(q)
      )
    }
    if (filter === 'mastered')  list = list.filter(v => masteredSet.has(v.id))
    if (filter === 'unseen')    list = list.filter(v => !seenSet.has(v.id))
    if (filter === 'bookmarked')list = list.filter(v => bookmarkSet.has(v.id))
    return list
  }, [vocab, search, filter, lvlPrg, bookmarkSet])

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const displayed  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  function toggleMastered(kata) {
    if (masteredSet.has(kata.id)) {
      unmarkMastered(lvl.level, kata.id)
    } else {
      markMastered(lvl.level, kata.id)
      logActivity(1, 1)
      recordActivity()
    }
    markSeen(lvl.level, kata.id)
  }

  const pct = Math.min(100, Math.round((masteredSet.size / lvl.totalKata) * 100))

  return (
    <div className="min-h-screen px-4 py-8 max-w-4xl mx-auto animate-fade-in">
      <Link to="/" className="btn-ghost mb-6 inline-flex text-sm px-3 py-1.5">← Kembali</Link>

      {/* Header */}
      <div className="flex items-start gap-4 mb-6 flex-wrap">
        <div className="flex-1 min-w-0">
          <span className={`badge badge-level-${lvl.level} mb-2`}>{lvl.name}</span>
          <h1 className="font-display text-3xl font-extrabold mt-1 mb-1">Kosakata {lvl.name}</h1>
          <p className="text-white/35 text-sm">{lvl.keterangan}</p>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="font-display text-3xl font-extrabold" style={{ color: lvl.warnaHex }}>{pct}%</div>
          <div className="text-white/30 text-xs">{masteredSet.size} / {lvl.totalKata} dikuasai</div>
        </div>
      </div>

      {/* Progress */}
      <div className="card p-4 mb-6">
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${lvl.warnaHex}60, ${lvl.warnaHex})` }} />
        </div>
      </div>

      {/* Level tabs */}
      <div className="flex gap-1.5 mb-6 flex-wrap">
        {HSK_LEVELS.map(l => (
          <Link key={l.level} to={`/vocab/${l.level}`}
            onClick={() => { setPage(1); setSearch(''); setFilter('all') }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 ${
              l.level === lvl.level ? `badge badge-level-${l.level}` : 'text-white/25 hover:text-white/60 hover:bg-white/5'
            }`}
          >
            {l.name}
          </Link>
        ))}
      </div>

      {/* Search + filter */}
      <div className="flex gap-2 mb-5 flex-wrap">
        <div className="relative flex-1 min-w-[160px]">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 text-xs pointer-events-none">🔍</span>
          <input className="input w-full pl-8 text-sm" placeholder="Cari hanzi, pinyin, arti..."
            value={search} onChange={e => { setSearch(e.target.value); setPage(1) }} />
          {search && <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60 text-lg">×</button>}
        </div>
        <div className="flex gap-1 flex-wrap">
          {[
            { key: 'all',        label: 'Semua' },
            { key: 'mastered',   label: '✓ Hafal' },
            { key: 'unseen',     label: '★ Baru' },
            { key: 'bookmarked', label: '🔖 Saved' },
          ].map(f => (
            <button key={f.key} onClick={() => { setFilter(f.key); setPage(1) }}
              className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                filter === f.key ? 'bg-white/10 text-white' : 'text-white/25 hover:text-white/60 hover:bg-white/5'
              }`}>
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <p className="text-white/20 text-xs mb-4">{filtered.length} kata{search ? ` · "${search}"` : ''}</p>

      {/* Grid */}
      {displayed.length === 0 ? (
        <div className="card p-16 text-center text-white/25">
          <p className="text-5xl mb-4">🔍</p>
          <p className="font-medium">Tidak ada kata yang cocok</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
          {displayed.map(v => {
            const isMastered  = masteredSet.has(v.id)
            const isSeen      = seenSet.has(v.id)
            const isExpanded  = expanded === v.id
            const isBookmarked = bookmarkSet.has(v.id)

            return (
              <div key={v.id}
                className={`vocab-card ${isMastered ? 'mastered' : ''} ${isExpanded ? 'sm:col-span-2' : ''}`}
              >
                <div className="p-4 flex items-center gap-3"
                  onClick={() => { setExpanded(isExpanded ? null : v.id); markSeen(lvl.level, v.id) }}
                >
                  {/* Hanzi */}
                  <div className="flex-shrink-0 w-12 text-center">
                    <div className="font-hanzi text-[28px] font-bold leading-none" style={{ color: lvl.warnaHex }}>{v.hanzi}</div>
                    {!isSeen && <div className="text-[8px] text-white/15 uppercase tracking-wider mt-0.5">baru</div>}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="text-white/35 text-xs">{v.pinyin}</div>
                    <div className="text-white/75 text-sm font-medium truncate">{v.arti}</div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <AudioButton text={v.hanzi} size="sm" ghost />
                    <BookmarkButton wordId={v.id} isBookmarked={isBookmarked} onToggle={toggleBookmark} size="sm" />
                    <button onClick={e => { e.stopPropagation(); toggleMastered(v) }}
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                        isMastered ? 'bg-green-400/20 text-green-400 border border-green-400/30'
                          : 'text-white/15 border border-white/10 hover:text-white/50 hover:border-white/25'
                      }`}>
                      {isMastered ? '✓' : '○'}
                    </button>
                  </div>
                </div>

                {isExpanded && v.contoh && (
                  <div className="px-4 pb-4 border-t border-surface-border pt-3">
                    <div className="flex items-start gap-2">
                      <div className="flex-1">
                        <p className="font-hanzi text-base text-white/60">{v.contoh}</p>
                        <p className="text-white/35 text-xs italic mt-1">{v.terjemahan}</p>
                      </div>
                      <AudioButton text={v.contoh} size="sm" ghost />
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3">
          <button disabled={page === 1} onClick={() => setPage(p => p - 1)} className="btn-ghost px-4 py-2 text-sm disabled:opacity-25">←</button>
          <span className="text-white/35 text-sm font-medium">{page} / {totalPages}</span>
          <button disabled={page === totalPages} onClick={() => setPage(p => p + 1)} className="btn-ghost px-4 py-2 text-sm disabled:opacity-25">→</button>
        </div>
      )}
    </div>
  )
}