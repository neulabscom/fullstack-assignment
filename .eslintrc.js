module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'jsx-a11y',
    'eslint-plugin-prettier',
    'simple-import-sort',
    'react',
  ],
  env: {
    es6: true,
    node: true,
  },
  ignorePatterns: ['node_modules'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'simple-import-sort/imports': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'jsx-a11y/anchor-is-valid': 'off',
  },
  overrides: [
    {
      files: '*.mdx',
      extends: 'plugin:mdx/recommended',
    },
  ],
};
