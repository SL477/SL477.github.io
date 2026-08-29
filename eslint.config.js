import { defineConfig } from 'eslint/config';

export default defineConfig([
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
      'my-navbar.js',
      'assets/js/jspiano/audiosynth.js',
      'assets/js/jspiano/playKeyboard.js',
      'assets/js/components/my-navbar2.js',
      'odinProject/restaurantPage/main.js',
      'assets/js/webMentions.js',
      'assets/js/search.js',
      'assets/js/iine.mini.js'
    ]
  }
]);
