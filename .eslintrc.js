module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true
  },
  extends: [
    'eslint:recommended',
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/recommended'
    //'plugin:prettier/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    //'semi': [2, 'never'],
    'no-console': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/max-attributes-per-line': 'off'
    //'prettier/prettier': ['error', {'semi': false, singleQuote: true}]
  },
  globals: {}
}