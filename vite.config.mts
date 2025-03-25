import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import glsl from 'vite-plugin-glsl'
  
  // https://vitejs.dev/config/
  export default defineConfig({
      plugins: [glsl(),react(), ],
      build: {
        outDir: 'dist', // esto debería ser 'dist' o cualquier otra carpeta donde quieras que se genere el build
      }
  });
  