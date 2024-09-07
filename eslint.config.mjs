import pluginJs from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import autofixPlugin from 'eslint-plugin-autofix';
import importPlugin from 'eslint-plugin-import';
import eslintConfigPrettier from 'eslint-config-prettier';
import jsxA11AllyPlugin from 'eslint-plugin-jsx-a11y';
import stylisticJs from '@stylistic/eslint-plugin-js';
import stylisticJsx from '@stylistic/eslint-plugin-jsx';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import parserTs from '@typescript-eslint/parser';
import { fixupPluginRules } from '@eslint/compat';

// TODO Включите поддержку flat config esLint в вашей IDE

// ! Даст подсказки для типов из конфига
/**@type {import('eslint').Linter.Config[]} */
export default tseslint.config(
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    rules: {
      ...eslintReactHooks.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      semi: 'error',
      '@typescript-eslint/no-explicit-any': 2,
      'react/react-in-jsx-scope': ['off'],
      'react/jsx-uses-react': ['off'],
      'no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          caughtErrors: 'all',
          ignoreRestSiblings: false,
          reportUsedIgnorePattern: false,
        },
      ],
      'autofix/no-debugger': 'error',
      'autofix/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
          destructuredArrayIgnorePattern: '^_',
        },
      ],
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
      'func-names': ['error', 'as-needed'],
      'space-before-function-paren': ['off'],
      'max-len': [
        'warn',
        { code: 100 },
        { ignoreComments: true },
        { tabWidth: 4 },
      ],
      'import/extensions': 0,
      'no-underscore-dangle': ['error', { allowFunctionParams: true }],
      'consistent-return': ['error'],
      'react/no-array-index-key': 0,
      'react/prefer-stateless-function': 0,
      'react/forbid-prop-types': 0,
      'react/no-unescaped-entities': 0,
      'react/function-component-definition': 0,
      'jsx-a11y/accessible-emoji': 0,
      'arrow-body-style': ['error', 'as-needed'],
      'jsx-a11y/label-has-associated-control': [
        'error',
        {
          assert: 'either',
        },
      ],
      'react/require-default-props': 0,
      radix: ['error', 'as-needed'],
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
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          pathGroups: [
            {
              pattern: '@/**/**',
              group: 'parent',
              position: 'before',
            },
          ],
          alphabetize: { order: 'asc' },
        },
      ],
      'react-hooks/rules-of-hooks': ['error'],
      'react-hooks/exhaustive-deps': ['error'],
      '@typescript-eslint/comma-dangle': ['off'],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
        },
      ],
      '@stylistic/jsx/jsx-self-closing-comp': [
        'error',
        {
          component: true,
          html: true,
        },
      ],
      '@stylistic/ts/indent': ['error', 2],
    },
  },

  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: pluginReact.configs.flat.recommended,
      'react-hooks': fixupPluginRules(eslintReactHooks),
      'react-refresh': eslintReactRefresh,
      prettier: prettierPlugin,
      'jsx-a11y': jsxA11AllyPlugin,
      '@stylistic/js': stylisticJs,
      '@stylistic/jsx': stylisticJsx,
      '@stylistic/ts': stylisticTs,
      autofix: autofixPlugin,
      import: importPlugin,
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
      parserOptions: [
        pluginReact.configs.recommended.parserOptions,
        'tsconfig.json',
        parserTs.parse,
      ],
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
);
