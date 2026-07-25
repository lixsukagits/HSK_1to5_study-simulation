import { useState } from 'react'
import { useVocab } from '../../hooks/usevocab'
import { AudioButton } from '../ui/audiobutton'

/**
 * VocabSearch — kotak pencarian kosakata yang reusable.
 * Pola pencarian (hanzi / pinyin / arti) konsisten dengan src/pages/vocab.jsx,
 * memakai hook src/hooks/usevocab.js untuk logika filter-nya.
 *
 * Props:
 * - vocab       : array kata yang dicari di dalamnya (wajib)
 * - onSelect    : (kata) => void — dipanggil saat satu hasil di-klik (opsional)
 * - placeholder : placeholder input (opsional)
 * - levelColor  : warna hex untuk teks hanzi di hasil (opsional)
 * - maxResults  : jumlah maksimum hasil yang ditampilkan (default 8)
 * - autoFocus   : fokus otomatis ke input (opsional)
 */
const SEARCH_MODES = [
  { key: 'zh', label: '中文', placeholder: 'Cari hanzi atau pinyin...' },
  { key: 'id', label: 'Indo', placeholder: 'Cari dari arti bahasa Indonesia...' },
]

export function VocabSearch({
  vocab = [],
  onSelect,
  placeholder,
  levelColor = '#ed1515',
  maxResults = 8,
  autoFocus = false,
}) {
  const [searchMode, setSearchMode] = useState('zh') // 'zh' | 'id'
  const { filtered, search, setSearch } = useVocab(vocab, searchMode)
  const [focused, setFocused] = useState(false)

  const showResults = search.trim().length > 0
  const results = filtered.slice(0, maxResults)
  const hiddenCount = Math.max(0, filtered.length - results.length)

  const activeMode = SEARCH_MODES.find(m => m.key === searchMode)
  const effectivePlaceholder = placeholder || activeMode.placeholder

  function handleSelect(kata) {
    onSelect?.(kata)
  }

  function switchMode(key) {
    setSearchMode(key)
    // ganti mode = ganti "bahasa" pencarian, hasil lama dari field yang beda
    // gak relevan lagi jadi query dikosongkan biar gak bingung
    setSearch('')
  }

  return (
    <div className="relative w-full">
      {/* Toggle mode: cari dari Mandarin (hanzi/pinyin) atau dari Indonesia (arti) */}
      <div className="flex gap-1.5 mb-2">
        {SEARCH_MODES.map(m => (
          <button
            key={m.key}
            type="button"
            onClick={() => switchMode(m.key)}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
              searchMode === m.key ? 'bg-white/10 text-white' : 'text-white/25 hover:text-white/50 hover:bg-white/5'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="relative">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 text-xs pointer-events-none">🔍</span>
        <input
          className="input w-full pl-8 text-sm"
          placeholder={effectivePlaceholder}
          value={search}
          autoFocus={autoFocus}
          onChange={e => setSearch(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60 text-lg"
          >
            ×
          </button>
        )}
      </div>

      {showResults && focused && (
        <div className="card absolute z-20 mt-2 w-full max-h-80 overflow-y-auto p-1.5">
          {results.length === 0 ? (
            <div className="text-white/25 text-sm text-center py-6">
              Tidak ada kata yang cocok
            </div>
          ) : (
            <>
              {results.map(v => (
                <div
                  key={v.id}
                  onMouseDown={() => handleSelect(v)}
                  className="flex items-center gap-3 p-2.5 rounded-xl cursor-pointer hover:bg-white/5 transition-all"
                >
                  <div className="flex-shrink-0 w-10 text-center">
                    <div className="font-hanzi text-xl font-bold leading-none" style={{ color: levelColor }}>
                      {v.hanzi}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white/35 text-xs">{v.pinyin}</div>
                    <div className="text-white/75 text-sm font-medium truncate">{v.arti}</div>
                  </div>
                  <span onMouseDown={e => e.stopPropagation()}>
                    <AudioButton text={v.hanzi} size="sm" ghost />
                  </span>
                </div>
              ))}
              {hiddenCount > 0 && (
                <div className="text-white/20 text-xs text-center py-2">
                  +{hiddenCount} kata lainnya, perhalus pencarian
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  )
}