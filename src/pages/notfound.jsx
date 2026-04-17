export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 animate-fade-in">
      <p className="font-hanzi text-8xl font-bold text-white/10 mb-4">找不到</p>
      <h1 className="font-display text-4xl font-extrabold mb-2">404</h1>
      <p className="text-white/40 mb-8">Halaman tidak ditemukan</p>
      <Link to="/" className="btn-primary">Kembali ke Beranda</Link>
    </div>
  )
}