export function ProgressBar({ value = 0, max = 100, color, showLabel = true, size = 'md' }) {
  const pct = Math.min(100, Math.max(0, Math.round((value / max) * 100)))
  const heights = { sm: 'h-1', md: 'h-2', lg: 'h-3' }
  return (
    <div>
      {showLabel && (
        <div className="flex justify-between text-xs text-white/40 mb-1">
          <span>{value} / {max}</span>
          <span>{pct}%</span>
        </div>
      )}
      <div className={`progress-track ${heights[size] || heights.md}`}>
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{
            width: `${pct}%`,
            background: color
              ? `linear-gradient(90deg, ${color}80, ${color})`
              : 'linear-gradient(90deg, #ed1515, #f59e0b)',
          }}
        />
      </div>
    </div>
  )
}
