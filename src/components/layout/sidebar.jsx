import { NavLink } from 'react-router-dom'

// Sidebar desktop-only: panel slide-in yang di-toggle dari navbar.jsx
// (dirender oleh Navbar sendiri, bukan langsung di app.jsx, supaya tidak
// perlu ubah layout utama). Menampung fitur yang tidak muat di nav utama:
// Tasks & Confusables.
const EXTRA_ITEMS = [
  {
    to: '/tasks',
    label: 'Latihan Tugas',
    desc: 'Soal latihan per level HSK',
    Icon: TasksIcon,
  },
  {
    to: '/confusables',
    label: 'Kata Mirip',
    desc: 'Perbandingan kosakata yang sering tertukar',
    Icon: ConfusablesIcon,
  },
]

function TasksIcon({ active }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2.2 : 1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </svg>
  )
}

function ConfusablesIcon({ active }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2.2 : 1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 1l4 4-4 4" />
      <path d="M3 11V9a4 4 0 014-4h14" />
      <path d="M7 23l-4-4 4-4" />
      <path d="M21 13v2a4 4 0 01-4 4H3" />
    </svg>
  )
}

export default function Sidebar({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="hidden sm:block fixed inset-0 z-40 bg-black/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Panel */}
      <aside className="hidden sm:flex fixed top-[60px] left-0 bottom-0 z-40 w-72 flex-col animate-slide-up"
        style={{ animationDuration: '200ms' }}>
        <div className="absolute inset-0 bg-surface/95 backdrop-blur-2xl border-r border-surface-border" />
        <div className="relative flex flex-col h-full px-4 py-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-5 px-2">
            <p className="section-label mb-0">Menu Lainnya</p>
            <button onClick={onClose} className="w-7 h-7 rounded-lg flex items-center justify-center text-white/30 hover:text-white/70 hover:bg-white/5 transition-all" aria-label="Tutup menu">
              ✕
            </button>
          </div>

          <nav className="flex flex-col gap-1">
            {EXTRA_ITEMS.map(({ to, label, desc, Icon }) => (
              <NavLink
                key={to}
                to={to}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-start gap-3 px-3 py-3 rounded-xl transition-all duration-200 ${
                    isActive ? 'text-white bg-white/8' : 'text-white/45 hover:text-white/80 hover:bg-white/5'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="mt-0.5 flex-shrink-0"><Icon active={isActive} /></span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium">{label}</span>
                      <span className="block text-white/25 text-xs mt-0.5 leading-snug">{desc}</span>
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>
    </>
  )
}