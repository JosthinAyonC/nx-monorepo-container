const js = require('@eslint/js');
const globals = require('globals');
const reactHooks = require('eslint-plugin-react-hooks');
const reactRefresh = require('eslint-plugin-react-refresh');
const prettier = require('eslint-plugin-prettier');
const tseslint = require('typescript-eslint');

module.exports = tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
    ],
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'prettier': prettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'error',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'prettier/prettier': 'error',
      "sort-imports": ["warn", { "ignoreCase": true, "ignoreDeclarationSort": true }]
    },
  },
);
