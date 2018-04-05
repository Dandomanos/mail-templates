module.exports = {
  root: true,
  extends: ['eslint:recommended', 'standard', 'prettier', 'prettier/standard'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-var': 1,
    'prefer-const': 1,
    'no-console': 1,

    // TODO: Remove rules above this
    eqeqeq: 0,
  },
}
