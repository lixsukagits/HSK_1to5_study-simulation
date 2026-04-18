export function Badge({ level, children, className = '' }) {
  const levelClass = level ? `badge-level-${level}` : ''
  return (
    <span className={`badge ${levelClass} ${className}`}>
      {children}
    </span>
  )
}
