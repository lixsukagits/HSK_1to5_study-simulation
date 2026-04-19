import { useState } from 'react'
import { speak, isTTSAvailable } from '../../utils/tts'

/**
 * Tombol putar audio untuk satu kata/kalimat
 * @param {string}   text     - teks yang diucapkan
 * @param {string}   [size]   - 'sm' | 'md' | 'lg'
 * @param {boolean}  [ghost]  - tampilan ghost/transparent
 * @param {string}   [className]
 */
export function AudioButton({ text, size = 'md', ghost = false, className = '' }) {
  const [playing, setPlaying] = useState(false)

  if (!isTTSAvailable()) return null

  const sizes = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-8 h-8 text-sm',
    lg: 'w-10 h-10 text-base',
  }

  function handlePlay(e) {
    e.stopPropagation()
    if (playing) return
    setPlaying(true)
    speak(text, 0.8)
    // Estimasi durasi pemutaran
    setTimeout(() => setPlaying(false), Math.max(800, text.length * 300))
  }

  return (
    <button
      onClick={handlePlay}
      title="Dengarkan pelafalan"
      className={`
        flex-shrink-0 inline-flex items-center justify-center rounded-full
        transition-all duration-200
        ${ghost
          ? 'text-white/30 hover:text-white/70 hover:bg-white/5'
          : 'bg-white/8 border border-white/10 text-white/50 hover:text-white hover:border-white/25 hover:bg-white/12'
        }
        ${playing ? 'text-primary-400 animate-pulse-soft' : ''}
        ${sizes[size] || sizes.md}
        ${className}
      `}
    >
      {playing ? (
        // Wave icon saat playing
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <rect x="2"  y="8"  width="3" height="8"  rx="1.5" />
          <rect x="8"  y="4"  width="3" height="16" rx="1.5" />
          <rect x="14" y="6"  width="3" height="12" rx="1.5" />
          <rect x="20" y="9"  width="3" height="6"  rx="1.5" />
        </svg>
      ) : (
        // Speaker icon
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
          <path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/>
        </svg>
      )}
    </button>
  )
}