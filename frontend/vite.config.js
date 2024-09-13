import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/blog-app/',
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        '/blog-app/assets/index-BXGh_3uy.js',
      ],
    },
  },
})
