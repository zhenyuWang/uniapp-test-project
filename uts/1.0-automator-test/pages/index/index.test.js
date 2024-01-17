jest.setTimeout(100000);
describe('/pages/index/index', () => {
	it('test', async () => {
		const page = await program.navigateTo('/pages/index/index');
		await page.waitFor(500);
		// const testId =  await page.$('#test-id');
		// console.log('testId', testId);
		// const testIdText = await testId.text();
		// console.log('testIdText', testIdText);
		await page.setData({
			data: "string",
			header: {
				"Content-Type": "application/x-www-form-urlencoded",
			}
		})
		const pageData = await page.data()
		console.log('pageData', pageData)
		// await program.screenshot()
		// const button = await page.$('button');
		// console.log('button', button);
		// const type = await button.property('type')
		// console.log('type', type);
		// const textEl = await page.$('text');
		// console.log('textEl', textEl);
		// const button = await page.$('button');
		// console.log('button', button);
		// const Foo = await page.$('.foo');
		// console.log('Foo', Foo);
		// const fooTitle = await Foo.$('.title')
		// console.log('fooTitle', fooTitle);
		// let FooData = await Foo.data();
		// console.log('FooData', FooData);
		// await Foo.setData({title: 'new title'});
		// FooData = await Foo.data();
		// // await page.waitFor(6000);
		// console.log('FooData', FooData);
		// const text = await Foo.text();
		// console.log('text', text);
		// const fooRes = await Foo.callMethod('foo');
		// console.log('fooRes', fooRes);
	})
});