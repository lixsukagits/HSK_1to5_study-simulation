import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { supabase } from '../lib/supabase'
import { flushOfflineQueue, migrateFromLocalStorage, isMigrated } from '../lib/sync'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  // Flush offline queue ketika online kembali
  const handleOnline = useCallback(async () => {
    if (session?.user?.id) {
      console.log('[auth] Online kembali, sync offline queue...')
      await flushOfflineQueue(session.user.id)
    }
  }, [session])

  useEffect(() => {
    // Ambil session awal
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    // Listen perubahan auth state (login, logout, token refresh)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setSession(session)
        setUser(session?.user ?? null)
        setLoading(false)

        // Jalankan migrasi localStorage → Supabase (1x saat pertama login)
        if (session?.user && !isMigrated()) {
          await migrateFromLocalStorage(session.user.id)
        }

        // Flush queue jika ada pending data offline
        if (session?.user) {
          await flushOfflineQueue(session.user.id)
        }
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  // Listen event online/offline browser
  useEffect(() => {
    window.addEventListener('online', handleOnline)
    return () => window.removeEventListener('online', handleOnline)
  }, [handleOnline])

  const value = {
    user,
    session,
    loading,
    isAuthenticated: !!user,
    userId: user?.id ?? null,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuthContext harus dipakai di dalam AuthProvider')
  }
  return context
}