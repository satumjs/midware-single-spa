module.exports = {
  transform: { '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest' },
  testTimeout: 30000,
  coverageReporters: ['text', 'html', 'lcov'],
  testEnvironment: 'jsdom'
};