
import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default defineConfig([
  // Ignore generated files and dependency directories.
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/coverage/**',
      '**/.next/**',
      '**/out/**',
      '**/generated/**',
      '**/pnpm-lock.yaml',
    ],
  },

  // Recommended JavaScript rules.
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    extends: [js.configs.recommended],
  },

  // Browser globals for frontend learning and applications.
  {
    files: [
      'learning/**/*.{js,jsx,ts,tsx}',
      'apps/web/**/*.{js,jsx,ts,tsx}',
      'packages/ui/**/*.{js,jsx,ts,tsx}',
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },

  // Node.js globals for backend applications and root configuration.
  {
    files: [
      'apps/api/**/*.{js,mjs,cjs,ts,mts,cts}',
      'apps/worker/**/*.{js,mjs,cjs,ts,mts,cts}',
      '*.config.{js,mjs,cjs}',
      'eslint.config.js',
    ],
    languageOptions: {
      globals: globals.node,
    },
  },

  // Recommended TypeScript rules.
  {
    files: ['**/*.{ts,mts,cts,tsx}'],
    extends: [tseslint.configs.recommended],
  },

  // Keep Prettier responsible for formatting.
  eslintConfigPrettier,
]);
