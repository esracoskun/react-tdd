module.exports = {
  extends: [
    "codingitwrong",
    "plugin:cypress/recommended"
  ],
  parser: "@babel/eslint-parser",
  plugins: [
    "cypress",
    "jest",
    "react",
  ],
  env: {
    "browser": true,
    "jest/globals": true
  }
}