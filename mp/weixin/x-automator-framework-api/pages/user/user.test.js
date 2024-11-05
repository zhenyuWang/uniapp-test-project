describe('ELement Component API', () => {
  const PAGE_PATH = 'pages/user/user'
  let page
  beforeAll(async () => {
    page = await program.reLaunch(`/${PAGE_PATH}`)
    await page.waitFor('view')
  })
  it('data', async () => {
    const foo = await page.$('#component-foo')
    const data = await foo.data()
    expect(data).toEqual({
      title: 'Foo component',
      num: 0
    })
  });
  it('callMethod', async () => {
    const foo = await page.$('#component-foo')
    const num1 = await foo.data('num')
    await foo.callMethod('increaseNum')
    const num2 = await foo.data('num')
    expect(num2).toBe(num1 + 1)
    await foo.callMethod('increaseNumByArg', 10)
    const num3 = await foo.data('num')
    expect(num3).toBe(num2 + 10)
  });
  it('setData', async () => {
    const foo = await page.$('#component-foo')
    await foo.setData({num: 100})
    const fooNum = await foo.$('#foo-num')
    expect(await fooNum.text()).toBe('100')
  });
  it('callContextMethod', async () => {
    let videoHasPlayed = await page.data('videoHasPlayed')
    expect(videoHasPlayed).toBe(false)
    const video = await page.$('video')
    await video.callContextMethod('play')
    await page.waitFor(500)
    videoHasPlayed = await page.data('videoHasPlayed')
    expect(videoHasPlayed).toBe(true)
  });
  it('scrollWidth', async () => {
    const scrollView = await page.$('.user-scroll-view')
    const scrollWidth = await scrollView.scrollWidth()
    expect(scrollWidth).toBeGreaterThan(100)
  });
  it('scrollHeight', async () => {
    const scrollView = await page.$('.user-scroll-view')
    const scrollHeight = await scrollView.scrollHeight()
    expect(scrollHeight).toBeGreaterThan(200)
  });
  it('scrollTo', async () => {
    let scrollViewScrolled = await page.data('scrollViewScrolled')
    expect(scrollViewScrolled).toBe(false)
    const scrollView = await page.$('.user-scroll-view')
    await scrollView.scrollTo(4,100)
    await page.waitFor(500)
    scrollViewScrolled = await page.data('scrollViewScrolled')
    expect(scrollViewScrolled).toBe(true)
  });
  it('swipeTo', async () => {
    let data = await page.data()
    expect(data.swiperCurrent).toBe(0)
    expect(data.swiperCurrentItemId).toBe('A')
    const swiper = await page.$('.user-swiper')
    await swiper.swipeTo(1)
    await page.waitFor(500)
    data = await page.data()
    expect(data.swiperCurrent).toBe(1)
    expect(data.swiperCurrentItemId).toBe('B')
  });
 it('moveTo', async () => {
   const movableView = await page.$('.user-movable-view')
   await movableView.moveTo(100, 20)
   await page.waitFor(1500)
   const data = await page.data()
   expect(data.movableViewX).toBe(100)
   expect(data.movableViewY).toBe(20)
 });
 it('slideTo', async () => {
   const slider = await page.$('#user-slider')
   await slider.slideTo(60)
   // 功能正常，但是 slideTo 不会触发 slider change 事件
 });

});