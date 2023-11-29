describe('/pages/index/index', () => {
	it('test', async () => {
		const page = await program.navigateTo('/pages/index/index');
		await page.waitFor(500);
		expect(1).toBe(1);
		const foo = await page.$('.foo');
		console.log('foo', foo);
	})
});