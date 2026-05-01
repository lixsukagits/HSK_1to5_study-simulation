import { useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { HSK_LEVELS } from '../constants/hsklevels'
import { allGrammar } from '../data'
import { useGrammar } from '../hooks/usegrammar'
import { useAuthContext } from '../context/authcontext'
import { AudioButton } from '../components/ui/audiobutton'
import { initTTS } from '../utils/tts'

initTTS()

const PAGE_SIZE = 15

export function Grammar() {
  const { level } = useParams()
  const lvl = HSK_LEVELS.find(l => l.level === Number(level)) || HSK_LEVELS[0]

  const { userId } = useAuthContext()
  const { isUnderstood, markUnderstood, unmarkUnderstood, getCount } = useGrammar(userId)

  const grammarList = allGrammar[lvl.level] || []

  const [search,   setSearch]   = useState('')
  const [filter,   setFilter]   = useState('all')
  const [tag,      setTag]      = useState('all')
  const [page,     setPage]     = useState(1)
  const [expanded, setExpanded] = useState(null)

  const allTags = useMemo(() => {
    const tags = new Set()
    grammarList.forEach(g => g.tags?.forEach(t => tags.add(t)))
    return ['all', ...Array.from(tags).sort()]
  }, [grammarList])

  const filtered = useMemo(() => {
    let list = grammarList
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(g =>
        g.title?.toLowerCase().includes(q) ||
        g.pattern?.toLowerCase().includes(q) ||
        g.explanation?.toLowerCase().includes(q) ||
        g.tags?.some(t => t.toLowerCase().includes(q)) ||
        g.gfCode?.toLowerCase().includes(q)
      )
    }
    if (filter === 'understood') list = list.filter(g => isUnderstood(lvl.level, g.id))
    if (filter === 'unseen')     list = list.filter(g => !isUnderstood(lvl.level, g.id))
    if (tag !== 'all')           list = list.filter(g => g.tags?.includes(tag))

    // Yang sudah paham turun ke bawah
    list = [...list].sort((a, b) => {
      const aU = isUnderstood(lvl.level, a.id) ? 1 : 0
      const bU = isUnderstood(lvl.level, b.id) ? 1 : 0
      return aU - bU
    })
    return list
  }, [grammarList, search, filter, tag, lvl.level, isUnderstood])

  const totalPages  = Math.ceil(filtered.length / PAGE_SIZE)
  const displayed   = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
  const understoodN = getCount(lvl.level)
  const pct         = grammarList.length === 0 ? 0 : Math.round((understoodN / grammarList.length) * 100)

  function toggleUnderstood(e, g) {
    e.stopPropagation()
    if (isUnderstood(lvl.level, g.id)) {
      unmarkUnderstood(lvl.level, g.id)
    } else {
      markUnderstood(lvl.level, g.id)
    }
  }

  function resetPage() { setPage(1); setSearch(''); setFilter('all'); setTag('all'); setExpanded(null) }

  return (
    <div className="min-h-screen px-4 py-8 max-w-3xl mx-auto animate-fade-in">
      <Link to="/" className="btn-ghost mb-6 inline-flex text-sm px-3 py-1.5">← Kembali</Link>

      {/* Header */}
      <div className="flex items-start gap-4 mb-6 flex-wrap">
        <div className="flex-1 min-w-0">
          <span className={`badge badge-level-${lvl.level} mb-2`}>{lvl.name}</span>
          <h1 className="font-display text-3xl font-extrabold mt-1 mb-1">
            Tata Bahasa <span className="text-gradient-red">{lvl.name}</span>
          </h1>
          <p className="text-white/35 text-sm">{grammarList.length} poin grammar · GF 0025-2021</p>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="font-display text-3xl font-extrabold" style={{ color: lvl.warnaHex }}>{pct}%</div>
          <div className="text-white/30 text-xs">{understoodN} / {grammarList.length} dipahami</div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="card p-4 mb-6">
        <div className="progress-track">
          <div className="progress-fill" style={{
            width: `${pct}%`,
            background: `linear-gradient(90deg, ${lvl.warnaHex}60, ${lvl.warnaHex})`
          }} />
        </div>
      </div>

      {/* Level tabs */}
      <div className="flex gap-1.5 mb-6 flex-wrap">
        {HSK_LEVELS.map(l => (
          <Link key={l.level} to={`/grammar/${l.level}`} onClick={resetPage}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 ${
              l.level === lvl.level
                ? `badge badge-level-${l.level}`
                : 'text-white/25 hover:text-white/60 hover:bg-white/5'
            }`}>
            {l.name}
          </Link>
        ))}
      </div>

      {/* Search + filter */}
      <div className="flex gap-2 mb-4 flex-wrap">
        <div className="relative flex-1 min-w-[160px]">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 text-xs pointer-events-none">🔍</span>
          <input className="input w-full pl-8 text-sm" placeholder="Cari pola, penjelasan, kode GF..."
            value={search} onChange={e => { setSearch(e.target.value); setPage(1) }} />
          {search && (
            <button onClick={() => setSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60 text-lg">×</button>
          )}
        </div>
        <div className="flex gap-1 flex-wrap">
          {[
            { key: 'all',        label: 'Semua' },
            { key: 'understood', label: '✓ Paham' },
            { key: 'unseen',     label: '★ Belum' },
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

      {/* Tag filter */}
      {allTags.length > 1 && (
        <div className="flex gap-1.5 mb-5 flex-wrap">
          {allTags.slice(0, 12).map(t => (
            <button key={t} onClick={() => { setTag(t); setPage(1) }}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                tag === t ? 'bg-white/10 text-white' : 'text-white/25 hover:text-white/50 hover:bg-white/5'
              }`}>
              {t === 'all' ? 'Semua Tag' : t}
            </button>
          ))}
        </div>
      )}

      <p className="text-white/20 text-xs mb-4">
        {filtered.length} poin{search ? ` · "${search}"` : ''}
      </p>

      {/* Grammar list */}
      {displayed.length === 0 ? (
        <div className="card p-16 text-center text-white/25">
          <p className="text-5xl mb-4">🔍</p>
          <p className="font-medium">Tidak ada poin grammar yang cocok</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3 mb-8">
          {displayed.map(g => {
            const isOpen     = expanded === g.id
            const understood = isUnderstood(lvl.level, g.id)

            return (
              <div key={g.id} className={`vocab-card overflow-hidden ${understood ? 'mastered' : ''}`}>

                {/* Header row */}
                <div className="p-4 flex items-start gap-3 cursor-pointer select-none"
                  onClick={() => setExpanded(isOpen ? null : g.id)}>

                  <div className="flex-shrink-0 mt-0.5">
                    <span className="text-[10px] font-mono text-white/25 bg-white/5 px-2 py-0.5 rounded-lg">
                      {g.gfCode}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-white font-semibold text-sm leading-snug">{g.title}</span>
                      <span className="text-white/25 text-xs">{g.titleZh}</span>
                    </div>
                    <p className={`font-mono text-xs text-primary-400 ${isOpen ? '' : 'truncate'}`}>
                      {g.pattern?.split('\n')[0]}
                    </p>
                  </div>

                  {/* Tombol centang kecil di header */}
                  <button
                    onClick={e => toggleUnderstood(e, g)}
                    title={understood ? 'Batalkan' : 'Sudah paham'}
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all mt-0.5 ${
                      understood
                        ? 'bg-green-400/20 text-green-400 border border-green-400/30'
                        : 'text-white/15 border border-white/10 hover:text-white/50 hover:border-white/25'
                    }`}>
                    {understood ? '✓' : '○'}
                  </button>
                </div>

                {/* Expanded content */}
                {isOpen && (
                  <div className="border-t border-surface-border px-4 pb-5 pt-4">

                    {/* Pattern */}
                    <div className="mb-4 p-3 rounded-xl bg-primary-500/5 border border-primary-500/15">
                      <p className="text-[10px] text-white/30 uppercase tracking-wider mb-2 font-semibold">Pola</p>
                      {g.pattern?.split('\n').map((line, i) => (
                        <p key={i} className="font-mono text-sm text-primary-300 leading-relaxed">{line}</p>
                      ))}
                    </div>

                    {/* Explanation */}
                    <div className="mb-4">
                      <p className="text-[10px] text-white/30 uppercase tracking-wider mb-2 font-semibold">Penjelasan</p>
                      <p className="text-white/70 text-sm leading-relaxed">{g.explanation}</p>
                    </div>

                    {/* Examples */}
                    {g.examples && g.examples.length > 0 && (
                      <div className="mb-4">
                        <p className="text-[10px] text-white/30 uppercase tracking-wider mb-3 font-semibold">Contoh Kalimat</p>
                        <div className="flex flex-col gap-2.5">
                          {g.examples.map((ex, i) => (
                            <div key={i} className="flex items-start gap-2 p-3 rounded-xl bg-white/3">
                              <span className="text-white/15 text-xs font-bold mt-0.5 w-4 flex-shrink-0">{i + 1}.</span>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 flex-wrap mb-0.5">
                                  <span className="font-hanzi text-base text-white/80">{ex.zh}</span>
                                  <AudioButton text={ex.zh} size="sm" ghost />
                                </div>
                                {ex.pinyin && <p className="text-white/35 text-xs mb-1">{ex.pinyin}</p>}
                                <p className="text-white/50 text-xs italic">{ex.id}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tags */}
                    {g.tags && g.tags.length > 0 && (
                      <div className="flex gap-1.5 flex-wrap mb-4">
                        {g.tags.map(t => (
                          <button key={t} onClick={() => { setTag(t); setPage(1); setExpanded(null) }}
                            className="text-[10px] text-white/30 bg-white/5 hover:bg-white/10 hover:text-white/60 px-2 py-0.5 rounded-lg transition-all">
                            #{t}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Tombol sudah paham besar di bawah */}
                    <button
                      onClick={e => toggleUnderstood(e, g)}
                      className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                        understood
                          ? 'bg-green-400/10 text-green-400 border border-green-400/20 hover:bg-red-400/10 hover:text-red-400 hover:border-red-400/20'
                          : 'bg-white/5 text-white/40 border border-white/10 hover:bg-green-400/10 hover:text-green-400 hover:border-green-400/20'
                      }`}>
                      {understood
                        ? <><span>✓</span> Sudah Paham — klik untuk batalkan</>
                        : <><span>○</span> Tandai Sudah Paham</>
                      }
                    </button>
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
          <button disabled={page === 1} onClick={() => setPage(p => p - 1)}
            className="btn-ghost px-4 py-2 text-sm disabled:opacity-25">←</button>
          <span className="text-white/35 text-sm font-medium">{page} / {totalPages}</span>
          <button disabled={page === totalPages} onClick={() => setPage(p => p + 1)}
            className="btn-ghost px-4 py-2 text-sm disabled:opacity-25">→</button>
        </div>
      )}
    </div>
  )
}