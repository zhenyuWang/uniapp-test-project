describe('pages/index/index', () => {
	let page
	beforeAll(async () => {
		page = await program.reLaunch('/pages/index/index')
		console.log('page-------------',page)
		await page.waitFor(1000)
	})
	it('test', async () => {
		expect(2).toEqual(2)
	})
})