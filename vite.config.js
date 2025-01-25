import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // atau '0.0.0.0'
    port: 3000, // Opsional, ganti dengan port yang diinginkan
  },
  plugins: [react()]
})
