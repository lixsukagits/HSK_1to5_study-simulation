import { useState } from 'react'
import { useAuth } from '../../hooks/useauth'

function EyeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
function EyeOffIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.94 10.94 0 0112 20c-7 0-11-8-11-8a20.3 20.3 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a20.3 20.3 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
      <path d="M1 1l22 22" />
    </svg>
  )
}

export function RegisterForm({ onSuccess, onSwitchToLogin }) {
  const { register, authLoading, error, clearError } = useAuth()
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [localError, setLocalError] = useState(null)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

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
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
            className="bg-gray-900 border border-gray-700 focus:border-red-500 outline-none text-white px-4 py-2.5 pr-11 rounded-lg text-sm transition-colors w-full"
          />
          <button
            type="button"
            onClick={() => setShowPassword(s => !s)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
            aria-label={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm text-gray-400">Konfirmasi Password</label>
        <div className="relative">
          <input
            type={showConfirm ? 'text' : 'password'}
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="••••••••"
            required
            className="bg-gray-900 border border-gray-700 focus:border-red-500 outline-none text-white px-4 py-2.5 pr-11 rounded-lg text-sm transition-colors w-full"
          />
          <button
            type="button"
            onClick={() => setShowConfirm(s => !s)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
            aria-label={showConfirm ? 'Sembunyikan password' : 'Tampilkan password'}
          >
            {showConfirm ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </div>
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