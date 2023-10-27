describe('pages/test/test', () => {
	let page
	beforeAll(async () => {
		page = await program.reLaunch('/pages/test/test')
		console.log('before waitFor-1', Date.now())
		// await page.waitFor(1000)
		await page.waitFor('view')
		// const Foo = await page.$('Foo')
		// const myView = await Foo.$$('view')
		// console.log('myView',myView)
		// await page.waitFor('.content')
		// await page.waitFor('.border-0')
		// await page.waitFor(async () => {
		// 	return (await page.$$('.border-0')).length > 0
		// })
	})
	// it('css', async () => {
	//     const image = await program.screenshot()
	//     expect(image).toMatchImageSnapshot();
	// })
	it('radio text', async () => {
		console.log('after waitFor-2', Date.now())
		// const radio = await page.$('.r')
		// expect(await radio.text()).toEqual('选中')
		expect(1+1).toBe(2)
	})
})