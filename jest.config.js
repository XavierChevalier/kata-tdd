module.exports = {
  preset: 'ts-jest',
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.ts', '!**/*.d.ts', '!**/*.spec.ts'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
};
