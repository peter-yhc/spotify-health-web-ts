module.exports = {
  'extends': 'airbnb',
  'env': {
    'jest': true,
    'browser': true,
  },
  'rules': {
    'react/jsx-filename-extension': [1, {'extensions': ['.js', '.jsx']}],
    'react/jsx-one-expression-per-line': [0, {'extensions': ['.js', '.jsx']}],
    'react/forbid-prop-types': [0, {'extensions': ['.js', '.jsx']}],
    'arrow-body-style': [0],
    'object-curly-newline': [0],
    'import/no-named-as-default': [0],
    'import/named': [0],
  },
};