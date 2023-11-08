// uni-app自动化测试教程: uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/

describe('test title', () => {
    let page;
    beforeAll(async () => {
    	page = await program.reLaunch('/pages/index/index')
    	await page.waitFor(1000)
    })

    it('check page title', async () => {
        const el = await page.$('.title');
        const titleText = await el.text();
        expect(titleText).toEqual('Hello');
				console.log('111111111111111111111111')
    });
});
