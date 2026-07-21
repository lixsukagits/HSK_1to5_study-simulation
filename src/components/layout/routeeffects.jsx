import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Mapping path -> judul halaman. Dicek pakai startsWith supaya route dinamis
// (mis. /vocab/:level, /grammar/:level) ikut tercakup tanpa perlu daftar tiap level.
const TITLE_MAP = [
  { prefix: '/vocab',        label: 'Kosakata' },
  { prefix: '/grammar',      label: 'Grammar' },
  { prefix: '/tasks',        label: 'Latihan Tugas' },
  { prefix: '/confusables',  label: 'Kata Mirip' },
  { prefix: '/flashcards',   label: 'Flash Card' },
  { prefix: '/wordmatch',    label: 'Word Match' },
  { prefix: '/strokeorder',  label: 'Urutan Goresan' },
  { prefix: '/writing',      label: 'Latihan Tulis' },
  { prefix: '/progress',     label: 'Progress' },
  { prefix: '/achievements', label: 'Achievement' },
  { prefix: '/bookmarks',    label: 'Bookmark' },
  { prefix: '/settings',     label: 'Pengaturan' },
  { prefix: '/study',        label: 'Study Today' },
  { prefix: '/quiz',         label: 'Kuis' },
  { prefix: '/login',        label: 'Masuk' },
  { prefix: '/register',     label: 'Daftar' },
]

const BRAND = 'HSK 学习'

function getTitleForPath(pathname) {
  if (pathname === '/') return `Beranda · ${BRAND}`
  const match = TITLE_MAP.find(t => pathname.startsWith(t.prefix))
  if (match) return `${match.label} · ${BRAND}`
  return BRAND // fallback, termasuk halaman 404
}

// Komponen tanpa render — cukup diletakkan sekali di dalam <BrowserRouter>.
// Mengatur document.title per route + reset scroll ke atas tiap pindah halaman
// (react-router tidak melakukan ini secara otomatis).
export function RouteEffects() {
  const location = useLocation()

  useEffect(() => {
    document.title = getTitleForPath(location.pathname)
  }, [location.pathname])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return null
}