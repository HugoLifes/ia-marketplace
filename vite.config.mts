import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import glsl from 'vite-plugin-glsl'

  // https://vitejs.dev/config/
  export default defineConfig({
      plugins: [glsl(),react()],
      build: {
        outDir: 'dist',
        rollupOptions: {
          output: {
            manualChunks(id) {
              if (id.includes('node_modules')) {
                if (id.includes('three')) {
                  return 'threejs';
                }
                if (id.includes('react')) {
                  return 'react-vendor';
                }
                return 'vendor';
              }
            },
          },
        }, // esto debería ser 'dist' o cualquier otra carpeta donde quieras que se genere el build
        chunkSizeWarningLimit: 1000,
      },
      base: './',
      server: {
        allowedHosts: ['.ngrok-free.app']
      }
  });
  