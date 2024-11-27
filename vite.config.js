import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Increase chunk size warning limit (optional, for suppression)
    chunkSizeWarningLimit: 1000, // Increases to 1MB to avoid warnings for slightly larger chunks

    rollupOptions: {
      output: {
        manualChunks(id) {
          // Check if the file is in node_modules
          if (id.includes('node_modules')) {
            const packageName = id.split('node_modules/')[1].split('/')[0];
            if (['react', 'react-dom'].includes(packageName)) {
              return 'react-vendor'; // React code goes into a separate chunk
            }
            return 'vendor'; // Other third-party code goes into a "vendor" chunk
          }
        },
      },
    },
    
  },
})
