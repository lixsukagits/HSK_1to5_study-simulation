import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Ganti 'hsk-belajar' dengan nama repo GitHub kamu
export default defineConfig({
  plugins: [react()],
  base: '/hsk_1to5_study-simulation/',
})