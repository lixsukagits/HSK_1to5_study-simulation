export function Button({ children, variant = 'primary', size = 'md', className = '', disabled, onClick, ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed'
  const variants = {
    primary:   'bg-primary-600 hover:bg-primary-500 text-white hover:shadow-glow-red',
    ghost:     'bg-transparent hover:bg-white/5 text-white/70 hover:text-white border border-surface-border hover:border-white/20',
    danger:    'bg-red-900/30 hover:bg-red-900/50 text-red-400 border border-red-900/50',
    success:   'bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/30',
  }
  const sizes = {
    sm:  'px-3 py-1.5 text-xs',
    md:  'px-5 py-2.5 text-sm',
    lg:  'px-6 py-3 text-base',
  }
  return (
    <button
      className={`${base} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}
