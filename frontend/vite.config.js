import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/blog-app/',
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react-router-dom',
        'react-query',
        'react-markdown',
        'react-syntax-highlighter',
      ],
    },
  },
})
