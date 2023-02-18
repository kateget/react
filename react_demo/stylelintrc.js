export default {
  extends: ['stylelint-config-standard', 'stylelint-config-rational-order'],
  plugins: ['stylelint-order', 'stylelint-declaration-block-no-ignored-properties'],
  rules: {
    'plugin/declaration-block-no-ignored-properties': true,
    'comment-empty-line-before': undefined,
    'declaration-empty-line-before': undefined,
    'function-name-case': 'lower',
    'no-descending-specificity': undefined,
    'no-invalid-double-slash-comments': undefined,
    'rule-empty-line-before': 'always',
  },
  ignoreFiles: ['node_modules/**/*', 'build/**/*'],
};
