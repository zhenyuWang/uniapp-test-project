describe('pages/about/index', () => {
	let page
	beforeAll(async () => {
		page = await program.reLaunch('/pages/about/index')
		await page.waitFor(1000)
	})
	it('about', async () => {
		await page.waitFor(8000)
		expect(1+1).toEqual(2)
	})

})