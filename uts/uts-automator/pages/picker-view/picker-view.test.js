describe('pages/picker-view/picker-view', () => {
	let page
	beforeAll(async () => {
		page = await program.reLaunch('/pages/picker-view/picker-view')
		await page.waitFor(1000)
	})
	it('value', async () => {
		await page.setData({
			result: [0, 0, 0]
		})
		// await page.setData({
		// 	t: 'testtest'
		// })
		expect(1+1).toBe(2)
	})
})