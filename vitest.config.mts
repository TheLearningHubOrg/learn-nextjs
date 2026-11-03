import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    // Mirror the "@/*" path alias from tsconfig.json.
    alias: { '@': fileURLToPath(new URL('./', import.meta.url)) },
  },
  test: {
    // Component tests need a DOM. Files that test server code opt into
    // the node environment with a `// @vitest-environment node` comment.
    environment: 'jsdom',
    setupFiles: ['./test/setup.ts'],
    include: ['test/**/*.test.{ts,tsx}'],
    clearMocks: true,
    restoreMocks: true,
  },
});
