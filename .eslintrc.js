module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
    jest: true,
    mocha: true,
  },
  parser: "@babel/eslint-parser",
  globals: {
    cy: true,
    Cypress: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "jest"],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'react/jsx-one-expression-per-line': 'off',
    'global-require': 'off',
    'react-native/no-raw-text': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-props-no-spreading': 'off',
    camelcase: 'off',
    'no-console': ['error', { allow: ['tron'] }],
    'react/forbid-prop-types': 'off',
    'react/require-default-props': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
  },
};
