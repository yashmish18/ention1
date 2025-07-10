module.exports = {
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/build/', '/static/'],
  setupFilesAfterEnv: ['./tests/setup.js'],
  globals: {
    'NODE_ENV': 'test',
  },
}; 