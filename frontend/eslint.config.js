import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default [
  {
    ignores: ['dist', 'build', 'node_modules', '.react-router']
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        jsxPragma: null // React 17+ JSX Transform
      },
      globals: {
        ...globals.browser,
        ...globals.es2020
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint,
      'jsx-a11y': jsxA11y,
      import: importPlugin
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      
      // React specific rules
      'react/react-in-jsx-scope': 'off', // React 17+ 자동 import
      'react/prop-types': 'off', // TypeScript 사용 시 불필요
      'react/jsx-uses-react': 'off', // React 17+ 자동 import
      'react/jsx-uses-vars': 'error',
      'react/jsx-no-target-blank': 'error',
      'react/no-unescaped-entities': 'warn',
      'react/jsx-runtime': 'off', // React 17+ JSX Transform
      
      // React Hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      
      // React Refresh
      'react-refresh/only-export-components': 'off', // Fast refresh 경고 제거
      
      // TypeScript specific rules
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'off', // any 타입 경고 제거
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      
      // Import rules
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index'
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          }
        }
      ],
      'import/no-unresolved': 'off', // TypeScript가 처리
      'import/named': 'off', // TypeScript가 처리
      'import/default': 'off', // TypeScript가 처리
      'import/no-named-as-default-member': 'off', // TypeScript가 처리
      
      // General rules
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-unused-vars': 'off', // TypeScript rule 사용
      'prefer-const': 'error',
      'no-var': 'error',
      'eqeqeq': 'error',
      'curly': 'error'
    },
    settings: {
      react: {
        version: 'detect'
      },
      'import/resolver': {
        typescript: true,
        node: true
      }
    }
  }
]; 
