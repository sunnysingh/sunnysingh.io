module.exports = {
  env: {
    browser: true,
  },
  plugins: ['react'],
  globals: {
    graphql: false,
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 9,
    ecmaFeatures: {
      jsx: true,
    },
  },
};
