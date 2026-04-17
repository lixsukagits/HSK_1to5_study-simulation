export function FlashCards() {
  return (
    <div className="min-h-screen px-4 py-8 max-w-4xl mx-auto animate-fade-in">
      <Link to="/" className="text-white/40 text-sm hover:text-white mb-6 inline-block">
        ← Kembali
      </Link>
      <h1 className="font-display text-3xl font-extrabold mb-8">Flash Card</h1>
      <div className="card p-8 text-center text-white/40">
        <p className="text-4xl mb-4">🃏</p>
        <p>Komponen FlashCard akan ditambahkan di step berikutnya.</p>
      </div>
    </div>
  )
}