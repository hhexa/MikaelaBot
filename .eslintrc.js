module.exports = {
  env: {
    es6: true,
    node: true
  },
  rules: {
    '@typescript-eslint/no-require-imports': ['off'],
    'no-return-assign': ['off'],
    'no-param-reassign': ['off'],
    'import/no-default-export': ['warn'],
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        overrides: {
          accessors: 'explicit',
          constructors: 'no-public',
          methods: 'off',
          properties: 'explicit',
          parameterProperties: 'explicit'
        }
      }
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'snake_case']
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow'
      },

      {
        selector: 'typeLike',
        format: ['PascalCase']
      }
    ],
    '@typescript-eslint/no-parameter-properties': ['off'],
    'max-params': ['off'],
    'no-unused-vars': ['off'],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'off',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }
    ]
  },
  plugins: ['import', 'unused-imports'],
  extends: ['alloy', 'alloy/typescript', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser'
};
