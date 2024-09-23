import globals from 'globals';
import js from '@eslint/js';
import ts from 'typescript-eslint';
import react from 'eslint-plugin-react';
import stylisticJs from '@stylistic/eslint-plugin-js';

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  react.configs.flat.recommended,
  { ignores: ['**/node_modules/*', '**/.git/*', '**/public/lib/*', '**/build/*'] },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    languageOptions: {
      ...react.configs.flat.recommended.languageOptions,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      }
    },
    plugins: {
      react,
      '@stylistic/js': stylisticJs
    },
    rules: {
      '@stylistic/js/indent': ['error', 2, { 'SwitchCase': 1 }], // Tab indentation (size of 2 spaces)
      '@stylistic/js/quotes': ['error', 'single', { 'allowTemplateLiterals': true }], // `'` instead of `"`
      'curly': 'error', // Curly braces for block statements
      '@stylistic/js/brace-style': 'error', // 1TBS brace style
      '@stylistic/js/semi': ['error', 'always'], // Semicolon at the end of each statement
      'object-shorthand': ['error', 'always'], // Object shorthand for ES6
      '@stylistic/js/arrow-parens': ['error', 'always'], // Parenthesis around arrow function argument

      // Minimum line breaks
      '@stylistic/js/keyword-spacing': 'error',
      '@stylistic/js/no-multiple-empty-lines': 'error',

      'strict': ['error', 'never'] // No `use strict`
    },
    settings: {
      react: { version: 'detect' }
    }
  }
];
