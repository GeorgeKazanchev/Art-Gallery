module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.app.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
  ],
  ignorePatterns: [
    'dist',
    'vite.config.ts',
  ],
  rules: {
    //  Следующее правило нужно, чтобы присваивание значения state-у
    //  в редьюсерах RTK не приводило к ошибке ESLint
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state',
      ],
    }],
  },
};
