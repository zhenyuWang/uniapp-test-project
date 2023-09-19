jest.setTimeout(20000)
describe('pages/index/index', () => {
	let page
	beforeAll(async () => {
		page = await program.reLaunch('/pages/index/index')
		await page.waitFor(7000)
	})
	it('test', async () => {
		const text = await page.$('text')
		console.log('text',text)
		expect(1+1).toEqual(2)
	})
})