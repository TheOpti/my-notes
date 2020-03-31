module.exports = {
  testEnvironment: 'node',
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.js?$',
  moduleNameMapper: {
    'src/(.*)$': '<rootDir>/src/$1',
  },
}