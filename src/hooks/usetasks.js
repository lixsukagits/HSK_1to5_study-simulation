// hooks/usetasks.js
// Tracking task (任务大纲) yang user rasa sudah dikuasai, per user per level
// Disimpan di: user_progress_snapshot → data.tasks
// Shape: { 1: ['task-1-01', 'task-1-02', ...], 2: [...], ... }

import { useState, useCallback, useEffect } from 'react'
import { storage, STORAGE_KEYS, syncSnapshotField, loadTasks } from '../utils/storage'

export function useTasks(userId) {
  const [mastered, setMastered] = useState(() =>
    storage.get(STORAGE_KEYS.TASKS, {})
  )
  const [loading, setLoading] = useState(!!userId)

  // ─── Hydrate dari Supabase on mount ───────────────────────────
  useEffect(() => {
    if (!userId) { setLoading(false); return }
    let cancelled = false
    setLoading(true)

    loadTasks(userId).then(data => {
      if (!cancelled) {
        setMastered(data)
        setLoading(false)
      }
    })

    return () => { cancelled = true }
  }, [userId])

  // Sync tasks ke snapshot (merge otomatis dengan progress/streak/grammar/confusables)
  const _sync = useCallback((tasksData) => {
    if (!userId) return
    syncSnapshotField(userId, 'tasks', tasksData).catch(e => console.warn('[tasks] sync:', e))
  }, [userId])

  const isMastered = useCallback((level, taskId) => {
    return (mastered[level] || []).includes(taskId)
  }, [mastered])

  const markMastered = useCallback((level, taskId) => {
    setMastered(prev => {
      const lvlSet = new Set(prev[level] || [])
      lvlSet.add(taskId)
      const next = { ...prev, [level]: Array.from(lvlSet) }
      storage.set(STORAGE_KEYS.TASKS, next)
      _sync(next)
      return next
    })
  }, [userId, _sync])

  const unmarkMastered = useCallback((level, taskId) => {
    setMastered(prev => {
      const lvlSet = new Set(prev[level] || [])
      lvlSet.delete(taskId)
      const next = { ...prev, [level]: Array.from(lvlSet) }
      storage.set(STORAGE_KEYS.TASKS, next)
      _sync(next)
      return next
    })
  }, [userId, _sync])

  const getCount = useCallback((level) => {
    return (mastered[level] || []).length
  }, [mastered])

  return { mastered, isMastered, markMastered, unmarkMastered, getCount, loading }
}