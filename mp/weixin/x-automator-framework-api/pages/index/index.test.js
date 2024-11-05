describe('program API', () => {
  const HOME_PATH = 'pages/index/index'
  const ABOUT_PATH = 'pages/about/about'
  const SETTING_PATH = 'pages/setting/setting'
  const USER_PATH = 'pages/user/user'
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
  it('screenshot', async () => {
    await program.switchTab(`/${HOME_PATH}`)
    const image = await program.screenshot();
    expect(image).toSaveImageSnapshot();
  });
  // it('mockUniMethod', async () => {
  //   // TODO: 有问题
  //   await program.mockUniMethod(
  //     'getSystemInfo',
  //     function(obj, platform) {
  //       console.log('obj',obj)
  //       console.log('platform',platform)
  //       return new Promise(resolve => {
  //         // origin 指向原始方法
  //         this.origin({
  //           success(res) {
  //             res.platform = '12354'
  //             resolve(res)
  //           },
  //         })
  //       })
  //     },
  //     'test',
  //   )
  //   // 这个可以
  //   await program.restoreUniMethod('getSystemInfo')
  // });
  // it('evaluate', async () => {
  //   const key = 'evaluate_key'
  //   const value = 'evaluate value'
  //   await program.evaluate((key, value) => {
  //     uni.setStorageSync(key, value)
  //   }, key, value)
  //   const storageValue = await program.evaluate((key) => uni.getStorageSync(key), key)
  //   expect(storageValue).toBe(value)
  // });
});