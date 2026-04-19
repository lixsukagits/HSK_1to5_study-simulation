import { useState, useCallback, useEffect } from 'react'
import { storage, STORAGE_KEYS, upsertData } from '../utils/storage'

export const DEFAULT_SETTINGS = {
  dailyTarget:    20,
  quizSize:       20,
  quizType:       'hanzi_to_indo',
  showPinyin:     true,
  showContoh:     true,
  autoFlip:       false,
  autoFlipDelay:  3,
  preferredLevel: 1,
  theme:          'dark',   // 'dark' | 'light'
  hanziSize:      'md',     // 'sm' | 'md' | 'lg' | 'xl'
}

// ─── Apply theme ke <html> ────────────────────────────────────
function applyTheme(theme) {
  const root = document.documentElement
  if (theme === 'light') {
    root.classList.add('light')
    root.classList.remove('dark')
  } else {
    root.classList.add('dark')
    root.classList.remove('light')
  }
}

// ─── Apply font size ke <html> data attribute ─────────────────
function applyHanziSize(size) {
  document.documentElement.setAttribute('data-hanzi-size', size)
}

export function useSettings(userId = null) {
  const [settings, setSettings] = useState(() => {
    const s = storage.get(STORAGE_KEYS.SETTINGS, DEFAULT_SETTINGS)
    return { ...DEFAULT_SETTINGS, ...s }
  })

  // Apply theme & font size on mount
  useEffect(() => {
    applyTheme(settings.theme)
    applyHanziSize(settings.hanziSize)
  }, [])

  const updateSetting = useCallback((key, value) => {
    setSettings(prev => {
      const next = { ...prev, [key]: value }
      storage.set(STORAGE_KEYS.SETTINGS, next)

      // Side effects
      if (key === 'theme')     applyTheme(value)
      if (key === 'hanziSize') applyHanziSize(value)

      // Sync ke Supabase jika online + logged in
      if (userId) {
        upsertData('user_settings', {
          user_id: userId,
          data: next,
          updated_at: new Date().toISOString(),
        }).catch(e => console.warn('[settings] sync error:', e))
      }

      return next
    })
  }, [userId])

  const resetSettings = useCallback(() => {
    storage.set(STORAGE_KEYS.SETTINGS, DEFAULT_SETTINGS)
    setSettings(DEFAULT_SETTINGS)
    applyTheme(DEFAULT_SETTINGS.theme)
    applyHanziSize(DEFAULT_SETTINGS.hanziSize)
  }, [])

  return { settings, updateSetting, resetSettings, DEFAULT_SETTINGS }
}