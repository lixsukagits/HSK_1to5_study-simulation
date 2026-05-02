import { useState, useCallback, useEffect } from 'react'
import { storage, STORAGE_KEYS, upsertData, loadSettings } from '../utils/storage'

export const DEFAULT_SETTINGS = {
  dailyTarget:    20,
  quizSize:       20,
  quizType:       'hanzi_to_indo',
  showPinyin:     true,
  showContoh:     true,
  autoFlip:       false,
  autoFlipDelay:  3,
  preferredLevel: 1,
  theme:          'dark',
  hanziSize:      'md',
}

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

function applyHanziSize(size) {
  document.documentElement.setAttribute('data-hanzi-size', size)
}

export function useSettings(userId = null) {
  const [settings, setSettings] = useState(() => {
    const s = storage.get(STORAGE_KEYS.SETTINGS, DEFAULT_SETTINGS)
    return { ...DEFAULT_SETTINGS, ...s }
  })
  const [loading, setLoading] = useState(!!userId)

  // Apply theme & size dari cache saat mount (sebelum Supabase load)
  useEffect(() => {
    applyTheme(settings.theme)
    applyHanziSize(settings.hanziSize)
  }, [])

  // ─── Hydrate dari Supabase on mount ───────────────────────────
  useEffect(() => {
    if (!userId) { setLoading(false); return }
    let cancelled = false
    setLoading(true)

    loadSettings(userId, DEFAULT_SETTINGS).then(data => {
      if (!cancelled) {
        setSettings(data)
        applyTheme(data.theme)
        applyHanziSize(data.hanziSize)
        setLoading(false)
      }
    })

    return () => { cancelled = true }
  }, [userId])

  const updateSetting = useCallback((key, value) => {
    setSettings(prev => {
      const next = { ...prev, [key]: value }
      storage.set(STORAGE_KEYS.SETTINGS, next)

      if (key === 'theme')     applyTheme(value)
      if (key === 'hanziSize') applyHanziSize(value)

      if (userId) {
        upsertData('user_settings', {
          user_id:    userId,
          data:       next,
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

    if (userId) {
      upsertData('user_settings', {
        user_id:    userId,
        data:       DEFAULT_SETTINGS,
        updated_at: new Date().toISOString(),
      }).catch(e => console.warn('[settings] reset sync error:', e))
    }
  }, [userId])

  return { settings, updateSetting, resetSettings, DEFAULT_SETTINGS, loading }
}