import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Make sure this is the correct output directory for your build
    sourcemap: true,  // Optional: helps with debugging if needed
  },
})
