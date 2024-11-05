describe('index', () => {
  const HOME_PATH = 'pages/index/index'
  let page
  it('reLaunch', async () => {
    page = await program.reLaunch(`/${HOME_PATH}`)
    expect(page.path).toBe(HOME_PATH)
    await page.waitFor('view')
  })
  // it('pageStack', async () => {
  //   const pageStack = await program.pageStack()
  //   expect(pageStack.length).toBe(1)
  //   expect(pageStack[0].path).toBe(HOME_PATH)
  // });
  // it('navigateTo', async () => {
  //   page = await program.navigateTo(`/${SETTING_PATH}`)
  //   expect(page.path).toBe(SETTING_PATH)
  //   await page.waitFor('view')
  //   const pageStack = await program.pageStack()
  //   expect(pageStack.length).toBe(2)
  //   expect(pageStack[0].path).toBe(HOME_PATH)
  //   expect(pageStack[1].path).toBe(SETTING_PATH)
  // });
  // it('redirectTo', async () => {
  //   page = await program.redirectTo(`/${USER_PATH}`)
  //   expect(page.path).toBe(USER_PATH)
  //   await page.waitFor('view')
  //   const pageStack = await program.pageStack()
  //   expect(pageStack.length).toBe(2)
  //   expect(pageStack[0].path).toBe(HOME_PATH)
  //   expect(pageStack[1].path).toBe(USER_PATH)
  // });
  // it('navigateBack', async () => {
  //   page = await program.navigateBack()
  //   expect(page.path).toBe(HOME_PATH)
  //   await page.waitFor('view')
  //   const pageStack = await program.pageStack()
  //   expect(pageStack.length).toBe(1)
  //   expect(pageStack[0].path).toBe(HOME_PATH)
  // });
  // it('switchTab', async () => {
  //   page = await program.switchTab(`/${ABOUT_PATH}`)
  //   expect(page.path).toBe(ABOUT_PATH)
  //   await page.waitFor('view')
  //   const pageStack = await program.pageStack()
  //   expect(pageStack.length).toBe(1)
  //   expect(pageStack[0].path).toBe(ABOUT_PATH)
  // });
  // it('currentPage', async () => {
  //   page = await program.currentPage()
  //   expect(page.path).toBe(ABOUT_PATH)
  //   await page.waitFor('view')
  // });
  // it('systemInfo', async () => {
  //   const systemInfo = await program.systemInfo()
  //   expect(systemInfo.appName).toBe('x-automator-framework-api')
  // });
  // it('pageScrollTo', async () => {
  //   await program.pageScrollTo(100)
  //   await page.waitFor(1000)
  //   const scrollTop = await page.scrollTop()
  //   expect(scrollTop).toBe(100)
  // });
  // it('callUniMethod', async () => {
  //   const key = 'test'
  //   const value = '123456'
  //   await program.callUniMethod('setStorage', {
  //     key,
  //     data: value
  //   })
  //   const data = await program.callUniMethod('getStorageSync', key)
  //   expect(data).toBe(value)
  // });
  // it('screenshot', async () => {
  //   await program.switchTab(`/${HOME_PATH}`)
  //   await program.screenshot({
  //     path: "static/screenshot.png"
  //   })
  // });
  it('mockUniMethod', async () => {
    // 有问题
    await program.mockUniMethod(
      'getStorageSync',
      function(key, defVal) {
        if (key === 'name') return 'redhoodsu'
        if (key === 'sex') return 'male'
        return defVal
      },
      'unknown',
    )
    console.log('1111111111111111', await program.callUniMethod('getStorageSync', 'name'))
    console.log('222222222222222', await program.callUniMethod('getStorageSync', 'sex'))
    console.log('3333333333333333', await program.callUniMethod('getStorageSync', 'test'))
  });
  // it('value', async () => {
  //   const input = await page.$('#input')
  //   const value = await input.value()
  //   expect(value).toBe('default value')
  // });


  // it('$', async () => {
  //   const title = await page.$('.title')
  //   expect(await title.text()).toEqual('index page')
  // });
  // it('$$', async () => {
  //   const listItemTexts = await page.$$('.list-item-text')
  //   const listData = await page.data('list')
  //   expect(listItemTexts.length).toBe(listData.length)
  //   for (let i = 0; i < listData.length; i++) {
  //     expect(await listItemTexts[i].text()).toBe(listData[i])
  //   }
  // });
});