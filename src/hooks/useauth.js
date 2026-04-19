import { useState } from 'react'
import { useAuthContext } from '../context/authcontext'
import { login, logout, register, resetPassword } from '../lib/auth'

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
      setError(err.message)
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
      setError(err.message)
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
      setError(err.message)
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
      setError(err.message)
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