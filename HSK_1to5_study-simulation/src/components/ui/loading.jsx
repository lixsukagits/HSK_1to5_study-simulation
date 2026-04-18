export function Loading({ text = 'Memuat...' }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-4">
      <div className="w-10 h-10 border-2 border-primary-600 border-t-transparent rounded-full animate-spin" />
      <p className="text-white/40 text-sm">{text}</p>
    </div>
  )
}
