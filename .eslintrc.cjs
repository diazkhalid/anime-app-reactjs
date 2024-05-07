module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    "react/react-in-jsx-scope": "off",
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "all",
        "tabWidth": 2,
        "semi": true,
        "singleQuote": true,
        "bracketSpacing": true,
        "eslintIntegration": true,
        "printWidth": 120,
        "endOfLine": "auto"
      }
    ],
    'react/prop-types' : 'off',
  },
}
