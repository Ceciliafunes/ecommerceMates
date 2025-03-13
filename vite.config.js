import { defineConfig } from 'vite'



export default defineConfig({
  // Configuración de la construcción
  build: {
    // Opciones de Rollup para personalizar cómo se manejan los chunks
    rollupOptions: {
      output: {
        // Configuración para dividir el código en chunks más pequeños
        manualChunks: {
          vendor: ['react', 'react-dom'], // Estos son los módulos que deseas separar en su propio chunk
        },
      },
    },
    // Opción para aumentar el límite de tamaño de los chunks si prefieres evitar la advertencia
    chunkSizeWarningLimit: 1000, // En KB, ajusta este valor si prefieres un límite mayor (por ejemplo, 1000 KB)
  },

  // Si estás usando rutas base en tu aplicación (por ejemplo, para Vercel o entornos específicos)
  base: '/', // Ajusta esto si estás utilizando una ruta base personalizada, por ejemplo, '/mi-app/'
});
