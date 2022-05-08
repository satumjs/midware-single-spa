module.exports = {
  transform: { '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest' },
  testTimeout: 30000,
  coverageReporters: ['json', 'text', 'html', 'lcov', 'clover'],
  testEnvironment: 'jsdom'
};