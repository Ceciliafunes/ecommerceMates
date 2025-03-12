import { defineConfig } from 'vite';  
import react from '@vitejs/plugin-react';  

export default defineConfig({  
  plugins: [react()],  
  base: '/', // Asegúrate de que esta línea esté correctamente configurada  
  build: {  
    outDir: 'dist',  
  },  
});  