import { useState } from 'react'
import { useAuth } from '../../hooks/useauth'

export function LoginForm({ onSuccess, onSwitchToRegister }) {
  const { login, authLoading, error, clearError } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    clearError()
    try {
      await login(email, password)
      onSuccess?.()
    } catch (_) {
      // error sudah di-handle di hook
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      {error && (
        <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      <div className="flex flex-col gap-1.5">
        <label className="text-sm text-gray-400">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="kamu@email.com"
          required
          className="bg-gray-900 border border-gray-700 focus:border-red-500 outline-none text-white px-4 py-2.5 rounded-lg text-sm transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm text-gray-400">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          required
          className="bg-gray-900 border border-gray-700 focus:border-red-500 outline-none text-white px-4 py-2.5 rounded-lg text-sm transition-colors"
        />
      </div>

      <button
        type="submit"
        disabled={authLoading}
        className="bg-red-600 hover:bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-2.5 rounded-lg transition-colors text-sm"
      >
        {authLoading ? 'Masuk...' : 'Masuk'}
      </button>

      <p className="text-center text-sm text-gray-500">
        Belum punya akun?{' '}
        <button
          type="button"
          onClick={onSwitchToRegister}
          className="text-red-400 hover:text-red-300 transition-colors"
        >
          Daftar
        </button>
      </p>
    </form>
  )
}