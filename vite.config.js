
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  preview: {
    host: '0.0.0.0',
    port: 4173,
    allowedHosts: ['my-portfolio-kz9g.onrender.com'],
  },

  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
