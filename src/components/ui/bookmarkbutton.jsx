/**
 * Tombol bookmark satu kata
 */
export function BookmarkButton({ wordId, isBookmarked, onToggle, size = 'md', className = '' }) {
  const sizes = { sm: 'w-6 h-6', md: 'w-8 h-8', lg: 'w-10 h-10' }

  function handleClick(e) {
    e.stopPropagation()
    onToggle(wordId)
  }

  return (
    <button
      onClick={handleClick}
      title={isBookmarked ? 'Hapus bookmark' : 'Tambah ke bookmark'}
      className={`
        flex-shrink-0 inline-flex items-center justify-center rounded-full
        transition-all duration-200
        ${isBookmarked
          ? 'text-gold-400 bg-gold-400/15 border border-gold-400/30 hover:bg-gold-400/25'
          : 'text-white/20 hover:text-white/60 hover:bg-white/5 border border-white/0 hover:border-white/10'
        }
        ${sizes[size] || sizes.md}
        ${className}
      `}
    >
      <svg
        width="12" height="12"
        viewBox="0 0 24 24"
        fill={isBookmarked ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
      </svg>
    </button>
  )
}