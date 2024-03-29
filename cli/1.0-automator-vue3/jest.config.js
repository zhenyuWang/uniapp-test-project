module.exports = {
  globalTeardown: '@dcloudio/uni-automator/dist/teardown.js',
  testEnvironment: '@dcloudio/uni-automator/dist/environment.js',
  testEnvironmentOptions: {
    h5: {
      options: {
        headless: false, // 配置是否显示 puppeteer 测试窗口
      },
    },
    "app-plus": { // 需要安装 HBuilderX
			android: {
				appid: "", //自定义基座测试需配置manifest.json中的appid
				package: "", //自定义基座测试需配置Android包名
				executablePath: "/Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/launcher/base/android_base.apk" // apk 目录或自定义调试基座包路径
			}
		},
  },
  testTimeout: 15000,
  reporters: [
    'default'
  ],
  watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/.git/'],
  moduleFileExtensions: ['js', 'json'],
  rootDir: __dirname,
  testMatch: ['<rootDir>/src/**/*test.[jt]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/']
}
