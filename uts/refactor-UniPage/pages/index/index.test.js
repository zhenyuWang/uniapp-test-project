describe('index', () => {

    let page;
    beforeAll(async () => {
        page = await program.currentPage();
        await page.waitFor('view');
    });

    it('basic', async () => {
        const goAboutBtn = await page.$('#go-about');
        const offset = await goAboutBtn.offset()
        console.log('111111111111 offset', offset)
        await program.tap({x: 100, y: 100})
    });
});
