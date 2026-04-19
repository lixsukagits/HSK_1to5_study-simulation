import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterForm } from '../components/auth/registerform'
import { useAuthContext } from '../context/authcontext'

export default function RegisterPage() {
  const { isAuthenticated, loading } = useAuthContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading && isAuthenticated) {
      navigate('/', { replace: true })
    }
  }, [isAuthenticated, loading, navigate])

  const handleSuccess = () => {
    // Setelah register, Supabase otomatis login
    // Bisa juga kasih info "cek email konfirmasi" kalau email confirm aktif
    navigate('/', { replace: true })
  }

  if (loading) return null

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo / Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-red-600/20 border border-red-500/30 mb-4">
            <span className="text-2xl font-bold text-red-400">汉</span>
          </div>
          <h1 className="text-2xl font-bold text-white">HSK Study</h1>
          <p className="text-gray-400 text-sm mt-1">Buat akun untuk mulai belajar</p>
        </div>

        {/* Card */}
        <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
          <RegisterForm
            onSuccess={handleSuccess}
            onSwitchToLogin={() => navigate('/login')}
          />
        </div>

        <p className="text-center text-xs text-gray-600 mt-6">
          Progress kamu tersimpan di cloud dan sinkron di semua perangkat
        </p>
      </div>
    </div>
  )
}