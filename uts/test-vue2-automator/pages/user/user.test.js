describe('pages/user/index', () => {
	let page
	beforeAll(async () => {
		page = await program.reLaunch('/pages/user/index')
		await page.waitFor(1000)
	})
	it('user', async () => {
		await page.waitFor(8000)
		expect(1+1).toEqual(2)
	})

})