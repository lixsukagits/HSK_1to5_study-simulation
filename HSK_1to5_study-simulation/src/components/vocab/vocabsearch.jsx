export function VocabSearch({ value, onChange, placeholder = 'Cari hanzi, pinyin, atau arti...' }) {
  return (
    <div className="relative">
      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30 text-sm pointer-events-none">🔍</span>
      <input
        type="text"
        className="input w-full pl-9"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 text-lg leading-none"
        >
          ×
        </button>
      )}
    </div>
  )
}
