jest.setTimeout(30000);
describe('/pages/index/index', () => {
  let page
  beforeAll(async () => {
		page = await program.navigateTo('/pages/index/index');
		await page.waitFor('view');
  });
  
  // it('test save file and image 1', async () => {
  //   const img1 = await program.screenshot();
  //   expect(img1).toSaveImageSnapshot()
  
  //   const img2 = await program.screenshot();
  //   expect(img2).toSaveImageSnapshot()
  
  //   const testText1 = 'index-111' + Date.now()
  //   expect(testText1).toSaveSnapshot()
  //   const testText2 = 'index-222' + Date.now()
  //   expect(testText2).toSaveSnapshot()
  //   const testText3 = 'index-333' + Date.now()
  //   expect(testText3).toSaveSnapshot()
  // })
  
  // it('test save file and image 2', async () => {
  //   const testText1 = 'index-111' + Date.now()
  //   expect(testText1).toSaveSnapshot({
  //     customSnapshotsDir: '/Users/wangzhenyu/work/DCloud/git/uniapp-test-project/uts/1.0-automator-test/__file_snapshots__',
  //     fileName: 'index-111.txt'
  //   })
  //   const testText2 = 'index-222' + Date.now()
  //   expect(testText2).toSaveSnapshot({
  //     customSnapshotsDir: '/Users/wangzhenyu/work/DCloud/git/uniapp-test-project/uts/1.0-automator-test/__file_snapshots__'
  //   })
  
  //   const img1 = await program.screenshot();
  //   expect(img1).toSaveImageSnapshot({
  //     customSnapshotsDir: '/Users/wangzhenyu/work/DCloud/git/uniapp-test-project/uts/1.0-automator-test/__image_snapshots__',
  //     customSnapshotIdentifier() {
  //       return 'index-111.png';
  //     },
  //   })
  
  //   const img2 = await program.screenshot();
  //   expect(img2).toSaveImageSnapshot({
  //     customSnapshotsDir: '/Users/wangzhenyu/work/DCloud/git/uniapp-test-project/uts/1.0-automator-test/__image_snapshots__',
  //   })
  // })
  
	it('test', async () => {
		const testId =  await page.$('#test-id');
		console.log('testId', testId);
		const testIdText = await testId.text();
		console.log('testIdText', testIdText);
    expect(testIdText).toBe('this is index page')
    
    
	// 	await page.setData({
	// 		data: "string",
	// 		header: {
	// 			"Content-Type": "application/x-www-form-urlencoded",
	// 		}
	// 	})
		// const pageData = await page.data()
    
  //   expect(pageData.title).toBe('index page')
    
  //   const foo = await page.$('.foo')
  //   console.log('foo', foo)
  //   const fooData = await foo.data()
  //   console.log('fooData', fooData)
  //   expect(fooData.title).toBe('Hello')
     
 //    const img = await program.screenshot();
 //    expect(img).toMatchImageSnapshot()
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