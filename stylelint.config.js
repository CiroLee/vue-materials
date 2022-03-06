module.exports = {
  defaultSeverity: 'error',
  extends: ['stylelint-config-standard', 'stylelint-config-standard-scss', 'stylelint-config-recommended-vue'],
  plugins: ['stylelint-scss'],
  rules: {
    // 兼容bem命名
    'selector-class-pattern': '^[-_a-zA-Z0-9]*$',
    'color-function-notation': 'legacy',
    'string-quotes': 'single',
    'rule-empty-line-before': [
      'always',
      {
        except: ['inside-block'],
      },
    ],
  },
};
