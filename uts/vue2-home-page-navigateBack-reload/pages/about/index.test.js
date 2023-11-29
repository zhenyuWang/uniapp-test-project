// uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/

describe('/pages/about/index', () => {
	it('test', async () => {
		const page = await program.reLaunch('/pages/about/index')
		await page.waitFor('view')
		expect(page.path).toBe('pages/about/index')
	})
});