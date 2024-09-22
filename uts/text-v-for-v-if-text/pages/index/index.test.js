describe('test title', () => {
    let page;
    beforeAll(async () => {
        page = await program.currentPage();
        await page.waitFor(3000);
    });
    it('testTap', async () => {
      await program.tap({
        x: 200,
        y: 400,
        duration: 350
      });
    })
});
