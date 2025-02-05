import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: [
      '945a-177-241-166-16.ngrok-free.app',  // Agrega aquí el host proporcionado por ngrok
      'localhost',  // Puedes también permitir localhost
      '127.0.0.1',  // Asegúrate de permitir 127.0.0.1
    ],
  },
  plugins: [react()],
  base: './',
  build: {
    minify: 'terser', // Usa Terser para minimizar JS
    sourcemap: false, // Desactiva mapas de fuente en producción
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Divide dependencias grandes
        },
      },
    },
  },
})
