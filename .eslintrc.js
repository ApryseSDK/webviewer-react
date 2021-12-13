module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'import'],
  rules: {
    quotes: [
      0,
      'single',
      {
        allowTemplateLiterals: true
      }
    ],
    curly: [2, 'multi'],
    strict: [2, 'never'],
    semi: [2, 'always'],
    'no-redeclare': [
      2,
      {
        builtinGlobals: true
      }
    ],
    "ban-ts-ignore": false,
    'brace-style': 2,
    'no-alert': 0,
    'no-console': [
      0,
      {
        allow: ['warn', 'error']
      }
    ],
    'object-shorthand': [2, 'always'],
    'arrow-parens': [2, 'as-needed'],
    'no-useless-escape': 0,
    eqeqeq: 2,
    'jsx-quotes': 2,
    indent: [
      2,
      2,
      {
        MemberExpression: 1,
        ArrayExpression: 1,
        ImportDeclaration: 1,
        SwitchCase: 1,
        FunctionExpression: {
          body: 1
        }
      }
    ],
    'keyword-spacing': 2,
    'no-constant-condition': 1,
    'space-before-blocks': 2,
    'arrow-spacing': 2,
    'object-curly-spacing': [2, 'always'],
    'react/jsx-closing-bracket-location': 2,
    'react/jsx-curly-spacing': 2,
    'react/jsx-boolean-value': 2,
    'react/prop-types': 2,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'react/sort-comp': 0,
    'react/no-find-dom-node': 0,
    'react/display-name': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-dynamic-require': 0,
    '@pdftron/webviewer/no-string-events': 0,
    'space-infix-ops': ['error', { int32Hint: false }],
    'no-use-before-define': 0,
    'implicit-arrow-linebreak': 0,
    'operator-linebreak': 0,
    'function-paren-newline': 0,
    'object-curly-newline': 0,
    'no-empty-function': 1,
    'no-nested-ternary': 0,
    'no-unexpected-multiline': 0,
    'no-unused-expressions': 0
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    }
  }
};
