module.exports = {
  extends: ['airbnb', 'prettier'],
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  plugins: ['react', 'jsx-a11y', 'import', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jsx-a11y/href-no-hash': 0,
    'react/jsx-closing-tag-location': 0,
    'react/jsx-curly-brace-presence': 0,
  },
};
