module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['node_modules'],
  globals: {
    window: true,
  },
};