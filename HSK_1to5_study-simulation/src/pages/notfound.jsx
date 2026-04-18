import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 animate-fade-in">
      <p
        className="font-hanzi font-bold text-white/5 leading-none mb-4 select-none"
        style={{ fontSize: 'clamp(100px, 20vw, 200px)' }}
      >
        找不到
      </p>
      <h1 className="font-display text-5xl font-extrabold mb-2">404</h1>
      <p className="text-white/40 mb-8">Halaman tidak ditemukan</p>
      <Link to="/" className="btn-primary">← Kembali ke Beranda</Link>
    </div>
  )
}
