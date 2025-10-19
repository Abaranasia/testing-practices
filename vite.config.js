import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react({
    jsxRuntime: 'automatic' // This enables JSX transform 
  })],
  test: {
    include: ['**/*.test.tsx'],
    environment: 'jsdom', // Required to be able to use render and screen in vitest
    globals: true, // To avoid importing describe/it/expect
     setupFiles: ['./setupTests.ts'], 
  },
});