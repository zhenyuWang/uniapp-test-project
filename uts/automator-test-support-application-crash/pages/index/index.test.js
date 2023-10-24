describe('pages/index/index', () => {
	let page
	beforeAll(async () => {
		page = await program.reLaunch('/pages/index/index')
		await page.waitFor(1000)
	})
	it('index', async () => {
		await page.waitFor(8000)
		expect(1+1).toEqual(2)
	})

})