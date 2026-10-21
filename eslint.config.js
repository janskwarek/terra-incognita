import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
  {
    files: ['backend/my-strapi-project/**/*.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    files: [
      'backend/my-strapi-project/config/**/*.js',
      'backend/my-strapi-project/src/index.js',
      'backend/my-strapi-project/src/admin/vite.config.example.js',
    ],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
])
