describe('pages/index/index', () => {
	let page
	beforeAll(async () => {
		page = await program.reLaunch('/pages/index/index')
		await page.waitFor(1000)
	})
	// it('css', async () => {
	// 	// const image = await program.screenshot({fullPage: true})
	// 	const image = await program.screenshot()
	// 	expect(image).toMatchImageSnapshot();
	// })
	it('methodWithCallback', () => {
		// page.callMethodWithCallback('getStorageInfo')
		page.callMethodWithCallback('getStorageInfo222')
	})
})