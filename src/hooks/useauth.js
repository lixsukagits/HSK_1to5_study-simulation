import { useState } from 'react'
import { useAuthContext } from '../context/authcontext'
import { login, logout, register, resetPassword } from '../lib/auth'

// Terjemahkan pesan error teknis dari Supabase Auth ke Bahasa Indonesia
// yang lebih ramah untuk ditampilkan ke user.
function translateAuthError(message) {
  if (!message) return 'Terjadi kesalahan. Coba lagi.'
  const msg = message.toLowerCase()

  if (msg.includes('invalid login credentials')) return 'Email atau password salah.'
  if (msg.includes('email not confirmed')) return 'Email belum dikonfirmasi. Cek inbox kamu.'
  if (msg.includes('user already registered')) return 'Email ini sudah terdaftar. Coba masuk saja.'
  if (msg.includes('password should be at least')) return 'Password minimal 6 karakter.'
  if (msg.includes('unable to validate email') || msg.includes('invalid email')) return 'Format email tidak valid.'
  if (msg.includes('rate limit') || msg.includes('security purposes')) return 'Terlalu banyak percobaan. Coba lagi sebentar lagi.'
  if (msg.includes('network') || msg.includes('fetch')) return 'Gagal terhubung ke server. Cek koneksi internet kamu.'

  return message
}

export function useAuth() {
  const { user, session, loading, isAuthenticated, userId } = useAuthContext()
  const [authLoading, setAuthLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleLogin = async (email, password) => {
    setAuthLoading(true)
    setError(null)
    try {
      await login(email, password)
    } catch (err) {
      setError(translateAuthError(err.message))
      throw err
    } finally {
      setAuthLoading(false)
    }
  }

  const handleRegister = async (email, password, displayName) => {
    setAuthLoading(true)
    setError(null)
    try {
      await register(email, password, displayName)
    } catch (err) {
      setError(translateAuthError(err.message))
      throw err
    } finally {
      setAuthLoading(false)
    }
  }

  const handleLogout = async () => {
    setAuthLoading(true)
    setError(null)
    try {
      await logout()
    } catch (err) {
      setError(translateAuthError(err.message))
    } finally {
      setAuthLoading(false)
    }
  }

  const handleResetPassword = async (email) => {
    setAuthLoading(true)
    setError(null)
    try {
      await resetPassword(email)
    } catch (err) {
      setError(translateAuthError(err.message))
      throw err
    } finally {
      setAuthLoading(false)
    }
  }

  return {
    user,
    session,
    loading,
    isAuthenticated,
    userId,
    authLoading,
    error,
    login: handleLogin,
    register: handleRegister,
    logout: handleLogout,
    resetPassword: handleResetPassword,
    clearError: () => setError(null),
  }
}