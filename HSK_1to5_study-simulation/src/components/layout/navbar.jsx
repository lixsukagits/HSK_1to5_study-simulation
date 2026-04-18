import { Link, NavLink, useLocation } from 'react-router-dom'
import { storage, STORAGE_KEYS } from '../../utils/storage'

const NAV_ITEMS = [
  { to: '/',           label: 'Beranda',  icon: '⊞' },
  { to: '/flashcards', label: 'Flash Card', icon: '🃏' },
  { to: '/quiz',       label: 'Kuis',     icon: '✏️' },
  { to: '/progress',   label: 'Progress', icon: '📊' },
]

export default function Navbar() {
  const streak = storage.get(STORAGE_KEYS.STREAK, { count: 0 })

  return (
    <>
      {/* Desktop top navbar */}
      <header className="hidden sm:flex fixed top-0 left-0 right-0 z-50
        border-b border-surface-border bg-surface/80 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto w-full px-4 h-14 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="font-hanzi text-xl font-bold text-primary-500
              group-hover:text-primary-400 transition-colors">汉</span>
            <span className="font-display font-bold text-white text-sm tracking-wide">
              HSK 学习
            </span>
          </Link>

          {/* Nav links */}
          <nav className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-600/20 text-primary-400'
                      : 'text-white/50 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Streak badge */}
          {streak.count > 0 && (
            <div className="flex items-center gap-1.5 bg-gold-500/10 border border-gold-500/20
              rounded-full px-3 py-1">
              <span className="text-sm">🔥</span>
              <span className="text-gold-400 text-sm font-semibold">{streak.count}</span>
            </div>
          )}
        </div>
      </header>

      {/* Mobile bottom navbar */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-50
        border-t border-surface-border bg-surface/90 backdrop-blur-xl">
        <div className="flex items-center justify-around h-16 px-2">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `flex flex-col items-center gap-0.5 px-4 py-1 rounded-xl
                transition-all duration-200 ${
                  isActive ? 'text-primary-400' : 'text-white/40'
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-xs font-medium">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  )
}