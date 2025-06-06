jest.setTimeout(100000);
describe('/pages/index/index', () => {
  let page
  beforeAll(async () => {
    page = await program.navigateTo('/pages/index/index');
    // const page = await program.currentPage();
    await page.waitFor(1000);
    // await page.waitFor(35000);
  })

  // it('test button tap', async () => {
  //   const myButton = await page.$('#my-button')
  //   await myButton.tap()
  // })

  it('test', async () => {
    const image = await program.screenshot({fullPage: true});
    expect(image).toSaveImageSnapshot();
    // const numberInput = await page.$('#number-input')
    // let numberInputValue = await numberInput.property('value')
    // expect(numberInputValue).toBe('default title')
    // await numberInput.input('2000')
    // numberInputValue = await numberInput.property('value')
    // expect(numberInputValue).toBe('2000')


    // const myText = await page.$('.my-text')
    // console.log('myText', myText)
    // const myTextText = await myText.text()
    // expect(myTextText).toBe('default title')
    // const myTextList = await page.$$('.my-text')
    // console.log('myTextList', myTextList)
    // expect(await myTextList[0].text()).toBe('default title')
    // expect(await myTextList[1].text()).toBe('default title')

    // const box = await page.$('.box')
    // const myTextInBox = await box.$('.my-text')
    // console.log('myTextInBox', myTextInBox)
    // const myTextInBoxText = await myTextInBox.text()
    // expect(myTextInBoxText).toBe('default title')
    // const myTextInBoxList = await box.$$('.my-text')
    // console.log('myTextInBoxList', myTextInBoxList)
    // expect(await myTextInBoxList[0].text()).toBe('default title')
    // expect(await myTextInBoxList[1].text()).toBe('default title')

    // const button = await page.$('#my-button')
    // console.log('button', button)
    // const btnText = await button.text()
    // expect(btnText).toBe('my button')

    // const progress = await page.$('.progress')
    // console.log('progress', progress);

    // const myInput = await page.$('.my-input')
    // console.log('myInput', myInput)
    // await myInput.input('new input value')
    // await page.waitFor(10000)

    // const view = await page.$('view');
    // console.log('view----------', view)

    // const text = await page.$('.text')
    // const textContent = await text.text()
    // expect(textContent).toBe('this is my text ')

    // const img = await program.screenshot();
    // expect(img).toMatchImageSnapshot()

    // const testText =  await page.$('#test-text');
    // console.log('testText', testText);
    // const testTextText = await testText.text();
    // console.log('testTextText', testTextText);
    // await page.setData({
    // 	data: "string",
    // 	header: {
    // 		"Content-Type": "application/x-www-form-urlencoded",
    // 	},
    // });
    // let pageData = await page.data()
    // console.log('pageData', pageData)
    // await page.setData({name: 'my test name'})
    // pageData = await page.data()
    // console.log('pageData', pageData)
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

    // const Foo = await page.$('Foo');
    const Foo = await page.$('.foo');
    console.log('Foo', Foo);
    const fooData = await Foo.data()
    console.log('fooData', fooData)
    const Bar = await page.$('.my-bar')
    console.log('Bar', Bar);
    const barData = await Bar.data()
    console.log('barData', barData)
    const switchInput = await Foo.$('.uni-switch-input');
    console.log('switchInput', switchInput);
    const switchInputText = await switchInput.text();
    console.log('switchInputText', switchInputText);
    const FooTitle = await Foo.$('.title');
    console.log('FooTitle', FooTitle);
    const FooTitleText = await FooTitle.text();
    console.log('FooTitleText', FooTitleText);

    // let FooData = await Foo.data();
    // console.log('FooData', FooData);
    // await Foo.setData({title: 'new title'});
    // FooData = await Foo.data();
    // console.log('FooData', FooData);
    // const text = await Foo.text();
    // console.log('text', text);
    // const fooRes = await Foo.callMethod('foo');
    // console.log('fooRes', fooRes);
    // const FooList = await page.$$('.foo');
    // console.log('FooList', FooList);
    // const Foo0Data = await FooList[0].data();
    // console.log('Foo0Data', Foo0Data);
    // })

    // it('test save file and image 1', async () => {
    //   const img1 = await program.screenshot();
    //   expect(img1).toSaveImageSnapshot()

    //   const img2 = await program.screenshot();
    //   expect(img2).toSaveImageSnapshot()

    //   const testText1 = '111' + Date.now()
    //   expect(testText1).toSaveSnapshot()
    //   const testText2 = '222' + Date.now()
    //   expect(testText2).toSaveSnapshot()
    //   const testText3 = '333' + Date.now()
    //   expect(testText3).toSaveSnapshot()
    // })

    // it('test save file and image 2', async () => {
    //   const testText1 = '111' + Date.now()
    //   expect(testText1).toSaveSnapshot({
    //     customSnapshotsDir: '/Users/wangzhenyu/work/DCloud/git/uniapp-test-project/uts/2.0-automator-test/__file_snapshots__',
    //     fileName: 'index-111.txt'
    //   })
    //   const testText2 = '222' + Date.now()
    //   expect(testText2).toSaveSnapshot({
    //     customSnapshotsDir: '/Users/wangzhenyu/work/DCloud/git/uniapp-test-project/uts/2.0-automator-test/__file_snapshots__'
    //   })

    //   const img1 = await program.screenshot();
    //   expect(img1).toSaveImageSnapshot({
    //     customSnapshotsDir: '/Users/wangzhenyu/work/DCloud/git/uniapp-test-project/uts/2.0-automator-test/__image_snapshots__',
    //     customSnapshotIdentifier() {
    //       return 'index-111.png';
    //     },
    //   })

    //   const img2 = await program.screenshot();
    //   expect(img2).toSaveImageSnapshot({
    //     customSnapshotsDir: '/Users/wangzhenyu/work/DCloud/git/uniapp-test-project/uts/2.0-automator-test/__image_snapshots__',
    //   })
  })
});