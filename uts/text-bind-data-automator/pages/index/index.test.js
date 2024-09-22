// uni-app自动化测试教程: uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/

describe('test title', () => {

    let page;
    beforeAll(async () => {
        page = await program.currentPage();
        await page.waitFor(3000);
    });

    it('test change title', async () => {
        const title = await page.$('.title');
        expect(await title.text()).toEqual('Hello')
        
        const changeTitleBtn = await page.$('#change-title-btn')
        await changeTitleBtn.tap()
        expect(await title.text()).toEqual('Hello1')
        
        await changeTitleBtn.tap()
        expect(await title.text()).toEqual('Hello11')
        await changeTitleBtn.tap()
        expect(await title.text()).toEqual('Hello111')
    });
});
