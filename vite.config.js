import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], // Plugins go here, not inside build
  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 1000, // Increase warning limit to 1000 kB (1MB)
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // all dependencies in one chunk named "vendor"
          }
          if (id.includes('src/components')) {
            return 'components'; // all components in one chunk named "components"
          }
        },
        sourcemapExcludeSources: true,
      }
    }
  }
});
