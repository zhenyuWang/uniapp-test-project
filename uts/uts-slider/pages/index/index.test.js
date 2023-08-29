describe('pages/index/index', () => {
	let page
	beforeAll(async () => {
		page = await program.reLaunch('/pages/index/index')
		await page.waitFor(1000)
	})

	it('slider.slideTo', async () => {
		const slider = await page.$('.slider')
		console.log('slider', slider)
		slider.setData({
			sliderValue: 90
		})
		slider.callMethod('_onRender')
	})
})