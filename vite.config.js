import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react({
    jsxRuntime: 'automatic' // Esto habilita el JSX transform automático
  })],
  test: {
    environment: 'jsdom', // <- Esto es lo importante
    globals: true, // Opcional, útil para evitar tener que importar describe/it/expect
  },
});