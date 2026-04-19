import { useState, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useBookmark } from '../hooks/usebookmark'
import { useProgress } from '../hooks/useprogress'
import { useAuthContext } from '../context/authcontext'
import { useStreak } from '../hooks/usestreak'
import { allWords } from '../data'
import { HSK_LEVELS } from '../constants/hsklevels'
import { AudioButton } from '../components/ui/audiobutton'
import { BookmarkButton } from '../components/ui/bookmarkbutton'

export function Bookmarks() {
  const { userId } = useAuthContext()
  const { bookmarks, bookmarkSet, toggle } = useBookmark(userId)
  const { markSeen, markMastered, unmarkMastered, logActivity, progress } = useProgress(userId)
  const { recordActivity } = useStreak(userId)

  const [search,  setSearch]  = useState('')
  const [filter,  setFilter]  = useState('all')  // all | mastered | unmastered
  const [expanded, setExpanded] = useState(null)

  // Cari kata dari allWords berdasarkan bookmark ids
  const bookmarkedWords = useMemo(() => {
    const idSet = new Set(bookmarks)
    return allWords.filter(w => idSet.has(w.id))
  }, [bookmarks])

  const filtered = useMemo(() => {
    let list = bookmarkedWords

    // Kumpulkan semua mastered ids
    const allMastered = new Set(
      Object.values(progress).flatMap(l => l.mastered || [])
    )

    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(v =>
        v.hanzi?.includes(q) || v.pinyin?.toLowerCase().includes(q) || v.arti?.toLowerCase().includes(q)
      )
    }
    if (filter === 'mastered')   list = list.filter(v => allMastered.has(v.id))
    if (filter === 'unmastered') list = list.filter(v => !allMastered.has(v.id))

    return list
  }, [bookmarkedWords, search, filter, progress])

  function getLvl(level) {
    return HSK_LEVELS.find(l => l.level === level) || HSK_LEVELS[0]
  }

  function toggleMastered(kata) {
    const lvlPrg = progress[kata.level] || { mastered: [] }
    if (lvlPrg.mastered?.includes(kata.id)) {
      unmarkMastered(kata.level, kata.id)
    } else {
      markMastered(kata.level, kata.id)
      logActivity(1, 1)
      recordActivity()
    }
    markSeen(kata.level, kata.id)
  }

  return (
    <div className="min-h-screen px-4 py-8 max-w-4xl mx-auto animate-fade-in">
      <Link to="/" className="btn-ghost mb-6 inline-flex text-sm px-3 py-1.5">← Kembali</Link>

      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div>
          <h1 className="font-display text-3xl font-extrabold mb-1">Bookmark</h1>
          <p className="text-white/35 text-sm">Kata-kata yang kamu simpan untuk dipelajari</p>
        </div>
        <div className="font-display text-3xl font-extrabold text-gold-400">
          {bookmarks.length}
          <span className="text-white/30 text-sm font-medium ml-1">kata</span>
        </div>
      </div>

      {bookmarks.length === 0 ? (
        <div className="card p-16 text-center">
          <p className="text-6xl mb-4">🔖</p>
          <p className="text-white/60 font-semibold mb-2">Belum ada bookmark</p>
          <p className="text-white/30 text-sm mb-6">Tap ikon bookmark di halaman Vocab atau Flash Card untuk menyimpan kata</p>
          <Link to="/vocab/1" className="btn-primary">Mulai Jelajah Kosakata</Link>
        </div>
      ) : (
        <>
          {/* Search + filter */}
          <div className="flex gap-2 mb-5 flex-wrap">
            <div className="relative flex-1 min-w-[160px]">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 text-xs pointer-events-none">🔍</span>
              <input
                className="input w-full pl-8 text-sm"
                placeholder="Cari di bookmark..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <div className="flex gap-1">
              {[
                { key: 'all',        label: 'Semua' },
                { key: 'unmastered', label: '○ Belum hafal' },
                { key: 'mastered',   label: '✓ Sudah hafal' },
              ].map(f => (
                <button key={f.key} onClick={() => setFilter(f.key)}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    filter === f.key ? 'bg-white/10 text-white' : 'text-white/25 hover:text-white/60 hover:bg-white/5'
                  }`}>
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <p className="text-white/20 text-xs mb-4">{filtered.length} kata</p>

          {/* List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {filtered.map(v => {
              const lvl        = getLvl(v.level)
              const lvlPrg     = progress[v.level] || { mastered: [] }
              const isMastered = lvlPrg.mastered?.includes(v.id)
              const isExpanded = expanded === v.id

              return (
                <div
                  key={v.id}
                  className={`vocab-card ${isMastered ? 'mastered' : ''} ${isExpanded ? 'sm:col-span-2' : ''}`}
                >
                  <div className="p-4 flex items-center gap-3"
                    onClick={() => setExpanded(isExpanded ? null : v.id)}
                  >
                    {/* Hanzi */}
                    <div className="flex-shrink-0 w-12 text-center">
                      <div className="font-hanzi text-[28px] font-bold leading-none" style={{ color: lvl.warnaHex }}>
                        {v.hanzi}
                      </div>
                      <span className={`badge badge-level-${v.level} text-[8px] mt-0.5`}>{lvl.name}</span>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="text-white/35 text-xs">{v.pinyin}</div>
                      <div className="text-white/75 text-sm font-medium truncate">{v.arti}</div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <AudioButton text={v.hanzi} size="sm" ghost />
                      <BookmarkButton wordId={v.id} isBookmarked={true} onToggle={toggle} size="sm" />
                      <button
                        onClick={e => { e.stopPropagation(); toggleMastered(v) }}
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                          isMastered
                            ? 'bg-green-400/20 text-green-400 border border-green-400/30'
                            : 'text-white/15 border border-white/10 hover:text-white/50 hover:border-white/25'
                        }`}
                      >
                        {isMastered ? '✓' : '○'}
                      </button>
                    </div>
                  </div>

                  {/* Expanded */}
                  {isExpanded && v.contoh && (
                    <div className="px-4 pb-4 border-t border-surface-border pt-3">
                      <p className="font-hanzi text-base text-white/60">{v.contoh}</p>
                      <p className="text-white/35 text-xs italic mt-1">{v.terjemahan}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Flash Card dari Bookmark */}
          {bookmarks.length > 0 && (
            <div className="mt-8">
              <Link
                to="/flashcards"
                state={{ bookmarkMode: true }}
                className="btn-primary w-full justify-center py-3"
              >
                🃏 Flash Card dari Bookmark
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  )
}