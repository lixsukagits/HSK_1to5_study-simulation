import { useEffect, useState } from 'react'

/**
 * Toast notifikasi saat unlock achievement baru
 */
export function AchievementToast({ achievements = [], onDismiss }) {
  const [visible, setVisible] = useState(false)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (achievements.length === 0) { setVisible(false); return }
    setVisible(true)
    setCurrent(0)
  }, [achievements])

  if (!visible || achievements.length === 0) return null

  const ach = achievements[current]

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 w-full max-w-sm px-4 pointer-events-none">
      <div
        className="card p-4 animate-bounce-in pointer-events-auto"
        style={{
          borderColor: 'rgba(245,158,11,0.3)',
          background: 'linear-gradient(135deg, rgba(245,158,11,0.12), rgba(17,17,17,0.95))',
          boxShadow: '0 0 30px rgba(245,158,11,0.2), 0 8px 32px rgba(0,0,0,0.4)',
        }}
      >
        <div className="flex items-center gap-3">
          {/* Icon */}
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
            style={{ background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.25)' }}>
            {ach.icon}
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <div className="text-gold-400 text-[10px] font-bold uppercase tracking-widest mb-0.5">
              🎉 Achievement Unlocked!
            </div>
            <div className="text-white font-semibold text-sm">{ach.name}</div>
            <div className="text-white/40 text-xs mt-0.5">{ach.desc}</div>
          </div>

          {/* XP */}
          <div className="flex-shrink-0 text-right">
            <div className="text-gold-400 font-display font-extrabold text-lg leading-none">+{ach.xp}</div>
            <div className="text-white/30 text-[10px]">XP</div>
          </div>
        </div>

        {/* Multiple achievements navigator */}
        {achievements.length > 1 && (
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
            <span className="text-white/30 text-xs">{current + 1} / {achievements.length}</span>
            <div className="flex gap-2">
              {current < achievements.length - 1 && (
                <button
                  onClick={() => setCurrent(c => c + 1)}
                  className="text-white/50 text-xs hover:text-white"
                >
                  Berikutnya →
                </button>
              )}
              <button onClick={() => { setVisible(false); onDismiss?.() }} className="text-white/30 text-xs hover:text-white">
                Tutup
              </button>
            </div>
          </div>
        )}

        {achievements.length === 1 && (
          <button
            onClick={() => { setVisible(false); onDismiss?.() }}
            className="absolute top-3 right-3 text-white/20 hover:text-white/60 text-lg leading-none"
          >×</button>
        )}
      </div>
    </div>
  )
}