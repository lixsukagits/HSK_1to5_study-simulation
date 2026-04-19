import { NavLink, Link } from 'react-router-dom'
import { storage, STORAGE_KEYS } from '../../utils/storage'
import { useAchievements } from '../../hooks/useachievements'
import { useAuthContext } from '../../context/authcontext'

const NAV_ITEMS = [
  { to: '/',           label: 'Beranda',    Icon: HomeIcon     },
  { to: '/flashcards', label: 'Flash Card', Icon: CardIcon     },
  { to: '/quiz',       label: 'Kuis',       Icon: QuizIcon     },
  { to: '/progress',   label: 'Progress',   Icon: ProgressIcon },
]

function HomeIcon({ active }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active?2.2:1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>
}
function CardIcon({ active }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active?2.2:1.8} strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="3"/><path d="M2 10h20"/></svg>
}
function QuizIcon({ active }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active?2.2:1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><circle cx="12" cy="17" r=".5" fill="currentColor"/></svg>
}
function ProgressIcon({ active }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active?2.2:1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
}

export default function Navbar() {
  const streak = storage.get(STORAGE_KEYS.STREAK, { count: 0 })
  const { userId } = useAuthContext()
  const { xp, getRank } = useAchievements(userId)
  const rank = getRank(xp)

  return (
    <>
      {/* ── Desktop navbar ── */}
      <header className="hidden sm:block fixed top-0 left-0 right-0 z-50">
        <div className="absolute inset-0 bg-surface/75 backdrop-blur-2xl" />
        <div className="navbar-line" />
        <div className="relative max-w-4xl mx-auto w-full px-6 h-[60px] flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-xl bg-primary-600/20 border border-primary-600/30 flex items-center justify-center overflow-hidden group-hover:border-primary-500/50 transition-all duration-300">
              <span className="font-hanzi text-lg font-bold text-primary-400 group-hover:text-primary-300 transition-colors">汉</span>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
            </div>
            <div>
              <div className="font-display font-bold text-white text-sm leading-none">HSK 学习</div>
              <div className="text-white/30 text-[10px] tracking-widest uppercase leading-none mt-0.5">Belajar Mandarin</div>
            </div>
          </Link>

          {/* Nav */}
          <nav className="flex items-center gap-1">
            {NAV_ITEMS.map(({ to, label, Icon }) => (
              <NavLink key={to} to={to} end={to === '/'}
                className={({ isActive }) =>
                  `relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive ? 'text-white bg-white/8' : 'text-white/45 hover:text-white/80 hover:bg-white/5'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon active={isActive} />
                    <span>{label}</span>
                    {isActive && <span className="nav-active-dot" />}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Rank + XP */}
            <Link to="/achievements" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all">
              <span className="font-hanzi text-sm font-bold" style={{ color: rank.color }}>{rank.title}</span>
              <span className="text-gold-500 text-xs font-bold">{xp.toLocaleString()} XP</span>
            </Link>

            {/* Streak */}
            {streak.count > 0 && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold-500/25 bg-gold-500/8">
                <span className="text-base leading-none">🔥</span>
                <span className="text-gold-400 text-sm font-bold">{streak.count}</span>
              </div>
            )}

            {/* Bookmark */}
            <NavLink to="/bookmarks"
              className={({ isActive }) =>
                `w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 ${
                  isActive ? 'bg-gold-500/20 text-gold-400' : 'text-white/30 hover:text-white/70 hover:bg-white/5'
                }`
              }
              title="Bookmark"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
              </svg>
            </NavLink>

            {/* Settings */}
            <NavLink to="/settings"
              className={({ isActive }) =>
                `w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 ${
                  isActive ? 'bg-white/10 text-white' : 'text-white/30 hover:text-white/70 hover:bg-white/5'
                }`
              }
              title="Pengaturan"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
              </svg>
            </NavLink>
          </div>
        </div>
      </header>

      {/* ── Mobile bottom navbar ── */}
      <nav className="mobile-nav sm:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="absolute inset-0 bg-surface/90 backdrop-blur-2xl border-t border-surface-border" />
        <div className="relative flex items-center justify-around h-[62px] px-2">
          {NAV_ITEMS.map(({ to, label, Icon }) => (
            <NavLink key={to} to={to} end={to === '/'}
              className={({ isActive }) =>
                `relative flex flex-col items-center gap-1 px-4 py-1.5 rounded-2xl transition-all duration-200 ${
                  isActive ? 'text-white' : 'text-white/35 hover:text-white/60'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && <span className="absolute inset-0 rounded-2xl bg-white/8" />}
                  <span className="relative"><Icon active={isActive} /></span>
                  <span className="relative text-[10px] font-semibold leading-none">{label}</span>
                  {isActive && (
                    <span className="absolute -top-px left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary-500 rounded-full"
                      style={{ boxShadow: '0 0 8px rgba(237,21,21,0.8)' }} />
                  )}
                </>
              )}
            </NavLink>
          ))}
          {/* Extra: Bookmark di mobile */}
          <NavLink to="/bookmarks"
            className={({ isActive }) =>
              `relative flex flex-col items-center gap-1 px-4 py-1.5 rounded-2xl transition-all duration-200 ${
                isActive ? 'text-gold-400' : 'text-white/35'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && <span className="absolute inset-0 rounded-2xl bg-gold-400/8" />}
                <span className="relative text-base leading-none">🔖</span>
                <span className="relative text-[10px] font-semibold leading-none">Saved</span>
              </>
            )}
          </NavLink>
        </div>
      </nav>
    </>
  )
}