import { useEffect, useState } from 'react'

/**
 * Global Achievement Toast — listen ke window event 'hsk:achievement'
 * Tidak butuh props, cukup render sekali di App level
 */
export function AchievementToast() {
  const [queue,   setQueue]   = useState([])  // array of achievement objects
  const [visible, setVisible] = useState(false)
  const [current, setCurrent] = useState(null)

  useEffect(() => {
    function onAchievement(e) {
      const achs = e.detail || []
      if (achs.length === 0) return
      setQueue(prev => [...prev, ...achs])
    }
    window.addEventListener('hsk:achievement', onAchievement)
    return () => window.removeEventListener('hsk:achievement', onAchievement)
  }, [])

  // Dequeue satu per satu setiap 3.5 detik
  useEffect(() => {
    if (queue.length === 0) { setVisible(false); return }
    setCurrent(queue[0])
    setVisible(true)
    const t = setTimeout(() => {
      setQueue(prev => prev.slice(1))
      setVisible(false)
    }, 3500)
    return () => clearTimeout(t)
  }, [queue])

  if (!visible || !current) return null

  return (
    <div className="fixed top-[70px] left-1/2 -translate-x-1/2 z-[100] w-full max-w-sm px-4 pointer-events-none">
      <div
        className="card p-4 animate-bounce-in pointer-events-auto"
        style={{
          borderColor: 'rgba(245,158,11,0.35)',
          background: 'linear-gradient(135deg, rgba(20,16,8,0.97), rgba(30,24,8,0.97))',
          boxShadow: '0 0 40px rgba(245,158,11,0.15), 0 8px 32px rgba(0,0,0,0.5)',
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
            style={{ background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)' }}
          >
            {current.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-gold-400 text-[10px] font-bold uppercase tracking-widest mb-0.5">
              🎉 Achievement Unlocked!
            </div>
            <div className="text-white font-semibold text-sm leading-tight">{current.name}</div>
            <div className="text-white/40 text-xs mt-0.5">{current.desc}</div>
          </div>
          <div className="flex-shrink-0 text-right">
            <div className="text-gold-400 font-display font-extrabold text-lg leading-none">+{current.xp}</div>
            <div className="text-white/25 text-[10px]">XP</div>
          </div>
        </div>
        {queue.length > 1 && (
          <div className="mt-2 text-center text-white/25 text-[10px]">
            +{queue.length - 1} achievement lagi...
          </div>
        )}
      </div>
    </div>
  )
}