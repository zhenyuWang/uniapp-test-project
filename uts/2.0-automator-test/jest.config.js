module.exports = {
    testTimeout: 10000,
    reporters: [
        'default'
    ],
    watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/.git/'],
    moduleFileExtensions: ['js', 'json'],
    rootDir: __dirname,
    testMatch: ["<rootDir>/pages/index/test-web-view-fullpage-screenshot.test.js"],
    setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
    testPathIgnorePatterns: ['/node_modules/']
}
