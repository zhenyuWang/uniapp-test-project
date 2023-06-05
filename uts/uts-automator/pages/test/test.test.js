describe('pages/test/test', () => {
    let page
    beforeAll(async () => {
        page = await program.reLaunch('/pages/test/test')
        await page.waitFor(1000)
    })
    it('css', async () => {
        const image = await program.screenshot()
        expect(image).toMatchImageSnapshot();
    })

})