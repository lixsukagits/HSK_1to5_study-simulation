/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // Font utama - clean & modern untuk belajar
        sans: ['Outfit', 'sans-serif'],
        // Font untuk Hanzi / karakter China
        hanzi: ['Noto Sans SC', 'sans-serif'],
        // Font display untuk judul besar
        display: ['Syne', 'sans-serif'],
      },
      colors: {
        // Tema merah-merah China yang modern
        primary: {
          50:  '#fff1f1',
          100: '#ffe0e0',
          200: '#ffc7c7',
          300: '#ff9d9d',
          400: '#ff6262',
          500: '#ff2f2f',
          600: '#ed1515',
          700: '#c80d0d',
          800: '#a50f0f',
          900: '#881414',
        },
        // Aksen emas untuk highlight
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        // Warna level HSK
        level: {
          1: '#4ade80', // hijau
          2: '#60a5fa', // biru
          3: '#f59e0b', // amber
          4: '#f472b6', // pink
          5: '#a78bfa', // ungu
        },
        surface: {
          DEFAULT: '#0f0f0f',
          card:    '#1a1a1a',
          border:  '#2a2a2a',
          'border-light': '#3f3f3f',
        }
      },
      animation: {
        'flip':       'flip 0.5s ease-in-out',
        'slide-up':   'slideUp 0.3s ease-out',
        'fade-in':    'fadeIn 0.4s ease-out',
        'bounce-in':  'bounceIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        flip: {
          '0%':   { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
        slideUp: {
          '0%':   { transform: 'translateY(16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)',    opacity: '1' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounceIn: {
          '0%':   { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)',   opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.6' },
        },
      },
      boxShadow: {
        'glow-red':  '0 0 20px rgba(237, 21, 21, 0.3)',
        'glow-gold': '0 0 20px rgba(245, 158, 11, 0.3)',
        'card':      '0 4px 24px rgba(0,0,0,0.4)',
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [],
}