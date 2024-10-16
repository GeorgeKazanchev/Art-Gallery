import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
  ],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    }
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        dir: 'dist/',
        entryFileNames: 'index.js',
        assetFileNames: 'style.css',
        chunkFileNames: 'chunk.js',
        manualChunks: undefined,
      },
    },
  },
});
