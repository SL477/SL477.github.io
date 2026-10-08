import { defineConfig } from 'eslint/config';
import eslintPluginAstro from 'eslint-plugin-astro';

export default defineConfig([
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: eslintPluginAstro.parser,
    },
  },
  {
    rules: {
      'prefer-const': 'error',
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'linebreak-style': ['error', 'windows'],
      quotes: ['error', 'single'],
      eqeqeq: 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'no-console': 'off'
    },
  },
  {
    ignores: [
      '_site/*',
      'assets/js/components/my-navbar2.js',
      'public/odinProject/restaurantPage/main.js',
      'assets/js/webMentions.js',
      'assets/js/search.js',
      'public/assets/js/iine.mini.js',
      'dist/',
      'old/',
      'node_modules/',
      'public/pagefind/',
      '.astro/'
    ]
  },
]);
