module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
    NodeJS: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-unused-vars': [
      'error',
      // vue3.2 no-unused-vars 报错修复
      // https://github.com/vuejs/vue-next/blob/master/.eslintrc.js
      { varsIgnorePattern: '.*', args: 'none' },
    ],
    'prettier/prettier': 'error',
    semi: ['error', 'always'],
    'max-len': ['error', { code: 120 }],
    // 开发环境允许debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/multi-word-component-names': 'off',
  },
};
