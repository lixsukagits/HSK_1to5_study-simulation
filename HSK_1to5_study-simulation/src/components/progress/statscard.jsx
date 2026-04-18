export function StatsCard({ label, value, unit, color = 'text-white', icon }) {
  return (
    <div className="card p-4 text-center">
      {icon && <div className="text-2xl mb-1">{icon}</div>}
      <div className={`text-3xl font-display font-extrabold ${color}`}>{value}</div>
      {unit && <div className="text-white/30 text-[10px] uppercase tracking-wider mt-0.5">{unit}</div>}
      <div className="text-white/50 text-xs font-medium mt-1">{label}</div>
    </div>
  )
}
