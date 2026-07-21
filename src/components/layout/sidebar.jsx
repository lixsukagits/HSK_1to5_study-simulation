import { NavLink, Link } from 'react-router-dom'
import { storage, STORAGE_KEYS } from '../../utils/storage'
import { useAchievements } from '../../hooks/useachievements'
import { useAuthContext } from '../../context/authcontext'

// Sidebar navigasi permanen — desktop only (sm ke atas).
// Menggantikan header navbar atas. Mobile tetap pakai bottom-bar di navbar.jsx.

const MAIN_ITEMS = [
  { to: '/',           label: 'Beranda',    Icon: HomeIcon,     end: true },
  { to: '/study',      label: 'Study Today',Icon: StudyIcon            },
  { to: '/vocab/1',    label: 'Kosakata',   Icon: VocabIcon            },
  { to: '/flashcards', label: 'Flash Card', Icon: CardIcon             },
  { to: '/quiz',       label: 'Kuis',       Icon: QuizIcon             },
  { to: '/grammar/1',  label: 'Grammar',    Icon: GrammarIcon,  end: true },
  { to: '/progress',   label: 'Progress',   Icon: ProgressIcon         },
]

const MORE_ITEMS = [
  { to: '/tasks',        label: 'Latihan Tugas',  Icon: TasksIcon       },
  { to: '/confusables',  label: 'Kata Mirip',     Icon: ConfusablesIcon },
  { to: '/wordmatch',    label: 'Word Match',     Icon: WordMatchIcon   },
  { to: '/writing',      label: 'Latihan Tulis',  Icon: WritingIcon     },
  { to: '/strokeorder',  label: 'Urutan Goresan', Icon: StrokeIcon      },
  { to: '/achievements', label: 'Achievement',    Icon: AchievementIcon },
  { to: '/bookmarks',    label: 'Bookmark',       Icon: BookmarkIcon    },
]

function HomeIcon({ active }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active?2.2:1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>
}
function StudyIcon({ active }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active?2.2:1.8} strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
}
function VocabIcon({ active }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active?2.2:1.8} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>
}
function CardIcon({ active }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active?2.2:1.8} strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="3"/><path d="M2 10h20"/></svg>
}
function QuizIcon({ active }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active?2.2:1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><circle cx="12" cy="17" r=".5" fill="currentColor"/></svg>
}
function GrammarIcon({ active }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active?2.2:1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/><path d="M9 7h6M9 11h4"/></svg>
}
function ProgressIcon({ active }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active?2.2:1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
}
function TasksIcon({ active }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active?2.2:1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
}
function ConfusablesIcon({ active }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active?2.2:1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 014-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg>
}
function WordMatchIcon({ active }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active?2.2:1.8} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><path d="M10 6.5h4M17 10v4"/></svg>
}
function WritingIcon({ active }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active?2.2:1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4z"/></svg>
}
function StrokeIcon({ active }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active?2.2:1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M4 4v16h16"/><path d="M8 15l3-6 3 4 4-8"/></svg>
}
function AchievementIcon({ active }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active?2.2:1.8} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M9 13.5L7 22l5-3 5 3-2-8.5"/></svg>
}
function BookmarkIcon({ active }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active?2.2:1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg>
}
function SettingsIcon({ active }) {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active?2.2:1.8} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
}

function NavItem({ to, label, Icon, end }) {
  return (
    <NavLink to={to} end={end}
      className={({ isActive }) =>
        `relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
          isActive ? 'text-white bg-white/8' : 'text-white/45 hover:text-white/80 hover:bg-white/5'
        }`
      }
    >
      {({ isActive }) => (
        <>
          <span className="flex-shrink-0"><Icon active={isActive} /></span>
          <span className="truncate">{label}</span>
        </>
      )}
    </NavLink>
  )
}

export default function Sidebar() {
  const streak = storage.get(STORAGE_KEYS.STREAK, { count: 0 })
  const { userId } = useAuthContext()
  const { xp, getRank } = useAchievements(userId)
  const rank = getRank(xp)

  return (
    <aside className="hidden sm:flex fixed top-0 left-0 bottom-0 z-40 w-64 flex-col">
      <div className="absolute inset-0 bg-surface/95 backdrop-blur-2xl border-r border-surface-border" />
      <div className="relative flex flex-col h-full px-4 py-5 overflow-y-auto">

      {/* Logo */}
      <Link to="/" className="flex items-center gap-3 group px-1 mb-6">
        <div className="relative w-11 h-11 flex items-center justify-center overflow-hidden">
          <img 
            src={`${import.meta.env.VITE_BASE_URL ?? '/'}favicon.png`} 
            alt="Logo" 
            className="h-full w-full object-contain rounded-full transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent rounded-full pointer-events-none" />
        </div>
        
        <div className="min-w-0">
          <div className="font-display font-bold text-white text-sm leading-none">HSK 学习</div>
          <div className="text-white/30 text-[10px] tracking-widest uppercase leading-none mt-0.5">Belajar Mandarin</div>
        </div>
      </Link>

        {/* Rank + XP + Streak */}
        <div className="flex flex-col gap-2 mb-6">
          <Link to="/achievements" className="flex items-center justify-between px-3 py-2 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all">
            <span className="font-hanzi text-sm font-bold" style={{ color: rank.color }}>{rank.title}</span>
            <span className="text-gold-500 text-xs font-bold">{xp.toLocaleString()} XP</span>
          </Link>
          {streak.count > 0 && (
            <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-gold-500/25 bg-gold-500/8">
              <span className="text-base leading-none">🔥</span>
              <span className="text-gold-400 text-sm font-bold">{streak.count} hari streak</span>
            </div>
          )}
        </div>

        {/* Main nav */}
        <p className="section-label px-3 mb-2">Menu Utama</p>
        <nav className="flex flex-col gap-1 mb-6">
          {MAIN_ITEMS.map(item => <NavItem key={item.to} {...item} />)}
        </nav>

        {/* More nav */}
        <p className="section-label px-3 mb-2">Latihan &amp; Lainnya</p>
        <nav className="flex flex-col gap-1">
          {MORE_ITEMS.map(item => <NavItem key={item.to} {...item} />)}
        </nav>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Settings */}
        <NavLink to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
              isActive ? 'text-white bg-white/8' : 'text-white/45 hover:text-white/80 hover:bg-white/5'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <span className="flex-shrink-0"><SettingsIcon active={isActive} /></span>
              <span>Pengaturan</span>
            </>
          )}
        </NavLink>
      </div>
    </aside>
  )
}