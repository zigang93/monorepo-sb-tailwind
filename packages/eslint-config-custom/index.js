module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'testing-library',
    'jest-dom',
    'unused-imports',
  ],
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
    'plugin:mdx/recommended',
    'turbo',
    'prettier',
  ],
  settings: {
    'mdx/code-blocks': true,
  },
  overrides: [
    {
      files: '*.mdx',
      extends: 'plugin:mdx/recommended',
    },
    {
      files: ['**/*+(test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react', 'plugin:jest-dom/recommended'],
    },
    {
      excludedFiles: ['**/components/**/*.stories.*'],
      files: [
        // 'src/**/*.stories.*',
        // 'src/**/*.page.*',
        // 'src/**/*.api.*',
        // 'src/**/page.ts',
        // 'src/app/**/*',
        // 'src/lib/redux/**/*',
        // 'src/lib/fetch/**/*',
        // 'src/api/**/*',
        // 'tsup.config.ts',
        // 'src/**/*.slice.*',
        // 'src/**/*.handler.*',
        '**/components/**/*',
      ],
      rules: {
        'import/no-default-export': 'error',
      },
    },
  ],
  rules: {
    '@typescript-eslint/no-duplicate-enum-values': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    'no-restricted-imports': [
      'error',
      {
        patterns: ['@mui/*/*/*', '!@mui/material/test-utils/*'],
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        prefix: ['I'],
      },
      {
        selector: 'typeAlias',
        leadingUnderscore: 'allow',
        format: ['PascalCase'],
        prefix: ['T_', 'T'],
      },
      {
        selector: 'enum',
        format: ['PascalCase'],
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE'],
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
}
