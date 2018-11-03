module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  },
  testMatch: ['**/Components/**.test.+(ts|tsx|js)'],
  setupFiles: ['./setupTests.js'],
  coverageReporters: ['cobertura', 'html', 'lcov'],
  collectCoverage: true,
  collectCoverageFrom: [
    'Components/**/*.tsx',
    '!Components/**/*.story.tsx',
    '!Components/**/*.test.tsx',
    '!Components/**/__tests__/**/*'
  ]
};
