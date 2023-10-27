module.exports = {
  'unicorn/better-regex': 'warn',
  'unicorn/catch-error-name': 'warn',
  'unicorn/consistent-function-scoping': ['warn', { checkArrowFunctions: false }],
  'unicorn/custom-error-definition': 'warn',
  'unicorn/empty-brace-spaces': 'warn',
  'unicorn/no-array-push-push': 'warn',
  'unicorn/no-await-expression-member': 'error',
  'unicorn/no-empty-file': 'error',
  'unicorn/no-for-loop': 'warn',
  'unicorn/no-invalid-remove-event-listener': 'error',
  'unicorn/no-unsafe-regex': 'warn',
  'unicorn/no-useless-fallback-in-spread': 'error',
  'unicorn/no-useless-length-check': 'error',
  'unicorn/no-useless-spread': 'error',
  'unicorn/number-literal-case': 'warn',
  'unicorn/prefer-array-find': 'warn',
  'unicorn/prefer-array-some': 'warn',
  'unicorn/prefer-code-point': 'error',
  'unicorn/prefer-date-now': 'warn',
  'unicorn/prefer-default-parameters': 'warn',
  'unicorn/prefer-export-from': 'error',
  'unicorn/prefer-includes': 'warn',
  'unicorn/prefer-object-from-entries': 'warn',
  'unicorn/prefer-optional-catch-binding': 'warn',
  'unicorn/prefer-spread': 'warn',
  'unicorn/prefer-switch': 'warn',
  'unicorn/prefer-ternary': 'warn',
  'unicorn/prefer-top-level-await': 'warn',
  'unicorn/prefer-type-error': 'warn',
  'unicorn/prevent-abbreviations': [
    'warn',
    {
      replacements: {
        acc: false,
        db: false,
        dev: false,
        el: false,
        env: false,
        fn: false,
        param: false,
        params: false,
        prod: false,
        prop: false,
        props: false,
        ref: false,
        refs: false,
        src: false,
        temp: false,
        var: false,
        vars: false,
      },
    },
  ],
  'unicorn/template-indent': 'warn',
  'unicorn/throw-new-error': 'warn',
};