import { toDateKey, formatDate } from '../../utils/datehelper'

function lastNDays(n) {
  return Array.from({ length: n }, (_, i) => {
    const d = new Date()
    d.setDate(d.getDate() - (n - 1 - i))
    return toDateKey(d)
  })
}

export function HeatmapCalendar({ dailyLog = {} }) {
  const days  = lastNDays(63)
  const weeks = []
  for (let i = 0; i < days.length; i += 7) weeks.push(days.slice(i, i + 7))
  const max = Math.max(1, ...Object.values(dailyLog).map((d) => d.studied || 0))
  const today = toDateKey()

  function cellColor(count) {
    if (count === 0) return 'bg-white/5'
    const pct = count / max
    if (pct < 0.25) return 'bg-primary-900'
    if (pct < 0.50) return 'bg-primary-700'
    if (pct < 0.75) return 'bg-primary-500'
    return 'bg-primary-400'
  }

  return (
    <div>
      <div className="flex gap-1 overflow-x-auto pb-1">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map((day) => {
              const count = dailyLog[day]?.studied || 0
              return (
                <div
                  key={day}
                  title={`${formatDate(day)}: ${count} kata`}
                  className={`w-3 h-3 rounded-sm flex-shrink-0 cursor-default transition-opacity hover:opacity-80
                    ${cellColor(count)}
                    ${day === today ? 'ring-1 ring-gold-400 ring-offset-1 ring-offset-surface-card' : ''}
                  `}
                />
              )
            })}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-3 text-[10px] text-white/30">
        <span>Kurang</span>
        {['bg-white/5', 'bg-primary-900', 'bg-primary-700', 'bg-primary-500', 'bg-primary-400'].map((c, i) => (
          <div key={i} className={`w-3 h-3 rounded-sm ${c}`} />
        ))}
        <span>Banyak</span>
      </div>
    </div>
  )
}
