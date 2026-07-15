import { Component } from 'react'

// Error boundary global — kalau ada komponen manapun crash, user lihat
// halaman fallback yang rapi (bukan layar putih kosong). Dipasang di
// main.jsx, membungkus seluruh <App />.
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('[ErrorBoundary] Aplikasi crash:', error, info)
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center px-4 text-center bg-gray-950">
          <div className="max-w-sm">
            <p
              className="font-hanzi font-bold text-white/5 leading-none mb-4 select-none"
              style={{ fontSize: 'clamp(80px, 16vw, 160px)' }}
            >
              错误
            </p>
            <h1 className="font-display text-2xl font-extrabold text-white mb-2">Terjadi Kesalahan</h1>
            <p className="text-white/40 text-sm mb-6">Ada yang error di aplikasi. Coba muat ulang halaman.</p>
            <button onClick={this.handleReload} className="btn-primary">Muat Ulang</button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}