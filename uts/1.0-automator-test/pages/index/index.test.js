jest.setTimeout(100000);
describe('/pages/index/index', () => {
	it('test', async () => {
		// const page = await program.navigateTo('/pages/index/index');
		const page = await program.currentPage();
		await page.waitFor(500);
		// const button = await page.$('button');
		// console.log('button', button);
		// const type = await button.property('type')
		// console.log('type', type);
		// const textEl = await page.$('text');
		// console.log('textEl', textEl);
		// const button = await page.$('button');
		// console.log('button', button);
		const Foo = await page.$('.foo');
		console.log('Foo', Foo);
		const fooTitle = await Foo.$('.title')
		console.log('fooTitle', fooTitle);
		// let data = await Foo.data();
		// console.log('data', data);
		// await Foo.setData({title: 'new title'});
		// data = await Foo.data();
		// // await page.waitFor(6000);
		// console.log('data', data);
		// const text = await Foo.text();
		// console.log('text', text);
		// const fooRes = await Foo.callMethod('foo');
		// console.log('fooRes', fooRes);
	})
});