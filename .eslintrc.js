module.exports =  {
  parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends:  [
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions:  {
    ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
    sourceType:  'module',  // Allows for the use of imports
  },
  rules: {
    'react/jsx-filename-extension': [1, {'extensions': ['.js', '.jsx']}],
    'react/jsx-one-expression-per-line': [0, {'extensions': ['.js', '.jsx']}],
    'react/forbid-prop-types': [0, {'extensions': ['.js', '.jsx']}],
    'arrow-body-style': [0],
    'object-curly-newline': [0],
    'import/no-named-as-default': [0],
    'import/named': [0],
  },
  env: {
    'jest': true,
    'browser': true,
  },
};
