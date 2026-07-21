import { NavLink } from 'react-router-dom'

// Navbar sekarang khusus MOBILE bottom-bar.
// Navigasi desktop dipindah permanen ke sidebar.jsx (lihat components/layout/sidebar.jsx).

const NAV_ITEMS = [
  { to: '/',           label: 'Beranda',    Icon: HomeIcon     },
  { to: '/flashcards', label: 'Flash Card', Icon: CardIcon     },
  { to: '/quiz',       label: 'Kuis',       Icon: QuizIcon     },
  { to: '/grammar/1',  label: 'Grammar',    Icon: GrammarIcon  },
  { to: '/progress',   label: 'Progress',   Icon: ProgressIcon },
]

function GrammarIcon({ active }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active?2.2:1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/><path d="M9 7h6M9 11h4"/></svg>
}
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
  return (
    <nav className="mobile-nav sm:hidden fixed bottom-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-surface/90 backdrop-blur-2xl border-t border-surface-border" />
      <div className="relative flex items-center justify-around h-[62px] px-2">
        {NAV_ITEMS.map(({ to, label, Icon }) => (
          <NavLink key={to} to={to} end={to === '/' || to === '/grammar/1'}
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
  )
}