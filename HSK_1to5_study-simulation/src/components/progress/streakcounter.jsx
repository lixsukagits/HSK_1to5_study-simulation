export function StreakCounter({ count = 0, longest = 0 }) {
  return (
    <div className="flex items-center gap-4">
      <div className="text-center">
        <div className="flex items-center gap-1.5 justify-center">
          <span className="text-2xl">🔥</span>
          <span className="font-display text-3xl font-extrabold text-gold-400">{count}</span>
        </div>
        <div className="text-white/30 text-xs mt-0.5">Streak sekarang</div>
      </div>
      {longest > 0 && (
        <div className="text-center opacity-60">
          <div className="font-display text-2xl font-bold text-gold-500">{longest}</div>
          <div className="text-white/30 text-xs">Terpanjang</div>
        </div>
      )}
    </div>
  )
}
