import { useEffect, useState } from 'react'

// Banner global saat browser kehilangan koneksi. App ini punya offline queue
// (src/lib/offlinequeue.js) yang tetap nyimpen perubahan secara lokal saat
// offline, tapi tanpa indikator ini user bisa kira progressnya nggak
// tersimpan padahal cuma nunggu koneksi balik buat sync.
export function OfflineBanner() {
  const [isOffline, setIsOffline] = useState(() => !navigator.onLine)

  useEffect(() => {
    const goOffline = () => setIsOffline(true)
    const goOnline  = () => setIsOffline(false)
    window.addEventListener('offline', goOffline)
    window.addEventListener('online', goOnline)
    return () => {
      window.removeEventListener('offline', goOffline)
      window.removeEventListener('online', goOnline)
    }
  }, [])

  if (!isOffline) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[200] sm:top-[60px] pointer-events-none">
      <div className="bg-amber-500/95 text-black text-xs sm:text-sm font-semibold text-center py-2 px-4 flex items-center justify-center gap-2 backdrop-blur-sm pointer-events-auto">
        <span>📡</span>
        <span>Kamu sedang offline — perubahan akan disinkronkan otomatis saat online kembali</span>
      </div>
    </div>
  )
}