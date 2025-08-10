import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portafolio-Desarrollo-Web/', // 👈 Muy importante para GitHub Pages
})
