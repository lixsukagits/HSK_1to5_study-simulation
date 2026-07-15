import { Link } from 'react-router-dom'

// Footer desktop-only (mobile sudah padat dengan bottom nav).
// Muncul mengalir di bawah konten halaman, bukan fixed.
export default function Footer() {
  return (
    <footer className="hidden sm:block mt-16 border-t border-surface-border">
      <div className="max-w-4xl mx-auto px-6 py-8 flex items-center justify-between flex-wrap gap-4">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-primary-600/20 border border-primary-600/30 flex items-center justify-center">
            <span className="font-hanzi text-xs font-bold text-primary-400">汉</span>
          </div>
          <div>
            <div className="font-display font-bold text-white/70 text-xs leading-none">HSK 学习</div>
            <div className="text-white/20 text-[10px] mt-0.5">Belajar Mandarin HSK 1–5</div>
          </div>
        </div>

        {/* Quick links */}
        <nav className="flex items-center gap-4 text-xs text-white/30">
          <Link to="/" className="hover:text-white/60 transition-colors">Beranda</Link>
          <Link to="/progress" className="hover:text-white/60 transition-colors">Progress</Link>
          <Link to="/bookmarks" className="hover:text-white/60 transition-colors">Bookmark</Link>
          <Link to="/settings" className="hover:text-white/60 transition-colors">Pengaturan</Link>
        </nav>

        <p className="text-white/15 text-[10px]">© {new Date().getFullYear()} HSK Study · Dibuat untuk belajar Mandarin</p>
      </div>
    </footer>
  )
}