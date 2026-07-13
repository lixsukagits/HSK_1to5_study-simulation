import { useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { HSK_LEVELS } from '../constants/hsklevels'
import { allTasks } from '../data'
import { useTasks } from '../hooks/usetasks'
import { useAuthContext } from '../context/authcontext'

const PAGE_SIZE = 10

const SKILL_META = {
  listening: { label: 'Mendengar', icon: '🎧', color: '#60a5fa' },
  speaking:  { label: 'Berbicara', icon: '🗣️', color: '#f59e0b' },
  reading:   { label: 'Membaca',   icon: '📖', color: '#4ade80' },
}

export function Tasks() {
  const { level } = useParams()
  const lvl = HSK_LEVELS.find(l => l.level === Number(level)) || HSK_LEVELS[0]

  const { userId } = useAuthContext()
  const { isMastered, markMastered, unmarkMastered, getCount } = useTasks(userId)

  const taskList = allTasks[lvl.level] || []

  const [search,   setSearch]   = useState('')
  const [filter,   setFilter]   = useState('all')
  const [page,     setPage]     = useState(1)
  const [expanded, setExpanded] = useState(null)

  const filtered = useMemo(() => {
    let list = taskList
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(t =>
        t.titleZh?.toLowerCase().includes(q) ||
        t.titleId?.toLowerCase().includes(q) ||
        t.skills?.some(s => s.textId?.toLowerCase().includes(q))
      )
    }
    if (filter === 'mastered') list = list.filter(t => isMastered(lvl.level, t.id))
    if (filter === 'unseen')   list = list.filter(t => !isMastered(lvl.level, t.id))

    // Yang sudah dikuasai turun ke bawah
    list = [...list].sort((a, b) => {
      const aM = isMastered(lvl.level, a.id) ? 1 : 0
      const bM = isMastered(lvl.level, b.id) ? 1 : 0
      return aM - bM
    })
    return list
  }, [taskList, search, filter, lvl.level, isMastered])

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const displayed  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
  const masteredN  = getCount(lvl.level)
  const pct        = taskList.length === 0 ? 0 : Math.round((masteredN / taskList.length) * 100)

  function toggleMastered(e, t) {
    e.stopPropagation()
    if (isMastered(lvl.level, t.id)) {
      unmarkMastered(lvl.level, t.id)
    } else {
      markMastered(lvl.level, t.id)
    }
  }

  function resetPage() { setPage(1); setSearch(''); setFilter('all'); setExpanded(null) }

  return (
    <div className="min-h-screen px-4 py-8 max-w-3xl mx-auto animate-fade-in">
      <Link to="/" className="btn-ghost mb-6 inline-flex text-sm px-3 py-1.5">← Kembali</Link>

      {/* Header */}
      <div className="flex items-start gap-4 mb-6 flex-wrap">
        <div className="flex-1 min-w-0">
          <span className={`badge badge-level-${lvl.level} mb-2`}>{lvl.name}</span>
          <h1 className="font-display text-3xl font-extrabold mt-1 mb-1">
            Tugas <span className="text-gradient-red">Komunikasi</span>
          </h1>
          <p className="text-white/35 text-sm">{taskList.length} tugas · 任务大纲</p>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="font-display text-3xl font-extrabold" style={{ color: lvl.warnaHex }}>{pct}%</div>
          <div className="text-white/30 text-xs">{masteredN} / {taskList.length} dikuasai</div>
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

      {/* Sub-nav: Grammar / Tugas / Gampang Ketuker */}
      <div className="flex gap-1.5 mb-3 flex-wrap">
        <Link to={`/grammar/${lvl.level}`}
          className="px-3 py-1.5 rounded-xl text-xs font-bold text-white/25 hover:text-white/60 hover:bg-white/5 transition-all duration-200">
          Grammar
        </Link>
        <span className="px-3 py-1.5 rounded-xl text-xs font-bold bg-white/10 text-white">Tugas</span>
        <Link to={`/confusables/${lvl.level}`}
          className="px-3 py-1.5 rounded-xl text-xs font-bold text-white/25 hover:text-white/60 hover:bg-white/5 transition-all duration-200">
          Gampang Ketuker
        </Link>
      </div>

      {/* Level tabs */}
      <div className="flex gap-1.5 mb-6 flex-wrap">
        {HSK_LEVELS.map(l => (
          <Link key={l.level} to={`/tasks/${l.level}`} onClick={resetPage}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 ${
              l.level === lvl.level ? `badge badge-level-${l.level}` : 'text-white/25 hover:text-white/60 hover:bg-white/5'
            }`}>
            {l.name}
          </Link>
        ))}
      </div>

      {/* Search + filter */}
      <div className="flex gap-2 mb-5 flex-wrap">
        <div className="relative flex-1 min-w-[160px]">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 text-xs pointer-events-none">🔍</span>
          <input className="input w-full pl-8 text-sm" placeholder="Cari tugas atau skill..."
            value={search} onChange={e => { setSearch(e.target.value); setPage(1) }} />
          {search && (
            <button onClick={() => setSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60 text-lg">×</button>
          )}
        </div>
        <div className="flex gap-1 flex-wrap">
          {[
            { key: 'all',      label: 'Semua' },
            { key: 'mastered', label: '✓ Kuasai' },
            { key: 'unseen',   label: '★ Belum' },
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

      <p className="text-white/20 text-xs mb-4">
        {filtered.length} tugas{search ? ` · "${search}"` : ''}
      </p>

      {/* Task list */}
      {displayed.length === 0 ? (
        <div className="card p-16 text-center text-white/25">
          <p className="text-5xl mb-4">🔍</p>
          <p className="font-medium">Tidak ada tugas yang cocok</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3 mb-8">
          {displayed.map(t => {
            const isOpen    = expanded === t.id
            const mastered  = isMastered(lvl.level, t.id)

            return (
              <div key={t.id} className={`vocab-card overflow-hidden ${mastered ? 'mastered' : ''}`}>

                {/* Header row */}
                <div className="p-4 flex items-start gap-3 cursor-pointer select-none"
                  onClick={() => setExpanded(isOpen ? null : t.id)}>

                  <div className="flex-shrink-0 mt-0.5">
                    <span className="text-[10px] font-mono text-white/25 bg-white/5 px-2 py-0.5 rounded-lg">
                      {t.code}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1.5">
                      <span className="text-white font-semibold text-sm leading-snug">{t.titleId}</span>
                      <span className="text-white/25 text-xs">{t.titleZh}</span>
                    </div>
                    <div className="flex gap-1.5 flex-wrap">
                      {t.skills.map((s, i) => (
                        <span key={i} className="text-[10px] px-1.5 py-0.5 rounded-md bg-white/5 text-white/40 whitespace-nowrap">
                          {SKILL_META[s.type]?.icon} {SKILL_META[s.type]?.label || s.type}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={e => toggleMastered(e, t)}
                    title={mastered ? 'Batalkan' : 'Sudah kuasai'}
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all mt-0.5 ${
                      mastered
                        ? 'bg-green-400/20 text-green-400 border border-green-400/30'
                        : 'text-white/15 border border-white/10 hover:text-white/50 hover:border-white/25'
                    }`}>
                    {mastered ? '✓' : '○'}
                  </button>
                </div>

                {/* Expanded content */}
                {isOpen && (
                  <div className="border-t border-surface-border px-4 pb-5 pt-4">
                    <p className="text-[10px] text-white/30 uppercase tracking-wider mb-3 font-semibold">Rincian Skill</p>
                    <div className="flex flex-col gap-2.5 mb-4">
                      {t.skills.map((s, i) => {
                        const meta = SKILL_META[s.type] || { label: s.type, icon: '•', color: '#999' }
                        return (
                          <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/3">
                            <span className="text-lg flex-shrink-0 mt-0.5">{meta.icon}</span>
                            <div className="flex-1 min-w-0">
                              <p className="text-[10px] uppercase tracking-wider font-semibold mb-1" style={{ color: meta.color }}>
                                {meta.label}
                              </p>
                              <p className="text-white/70 text-sm leading-relaxed">{s.textId}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    <button
                      onClick={e => toggleMastered(e, t)}
                      className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                        mastered
                          ? 'bg-green-400/10 text-green-400 border border-green-400/20 hover:bg-red-400/10 hover:text-red-400 hover:border-red-400/20'
                          : 'bg-white/5 text-white/40 border border-white/10 hover:bg-green-400/10 hover:text-green-400 hover:border-green-400/20'
                      }`}>
                      {mastered
                        ? <><span>✓</span> Sudah Kuasai — klik untuk batalkan</>
                        : <><span>○</span> Tandai Sudah Kuasai</>
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