import { useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { HSK_LEVELS } from '../constants/hsklevels'
import { hskData } from '../data'
import { useProgress } from '../hooks/useprogress'
import { useStreak } from '../hooks/usestreak'
import { VocabSearch } from '../components/vocab/vocabsearch'
import { ProgressBar } from '../components/progress/progressbar'

const PAGE_SIZE = 30

export function Vocab() {
  const { level } = useParams()
  const lvl   = HSK_LEVELS.find((l) => l.level === Number(level)) || HSK_LEVELS[0]
  const vocab = hskData[lvl.level] || []

  const { progress, markSeen, markMastered, unmarkMastered, logActivity } = useProgress()
  const { recordActivity } = useStreak()

  const lvlPrg     = progress[lvl.level] || { seen: [], mastered: [] }
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
      list = list.filter(
        (v) =>
          v.hanzi?.includes(q) ||
          v.pinyin?.toLowerCase().includes(q) ||
          v.arti?.toLowerCase().includes(q)
      )
    }
    if (filter === 'mastered') list = list.filter((v) => masteredSet.has(v.id))
    if (filter === 'unseen')   list = list.filter((v) => !seenSet.has(v.id))
    return list
  }, [vocab, search, filter, lvlPrg])

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

  return (
    <div className="min-h-screen px-4 py-8 max-w-4xl mx-auto animate-fade-in">

      {/* Header */}
      <Link to="/" className="btn-ghost mb-6 inline-flex text-sm px-3 py-1.5">← Kembali</Link>

      <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
        <div>
          <span className={`badge badge-level-${lvl.level} text-xs mb-2`}>{lvl.name}</span>
          <h1 className="font-display text-3xl font-extrabold mt-1">Kosakata {lvl.name}</h1>
          <p className="text-white/40 text-sm mt-1">{lvl.keterangan}</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-display font-extrabold" style={{ color: lvl.warnaHex }}>
            {masteredSet.size} / {lvl.totalKata}
          </div>
          <div className="text-white/30 text-xs">dikuasai</div>
        </div>
      </div>

      {/* Progress bar level */}
      <div className="card p-4 mb-6">
        <ProgressBar
          value={masteredSet.size}
          max={lvl.totalKata}
          color={lvl.warnaHex}
        />
      </div>

      {/* Level switcher */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {HSK_LEVELS.map((l) => (
          <Link
            key={l.level}
            to={`/vocab/${l.level}`}
            onClick={() => { setPage(1); setSearch(''); setFilter('all') }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              l.level === lvl.level
                ? `badge badge-level-${l.level}`
                : 'text-white/30 hover:text-white/60 hover:bg-white/5'
            }`}
          >
            {l.name}
          </Link>
        ))}
      </div>

      {/* Search + filter */}
      <div className="flex gap-3 mb-4 flex-wrap">
        <div className="flex-1 min-w-[180px]">
          <VocabSearch value={search} onChange={(v) => { setSearch(v); setPage(1) }} />
        </div>
        <div className="flex gap-1">
          {[
            { key: 'all',      label: 'Semua' },
            { key: 'mastered', label: '✓ Hafal' },
            { key: 'unseen',   label: '★ Baru' },
          ].map((f) => (
            <button
              key={f.key}
              onClick={() => { setFilter(f.key); setPage(1) }}
              className={`px-3 py-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                filter === f.key
                  ? 'bg-white/10 text-white'
                  : 'text-white/30 hover:text-white/60 hover:bg-white/5'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <p className="text-white/20 text-xs mb-4">
        {filtered.length} kata{search ? ` untuk "${search}"` : ''}
      </p>

      {/* Vocab list */}
      {displayed.length === 0 ? (
        <div className="card p-12 text-center text-white/30">
          <p className="text-4xl mb-3">🔍</p>
          <p>Tidak ada kata yang cocok.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
          {displayed.map((v) => {
            const isMastered  = masteredSet.has(v.id)
            const isSeen      = seenSet.has(v.id)
            const isExpanded  = expanded === v.id

            return (
              <div
                key={v.id}
                className={`card transition-all duration-150 ${
                  isMastered ? 'border-green-400/20 bg-green-400/5' : ''
                } ${isExpanded ? 'sm:col-span-2' : ''}`}
              >
                {/* Main row */}
                <div
                  className="p-4 flex items-center gap-4 cursor-pointer"
                  onClick={() => {
                    setExpanded(isExpanded ? null : v.id)
                    markSeen(lvl.level, v.id)
                  }}
                >
                  <div className="flex-shrink-0 text-center w-12">
                    <div className="font-hanzi text-3xl font-bold leading-none" style={{ color: lvl.warnaHex }}>
                      {v.hanzi}
                    </div>
                    {!isSeen && (
                      <div className="text-[8px] text-white/20 uppercase tracking-widest mt-0.5">baru</div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white/40 text-xs">{v.pinyin}</div>
                    <div className="text-white/80 text-sm font-medium truncate">{v.arti}</div>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleMastered(v) }}
                    title={isMastered ? 'Hapus dari hafalan' : 'Tandai hafal'}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all ${
                      isMastered
                        ? 'bg-green-400/20 text-green-400'
                        : 'bg-white/5 text-white/20 hover:text-white/50 hover:bg-white/10'
                    }`}
                  >
                    {isMastered ? '✓' : '○'}
                  </button>
                </div>

                {/* Expanded: contoh kalimat */}
                {isExpanded && v.contoh && (
                  <div className="px-4 pb-4 pt-0 border-t border-surface-border">
                    <p className="font-hanzi text-base text-white/70 mt-3">{v.contoh}</p>
                    <p className="text-white/40 text-xs italic mt-1">{v.terjemahan}</p>
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
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="btn-ghost px-4 py-2 text-sm disabled:opacity-30"
          >
            ←
          </button>
          <span className="text-white/40 text-sm">{page} / {totalPages}</span>
          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="btn-ghost px-4 py-2 text-sm disabled:opacity-30"
          >
            →
          </button>
        </div>
      )}
    </div>
  )
}
