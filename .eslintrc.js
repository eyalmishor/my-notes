module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "comma-dangle": ["error", "never"],
    "no-param-reassign": ["error", { "props": false }],
    "quotes": ["error", "double"]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}