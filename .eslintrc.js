module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'class-methods-use-this': 'off',
    'no-underscore-dangle': 'off',
    'arrow-parens': 'off',
    'import/prefer-default-export': 'off',
    'max-classes-per-file': ['error', 2],
    'consistent-return': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  },
};
