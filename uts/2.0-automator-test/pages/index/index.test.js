jest.setTimeout(100000);
describe('/pages/index/index', () => {
	it('test', async () => {
		const page = await program.reLaunch('/pages/index/index');
		// const page = await program.currentPage();
		await page.waitFor(500);
		// const switchEl = await page.$('.switch');
		// console.log('switchEl', switchEl);
		// const switchInput = await switchEl.$('.uni-switch-input');
		// console.log('switchInput', switchInput);
		
		// const input = await page.$('input');
		// let inputValue = await input.property('value');
		// console.log('inputValue', inputValue);
		// const data = await page.data();
		// console.log('data', data);
		// const title = await page.data('title');
		// console.log('title', title);
		// const button = await page.$('button');
		// console.log('button', button);
		// let buttonType = await button.property('type')
		// console.log('buttonType', buttonType);
		// await button.tap();
		// inputValue = await input.property('value');
		// console.log('inputValue', inputValue);
		// const progress = await page.$('progress');
		// showInfo = await progress.property('show-info');
		// console.log('showInfo', showInfo);
		// buttonType = await button.property('type')
		// console.log('buttonType', buttonType);
		// const textElement = await page.$('text');
		// console.log('textElement', textElement);

		const Foo = await page.$('.foo');
		console.log('Foo', Foo);
		const switchInput = await Foo.$('.uni-switch-input');
		console.log('switchInput', switchInput);
		const switchInputText = await switchInput.text();
		console.log('switchInputText', switchInputText);
		// const FooTitle = await Foo.$('.title');
		// console.log('FooTitle', FooTitle);
		// const FooTitleText = await FooTitle.text();
		// console.log('FooTitleText', FooTitleText);
		
		// let data = await Foo.data();
		// console.log('data', data);
		// await Foo.setData({title: 'new title'});
		// data = await Foo.data();
		// console.log('data', data);
		// const text = await Foo.text();
		// console.log('text', text);
		// const fooRes = await Foo.callMethod('foo');
		// console.log('fooRes', fooRes);
		// const FooList = await page.$$('.foo');
		// console.log('FooList', FooList);
		// const Foo0Data = await FooList[0].data();
		// console.log('Foo0Data', Foo0Data);
	})
});