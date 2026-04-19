import { useState } from 'react'
import { useAuth } from '../../hooks/useauth'

export function RegisterForm({ onSuccess, onSwitchToLogin }) {
  const { register, authLoading, error, clearError } = useAuth()
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [localError, setLocalError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    clearError()
    setLocalError(null)

    if (password !== confirm) {
      setLocalError('Password tidak cocok')
      return
    }
    if (password.length < 6) {
      setLocalError('Password minimal 6 karakter')
      return
    }

    try {
      await register(email, password, displayName)
      onSuccess?.()
    } catch (_) {}
  }

  const displayError = localError || error

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      {displayError && (
        <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-3 rounded-lg">
          {displayError}
        </div>
      )}

      <div className="flex flex-col gap-1.5">
        <label className="text-sm text-gray-400">Nama</label>
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder="Nama kamu"
          required
          className="bg-gray-900 border border-gray-700 focus:border-red-500 outline-none text-white px-4 py-2.5 rounded-lg text-sm transition-colors"
        />
      </div>

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

      <div className="flex flex-col gap-1.5">
        <label className="text-sm text-gray-400">Konfirmasi Password</label>
        <input
          type="password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
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
        {authLoading ? 'Mendaftar...' : 'Daftar'}
      </button>

      <p className="text-center text-sm text-gray-500">
        Sudah punya akun?{' '}
        <button
          type="button"
          onClick={onSwitchToLogin}
          className="text-red-400 hover:text-red-300 transition-colors"
        >
          Masuk
        </button>
      </p>
    </form>
  )
}