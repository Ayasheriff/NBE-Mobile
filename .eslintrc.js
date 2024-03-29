// module.exports = {
//   root: true,
//   extends: '@react-native-community',
// };

module.exports = {
  root: true,
  extends: ['plugin:react/recommended', 'plugin:react-native/all'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-native'],
  rules: {
    'react-native/no-inline-styles': 1,
    'react-native/no-color-literals': 0,
    'react-native/sort-styles': 0,
    'react/prop-types': 0,
    curly: ['off'],
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-empty': 'error',
    'no-alert': 'error',
    'no-duplicate-imports': 'error',
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'max-lines': ['warn', 1000],
    'no-var': 'error',
    // eqeqeq: ['error', 'always'],
    'no-debugger': 'error',
    'no-undefined': 'error',
    'no-unused-vars': 'error',
    quotes: ['warn', 'single', 'avoid-escape'],
    'newline-before-return': 'warn',
    'lines-between-class-members': ['error', 'always'],
  },
};

// no functions inside onpress
// arrow functions only
//order imports before eachother
//destructure props
// destructuring order
//
