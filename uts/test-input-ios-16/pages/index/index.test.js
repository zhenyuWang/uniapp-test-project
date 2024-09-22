describe('test title', () => {
    let page;
    beforeAll(async () => {
        page = await program.navigateTo('/pages/index/index');
        // page = await program.currentPage();
        await page.waitFor('view');
    });

    it('test input', async () => {
        const myInput = await page.$('#my-input');
        expect(await myInput.value()).toEqual('1');
        // await program.tap({x: 100, y: 100})
        await program.tap({x: 100, y: 50})
        // await program.tap({x: 30, y: 250})
        await page.waitFor(1000);
        await program.keyboardInput('.2')
        await page.waitFor(1000);
        await program.tap({x: 100, y: 800})
        expect(await myInput.value()).toEqual('1.2');
    });
});
