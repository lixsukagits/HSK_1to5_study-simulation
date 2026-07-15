import { useState } from 'react'
import { toDateKey, formatDate } from '../../utils/datehelper'

function lastNDays(n) {
  return Array.from({ length: n }, (_, i) => {
    const d = new Date()
    d.setDate(d.getDate() - (n - 1 - i))
    return toDateKey(d)
  })
}

export function HeatmapCalendar({ dailyLog = {} }) {
  const [selectedDay, setSelectedDay] = useState(null)
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

  const selectedLog = selectedDay ? (dailyLog[selectedDay] || { studied: 0, correct: 0 }) : null

  return (
    <div>
      <div className="flex gap-1 overflow-x-auto pb-1">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map((day) => {
              const count = dailyLog[day]?.studied || 0
              const isSelected = selectedDay === day
              return (
                <button
                  key={day}
                  type="button"
                  title={`${formatDate(day)}: ${count} kata`}
                  onClick={() => setSelectedDay(isSelected ? null : day)}
                  className={`w-3 h-3 rounded-sm flex-shrink-0 cursor-pointer transition-all hover:opacity-80 hover:scale-125 hover:z-10
                    ${cellColor(count)}
                    ${isSelected
                      ? 'ring-1 ring-gold-400 ring-offset-1 ring-offset-surface-card'
                      : day === today ? 'ring-1 ring-white/30 ring-offset-1 ring-offset-surface-card' : ''}
                  `}
                />
              )
            })}
          </div>
        ))}
      </div>

      {/* Detail panel saat hari diklik */}
      {selectedDay && (
        <div
          className="mt-4 p-4 rounded-xl animate-slide-up"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-white/60 text-xs font-semibold mb-1">{formatDate(selectedDay)}</div>
              <div className="flex gap-4">
                <span>
                  <span className="font-display font-bold text-lg text-primary-400">{selectedLog.studied || 0}</span>
                  <span className="text-white/40 text-xs ml-1">kata</span>
                </span>
                <span>
                  <span className="font-display font-bold text-lg text-green-400">{selectedLog.correct || 0}</span>
                  <span className="text-white/40 text-xs ml-1">benar</span>
                </span>
                {(selectedLog.studied || 0) > 0 && (
                  <span>
                    <span className="font-display font-bold text-lg text-blue-400">
                      {Math.round(((selectedLog.correct || 0) / (selectedLog.studied || 1)) * 100)}%
                    </span>
                    <span className="text-white/40 text-xs ml-1">akurasi</span>
                  </span>
                )}
              </div>
            </div>
            <button type="button" onClick={() => setSelectedDay(null)} className="text-white/25 hover:text-white/60 text-lg">×</button>
          </div>
        </div>
      )}

      <div className="flex items-center gap-2 mt-3 text-[10px] text-white/30">
        <span>Kurang</span>
        {['bg-white/5', 'bg-primary-900', 'bg-primary-700', 'bg-primary-500', 'bg-primary-400'].map((c, i) => (
          <div key={i} className={`w-3 h-3 rounded-sm ${c}`} />
        ))}
        <span>Banyak</span>
        <span className="ml-2">· Klik untuk detail</span>
      </div>
    </div>
  )
}