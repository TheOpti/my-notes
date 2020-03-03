module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    }
  },
  rules: {
    '@typescript-eslint/no-empty-function': 0
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};