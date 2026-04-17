import { useParams, Link } from 'react-router-dom'
import { HSK_LEVELS } from '../constants/hsklevels'
 
export function Vocab() {
  const { level } = useParams()
  const lvl = HSK_LEVELS.find((l) => l.level === Number(level)) || HSK_LEVELS[0]
 
  return (
    <div className="min-h-screen px-4 py-8 max-w-4xl mx-auto animate-fade-in">
      <Link to="/" className="text-white/40 text-sm hover:text-white mb-6 inline-block">
        ← Kembali
      </Link>
      <h1 className="font-display text-3xl font-extrabold mb-2">
        Kosakata {lvl.name}
      </h1>
      <p className="text-white/40 mb-8">{lvl.totalKata} kata · {lvl.keterangan}</p>
      <div className="card p-8 text-center text-white/40">
        <p className="text-4xl mb-4">📚</p>
        <p>Komponen VocabList akan ditambahkan di step berikutnya.</p>
      </div>
    </div>
  )
}