/** @type {import('jest').Config} */

const config = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts[x]'],
  coverageReporters: ['lcov'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/**/__tests__/**/*.ts?(x)', '**/*.(spec|test).ts?(x)'],
  transform: {
    '^/.+\\.ts$': 'ts-jest'
  },
  moduleDirectories: ['node_modules', 'src'],
  modulePaths: ["<rootDir>/src"],
  testPathIgnorePatterns: ['node_modules/']
}

export default config
