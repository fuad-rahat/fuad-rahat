import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Increase chunk size warning limit (optional, for suppression)
    chunkSizeWarningLimit: 1000, // Increases to 1MB to avoid warnings for slightly larger chunks

    rollupOptions: {
      external: ['path/to/homecss.css']
    }
    
  },
})
