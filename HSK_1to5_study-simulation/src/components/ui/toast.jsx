import { useState, useCallback, useEffect } from 'react'

let toastFn = null

export function useToast() {
  const show = useCallback((message, type = 'info') => {
    if (toastFn) toastFn(message, type)
  }, [])
  return { show }
}

export function ToastProvider() {
  const [toasts, setToasts] = useState([])

  useEffect(() => {
    toastFn = (message, type) => {
      const id = Date.now()
      setToasts((prev) => [...prev, { id, message, type }])
      setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 3000)
    }
    return () => { toastFn = null }
  }, [])

  const colorMap = { success: 'text-green-400', error: 'text-red-400', info: 'text-white/70' }

  return (
    <div className="fixed bottom-20 sm:bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none">
      {toasts.map((t) => (
        <div
          key={t.id}
          className="card px-4 py-2.5 text-sm animate-slide-up pointer-events-auto"
        >
          <span className={colorMap[t.type] || colorMap.info}>{t.message}</span>
        </div>
      ))}
    </div>
  )
}
