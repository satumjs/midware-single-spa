module.exports = {
  transform: { '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest' },
  testTimeout: 30000,
  coverageReporters: ['text', 'html'],
  testEnvironment: 'jsdom'
};