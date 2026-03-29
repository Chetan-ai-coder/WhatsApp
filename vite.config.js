import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    target: 'esnext',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
        },
      },
    },
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=3600',
    },
  },
  preview: {
    port: 4173,
    strictPort: false,
    headers: {
      'Cache-Control': 'public, max-age=3600',
    },
  },
})
