import { useState, useCallback } from 'react'
import { storage, STORAGE_KEYS } from '../utils/storage'

const DEFAULT_SETTINGS = {
  dailyTarget:    20,
  quizSize:       20,
  quizType:       'hanzi_to_indo',
  showPinyin:     true,
  showContoh:     true,
  autoFlip:       false,
  autoFlipDelay:  3,
  preferredLevel: 1,
}

export function useSettings() {
  const [settings, setSettings] = useState(() =>
    storage.get(STORAGE_KEYS.SETTINGS, DEFAULT_SETTINGS)
  )

  const updateSetting = useCallback((key, value) => {
    setSettings((prev) => {
      const next = { ...prev, [key]: value }
      storage.set(STORAGE_KEYS.SETTINGS, next)
      return next
    })
  }, [])

  const resetSettings = useCallback(() => {
    storage.set(STORAGE_KEYS.SETTINGS, DEFAULT_SETTINGS)
    setSettings(DEFAULT_SETTINGS)
  }, [])

  return { settings, updateSetting, resetSettings, DEFAULT_SETTINGS }
}
