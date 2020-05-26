module.exports = {
  env: {
    browser: true,
  },
  plugins: ['react'],
  globals: {
    graphql: false,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 11,
    ecmaFeatures: {
      jsx: true,
    },
  },
};
