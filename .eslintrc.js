module.exports = {
  extends: 'airbnb',

  plugins: [],
  extends: 'eslint:recommended',

  rules: {
    'linebreak-style': 0,
    'no-console': 'off',
    semi: ['error', 'always'],
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: 'should|expect'
      }
    ]
  },

  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },

  env: {
    node: true,
    es6: true,
    commonjs: true,
    browser: true,
    amd: true,
    mocha: true
  }
};
