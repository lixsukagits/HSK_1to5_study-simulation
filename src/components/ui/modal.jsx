import { useEffect } from 'react'

const SIZE_CLASSES = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
}

export function Modal({ open, onClose, title, children, size = 'md' }) {
  useEffect(() => {
    if (!open) return
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])

  if (!open) return null

  const widthClass = SIZE_CLASSES[size] || SIZE_CLASSES.md

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className={`relative card p-6 w-full ${widthClass} max-h-[85vh] overflow-y-auto animate-bounce-in`}>
        <div className="flex items-center justify-between mb-4">
          {title && <h2 className="font-display font-bold text-lg">{title}</h2>}
          <button onClick={onClose} className="text-white/40 hover:text-white ml-auto text-xl leading-none">✕</button>
        </div>
        {children}
      </div>
    </div>
  )
}