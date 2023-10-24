describe('pages/setting/index', () => {
	let page
	beforeAll(async () => {
		page = await program.reLaunch('/pages/setting/index')
		await page.waitFor(1000)
	})
	it('setting', async () => {
		await page.waitFor(8000)
		expect(1+1).toEqual(2)
	})

})