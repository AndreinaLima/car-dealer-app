module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,  // Permite o uso de process.env
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
      'react/prop-types': 'off', // Desativa a validação de PropTypes
    },
  };
  