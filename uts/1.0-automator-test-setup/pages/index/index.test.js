jest.setTimeout(30000);
describe('/pages/index/index', () => {
	it('test', async () => {
		const page = await program.navigateTo('/pages/index/index');
		await page.waitFor(1000);
    const fooNum = await page.$('.foo-num')
    console.log('fooNum', fooNum)
    expect(await fooNum.text()).toBe('num: 0')
    await page.callMethod('increment')
    expect(await fooNum.text()).toBe('num: 1')
	})
});