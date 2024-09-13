import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/blog-app/',
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        "/blog-app/assets/index-bjI_iJDI.js",
      ],
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        publicPath: '/blog-app/', // Ensure the base path is applied to all asset paths
      },
    },
  },
})
