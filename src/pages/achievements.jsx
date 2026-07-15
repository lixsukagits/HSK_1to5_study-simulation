import { Link } from 'react-router-dom'
import { useAuthContext } from '../context/authcontext'
import { useAchievements } from '../hooks/useachievements'
import { ACHIEVEMENTS } from '../utils/achievements'

// ─── Pengelompokan achievement per kategori (berdasarkan prefix id) ───
const CATEGORIES = [
  { label: 'Streak',              match: id => id.startsWith('streak_') },
  { label: 'Kata Dikuasai',       match: id => id.startsWith('mastered_') },
  { label: 'Level Selesai',       match: id => id.startsWith('level') },
  { label: 'Kuis',                match: id => id.startsWith('quiz_') },
  { label: 'Belajar Harian',      match: id => id.startsWith('daily_') },
  { label: 'Bookmark',            match: id => id.startsWith('bookmark_') },
  { label: 'Grammar, Tugas & Confusable', match: id => id.startsWith('grammar_') || id.startsWith('tasks_') || id.startsWith('confusables_') },
  { label: 'Khusus',              match: id => ['first_review', 'speed_learner'].includes(id) },
]

function groupAchievements() {
  const groups = CATEGORIES.map(c => ({ label: c.label, items: [] }))
  const other = []

  for (const a of ACHIEVEMENTS) {
    const cat = CATEGORIES.find(c => c.match(a.id))
    if (cat) {
      groups.find(g => g.label === cat.label).items.push(a)
    } else {
      other.push(a)
    }
  }

  if (other.length) groups.push({ label: 'Lainnya', items: other })
  return groups.filter(g => g.items.length > 0)
}

export function Achievements() {
  const { userId } = useAuthContext()
  const { unlockedIds, xp, getRank, loading } = useAchievements(userId)

  const rank          = getRank(xp)
  const unlockedCount = unlockedIds.size
  const totalCount    = ACHIEVEMENTS.length
  const overallPct    = totalCount > 0 ? Math.round((unlockedCount / totalCount) * 100) : 0
  const groups        = groupAchievements()

  if (loading) {
    return (
      <div className="min-h-screen px-4 py-8 max-w-4xl mx-auto animate-fade-in">
        <p className="text-white/30 text-sm text-center py-16">Memuat achievement...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen px-4 py-8 max-w-4xl mx-auto animate-fade-in">
      <Link to="/" className="btn-ghost mb-6 inline-flex text-sm px-3 py-1.5">← Kembali</Link>

      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div>
          <h1 className="font-display text-3xl font-extrabold mb-1">Achievements</h1>
          <p className="text-white/35 text-sm">Kumpulkan badge dan naikkan rank kamu</p>
        </div>
        <div className="font-display text-3xl font-extrabold text-gold-400">
          {unlockedCount}
          <span className="text-white/30 text-sm font-medium ml-1">/ {totalCount}</span>
        </div>
      </div>

      {/* Rank + XP card */}
      <div className="card p-6 mb-6 flex items-center gap-6 flex-wrap">
        <div>
          <div className="font-hanzi text-3xl font-bold" style={{ color: rank.color }}>{rank.title}</div>
          <div className="text-white/30 text-xs">{rank.en} · {xp.toLocaleString()} XP</div>
        </div>
        <div className="w-px h-12 bg-surface-border hidden sm:block" />
        <div className="flex-1 min-w-[160px]">
          <div className="flex justify-between text-xs text-white/30 mb-2">
            <span>Badge terkumpul</span>
            <span>{overallPct}%</span>
          </div>
          <div className="progress-track h-3">
            <div className="progress-fill h-full" style={{ width: `${overallPct}%` }} />
          </div>
        </div>
      </div>

      {/* Daftar achievement per kategori */}
      {ACHIEVEMENTS.length === 0 ? (
        <div className="card p-16 text-center">
          <p className="text-6xl mb-4">🏆</p>
          <p className="text-white/60 font-semibold">Belum ada achievement</p>
        </div>
      ) : (
        <div className="space-y-6">
          {groups.map(group => (
            <div key={group.label}>
              <p className="section-label mb-3">{group.label}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {group.items.map(a => {
                  const isUnlocked = unlockedIds.has(a.id)
                  return (
                    <div
                      key={a.id}
                      className={`card p-4 flex items-center gap-3 ${isUnlocked ? '' : 'opacity-40 grayscale'}`}
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xl"
                        style={{ background: isUnlocked ? 'rgba(245,158,11,0.12)' : 'rgba(255,255,255,0.04)' }}>
                        {a.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-white/85 text-sm font-semibold truncate">{a.name}</div>
                        <div className="text-white/35 text-xs truncate">{a.desc}</div>
                      </div>
                      <div className="flex-shrink-0 text-right">
                        <div className={`text-xs font-bold ${isUnlocked ? 'text-gold-400' : 'text-white/25'}`}>
                          +{a.xp} XP
                        </div>
                        {isUnlocked && <div className="text-green-400 text-xs mt-0.5">✓ Unlocked</div>}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}