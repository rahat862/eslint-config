module.exports = {
  extends: ['plugin:vitest/recommended'],
  rules: {
    'vitest/consistent-test-it': 'warn',
    'vitest/no-alias-methods': 'warn',
    'vitest/no-conditional-expect': 'warn',
    'vitest/no-done-callback': 'error',
    'vitest/no-focused-tests': 'error',
    'vitest/no-interpolation-in-snapshots': 'warn',
    'vitest/no-mocks-import': 'warn',
    'vitest/no-standalone-expect': 'warn',
    'vitest/no-test-prefixes': 'warn',
    'vitest/no-test-return-statement': 'warn',
    'vitest/prefer-hooks-in-order': 'warn',
    'vitest/prefer-spy-on': 'warn',
    'vitest/prefer-to-contain': 'warn',
    'vitest/prefer-to-have-length': 'warn',
    'vitest/prefer-expect-resolves': 'warn',
  },
};