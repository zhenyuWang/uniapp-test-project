module.exports = {
	globalTeardown: '@dcloudio/uni-automator/dist/teardown.js',
	testEnvironment: '@dcloudio/uni-automator/dist/environment.js',
	testEnvironmentOptions: {
		compile: true,
		h5: {
			options: {
				headless: false // 配置是否显示 puppeteer 测试窗口
			}
		},
		"app-plus": { // 需要安装 HBuilderX
			android: {
				appid: "", //自定义基座测试需配置manifest.json中的appid
				package: "", //自定义基座测试需配置Android包名
				executablePath: "/Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniappx-launcher/base/android_base.apk" // apk 目录或自定义调试基座包路径
			},
			ios: {
				// uuid 必须配置，目前仅支持模拟器，可以（xcrun simctl list）查看要使用的模拟器 uuid
				id: "F01B89BE-6BA8-43FA-AC54-442BC6BD4937",
				executablePath: "/Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniappx-launcher/base/Pandora_simulator.app" // ipa 目录
			}
		},
		"mp-weixin": {
			port: 9420, // 默认 9420
			account: "", // 测试账号
			args: "", // 指定开发者工具参数
			cwd: "", // 指定开发者工具工作目录
			launch: true, // 是否主动拉起开发者工具
			teardown: "disconnect", // 可选值 "disconnect"|"close" 运行测试结束后，断开开发者工具或关闭开发者工具
			remote: false, // 是否真机自动化测试
			executablePath: "", // 开发者工具cli路径，默认会自动查找,  windows: C:/Program Files (x86)/Tencent/微信web开发者工具/cli.bat", mac: /Applications/wechatwebdevtools.app/Contents/MacOS/cli
		},
		"mp-baidu": {
			port: 9430, // 默认 9430
			args: "", // 指定开发者工具参数
			cwd: "", // 指定开发者工具工作目录
			launch: true, // 是否主动拉起开发者工具
			teardown: "disconnect", // 可选值 "disconnect"|"close" 运行测试结束后，断开开发者工具或关闭开发者工具
			remote: false, // 是否真机自动化测试
			executablePath: "", // 开发者工具cli路径，默认会自动查找
		}
	},
	testTimeout: 15000,
	reporters: [
		'default'
	],
	watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/.git/'],
	moduleFileExtensions: ['js', 'json'],
	rootDir: __dirname,
	testMatch: ['<rootDir>/src/**/*test.[jt]s?(x)'], // 测试文件目录
	testPathIgnorePatterns: ['/node_modules/']
}