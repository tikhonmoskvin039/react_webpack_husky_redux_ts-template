import pluginJs from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import jsxA11AllyPlugin from 'eslint-plugin-jsx-a11y'

// ! Даст подсказки для типов из конфига
/**@type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    rules: {
      ...eslintConfigPrettier.rules,
      'prefer-const': 'error',
      semi: 'error',
      'react/react-in-jsx-scope': ['off'],
      'react/jsx-uses-react': ['off'],
      'no-unused-vars': 'warn',
      'no-await-in-loop': 0,
      'no-undef': 0,
      'no-return-assign': ['error', 'except-parens'],
      'no-restricted-syntax': [
        2,
        'ForInStatement',
        'LabeledStatement',
        'WithStatement',
      ],
      'prefer-const': [
        'error',
        {
          destructuring: 'all',
        },
      ],
      'arrow-body-style': [2, 'as-needed'],
      'no-unused-expressions': [
        1,
        {
          allowTaggedTemplates: true,
        },
      ],
      'no-param-reassign': [
        2,
        {
          props: false,
        },
      ],
      'import/prefer-default-export': 0,
      import: 0,
      'func-names': 0,
      'space-before-function-paren': 0,
      'comma-dangle': 0,
      'max-len': 0,
      'import/extensions': 0,
      'no-underscore-dangle': 0,
      'consistent-return': 0,
      'react/no-array-index-key': 0,
      'react/prefer-stateless-function': 0,
      'react/forbid-prop-types': 0,
      'react/no-unescaped-entities': 0,
      'react/function-component-definition': 0,
      'jsx-a11y/accessible-emoji': 0,
      'jsx-a11y/label-has-associated-control': [
        'error',
        {
          assert: 'either',
        },
      ],
      'react/require-default-props': 0,
      radix: 0,
      'no-shadow': [
        2,
        {
          hoist: 'all',
          allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
        },
      ],
      'prettier/prettier': [
        'error',
        {
          trailingComma: 'es5',
          // below line only for windows users facing CLRF and eslint/prettier error
          // non windows users feel free to delete it
          endOfLine: 'auto',
        },
      ],
      'jsx-a11y/href-no-hash': 'off',
      'jsx-a11y/anchor-is-valid': [
        'warn',
        {
          aspects: ['invalidHref'],
        },
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/comma-dangle': ['off'],
    },
  },
  {
    plugins: {
      'react-hooks': eslintReactHooks,
      'react': pluginReact.configs.flat.recommended,
      'react-refresh': eslintReactRefresh,
      prettier: prettierPlugin,
      'jsx-a11y': jsxA11AllyPlugin
    },
  },
  {
    ignores: ['node_modules', 'dist'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2024,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
