import { Link } from 'react-router-dom'
import { useAchievements } from '../hooks/useachievements'
import { ACHIEVEMENTS } from '../utils/achievements'

export function Achievements() {
  const { unlocked, xp, getRank } = useAchievements()
  const rank = getRank(xp)
  const unlockedCount = Object.keys(unlocked).length
  const totalCount    = ACHIEVEMENTS.length

  // Kelompokkan per kategori
  const categories = [
    { label: 'Streak Belajar',   ids: ['streak_3','streak_7','streak_30','streak_100'] },
    { label: 'Kata Dikuasai',    ids: ['mastered_10','mastered_50','mastered_100','mastered_250','mastered_500','mastered_1000','mastered_all'] },
    { label: 'Tamat Level',      ids: ['level1_done','level2_done','level3_done','level4_done','level5_done'] },
    { label: 'Kuis',             ids: ['quiz_perfect','quiz_10','quiz_50'] },
    { label: 'Belajar Harian',   ids: ['daily_first','daily_target_7','speed_learner'] },
    { label: 'Koleksi',          ids: ['bookmark_10','first_review'] },
  ]

  return (
    <div className="min-h-screen px-4 py-8 max-w-4xl mx-auto animate-fade-in">
      <Link to="/" className="btn-ghost mb-6 inline-flex text-sm px-3 py-1.5">← Kembali</Link>

      {/* Hero: Rank + XP */}
      <div className="card p-6 mb-8 relative overflow-hidden">
        <div
          className="absolute right-0 top-0 bottom-0 w-32 flex items-center justify-center text-8xl select-none pointer-events-none"
          style={{ color: 'rgba(255,255,255,0.04)' }}
        >
          {rank.title}
        </div>
        <div className="relative">
          <p className="section-label mb-2">Rank Belajarmu</p>
          <div className="flex items-end gap-3 mb-3">
            <div className="font-hanzi font-bold text-5xl leading-none" style={{ color: rank.color }}>
              {rank.title}
            </div>
            <div className="text-white/40 text-sm mb-1">{rank.en}</div>
          </div>

          {/* XP bar */}
          <div className="flex items-center gap-3 mb-2">
            <div className="font-display text-2xl font-extrabold text-gold-400">{xp.toLocaleString()}</div>
            <div className="text-white/30 text-sm">XP total</div>
          </div>

          {/* Next rank preview */}
          {(() => {
            const ranks = [
              { min: 0,     title: '学生',  color: '#9ca3af' },
              { min: 100,   title: '学者',  color: '#60a5fa' },
              { min: 500,   title: '先生',  color: '#4ade80' },
              { min: 1500,  title: '博士',  color: '#f59e0b' },
              { min: 4000,  title: '大师',  color: '#f472b6' },
              { min: 10000, title: '宗师',  color: '#a78bfa' },
            ]
            const currentRankIdx = [...ranks].reverse().findIndex(r => xp >= r.min)
            const nextRank = ranks[ranks.length - 1 - currentRankIdx + 1]
            if (!nextRank) return <p className="text-white/30 text-xs">Rank tertinggi! 🏆</p>
            const progress = ((xp - (ranks[ranks.length - 2 - currentRankIdx]?.min || 0)) /
              (nextRank.min - (ranks[ranks.length - 2 - currentRankIdx]?.min || 0))) * 100
            return (
              <div>
                <div className="flex justify-between text-xs text-white/30 mb-1">
                  <span>Menuju <span className="font-hanzi" style={{ color: nextRank.color }}>{nextRank.title}</span></span>
                  <span>{nextRank.min.toLocaleString()} XP</span>
                </div>
                <div className="progress-track h-1.5">
                  <div className="progress-fill" style={{ width: `${Math.min(100, progress)}%`, background: `linear-gradient(90deg, ${rank.color}, ${nextRank.color})` }} />
                </div>
              </div>
            )
          })()}
        </div>

        {/* Stats kecil */}
        <div className="flex gap-6 mt-5 pt-5 border-t border-surface-border">
          <div>
            <div className="font-display text-xl font-extrabold text-white">{unlockedCount}</div>
            <div className="text-white/30 text-xs">Achievement</div>
          </div>
          <div>
            <div className="font-display text-xl font-extrabold text-white/40">{totalCount - unlockedCount}</div>
            <div className="text-white/30 text-xs">Belum unlock</div>
          </div>
          <div className="ml-auto text-right">
            <div className="text-white/30 text-xs mb-1">Progress</div>
            <div className="text-white font-bold text-sm">{Math.round((unlockedCount / totalCount) * 100)}%</div>
          </div>
        </div>
      </div>

      {/* Achievement categories */}
      {categories.map(cat => {
        const achs = cat.ids.map(id => ACHIEVEMENTS.find(a => a.id === id)).filter(Boolean)
        return (
          <div key={cat.label} className="mb-8">
            <p className="section-label mb-3">{cat.label}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {achs.map(ach => {
                const isUnlocked = !!unlocked[ach.id]
                return (
                  <div
                    key={ach.id}
                    className="card p-4 flex items-center gap-3 transition-all"
                    style={isUnlocked ? {
                      borderColor: 'rgba(245,158,11,0.2)',
                      background: 'rgba(245,158,11,0.05)',
                    } : {
                      opacity: 0.45,
                    }}
                  >
                    {/* Icon */}
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{
                        background: isUnlocked ? 'rgba(245,158,11,0.15)' : 'rgba(255,255,255,0.04)',
                        border: isUnlocked ? '1px solid rgba(245,158,11,0.25)' : '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      {isUnlocked ? ach.icon : '🔒'}
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <div className={`text-sm font-semibold ${isUnlocked ? 'text-white' : 'text-white/40'}`}>
                        {ach.name}
                      </div>
                      <div className="text-white/30 text-xs mt-0.5">{ach.desc}</div>
                      {isUnlocked && unlocked[ach.id]?.unlockedAt && (
                        <div className="text-gold-500/60 text-[10px] mt-1">
                          ✓ {new Date(unlocked[ach.id].unlockedAt).toLocaleDateString('id-ID', { day:'numeric', month:'short', year:'numeric' })}
                        </div>
                      )}
                    </div>

                    {/* XP */}
                    <div className="flex-shrink-0 text-right">
                      <div className={`font-display font-bold text-sm ${isUnlocked ? 'text-gold-400' : 'text-white/20'}`}>
                        +{ach.xp}
                      </div>
                      <div className="text-white/20 text-[10px]">XP</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}