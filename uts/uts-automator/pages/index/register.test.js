describe('/pages/index/register', () => {
	let page;
	beforeAll(async () => {
		page = await program.navigateTo('/pages/index/register')
		await page.waitFor('view')
	});

	it('register', async () => {
		await page.setData({
			form: {
				username: "dcloud88",
				nickname: "dcloud88",
				password: "dcloud2023",
				captcha: "1234",
			}
		})
		const data = await page.data('form')
		console.log('data---------', data)
		await page.callMethod('registerBefore')
	});

});