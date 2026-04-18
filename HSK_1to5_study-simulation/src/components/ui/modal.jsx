import { useEffect } from 'react'

export function Modal({ open, onClose, title, children }) {
  useEffect(() => {
    if (!open) return
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative card p-6 w-full max-w-md animate-bounce-in">
        <div className="flex items-center justify-between mb-4">
          {title && <h2 className="font-display font-bold text-lg">{title}</h2>}
          <button onClick={onClose} className="text-white/40 hover:text-white ml-auto text-xl leading-none">✕</button>
        </div>
        {children}
      </div>
    </div>
  )
}
