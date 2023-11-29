module.exports = {
	testEnvironmentOptions: {
		compile: true,
		h5: { 
			options: {
				headless: false // 配置是否显示 puppeteer 测试窗口
			}
		}
	},
    testTimeout: 10000,
    reporters: [
        'default'
    ],
    watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/.git/'],
    moduleFileExtensions: ['js', 'json'],
    rootDir: __dirname,
    testMatch: ["<rootDir>/pages/index/index.test.js"],
    testPathIgnorePatterns: ['/node_modules/']
}
