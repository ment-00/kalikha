import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Relative paths let the built site run from any folder, including GitHub Pages
  base: './',
  plugins: [react()],
})
