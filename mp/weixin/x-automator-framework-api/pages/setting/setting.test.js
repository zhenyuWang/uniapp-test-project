describe('ELement API', () => {
  const PAGE_PATH = 'pages/setting/setting'
  let page
  beforeAll(async () => {
    page = await program.reLaunch(`/${PAGE_PATH}`)
    await page.waitFor('view')
  })
  it('tagName', async () => {
    const container = await page.$('.page-container')
    expect(container.tagName).toBe('view')
  });
  it('$', async () => {
    const pageContainer = await page.$('.page-container')
    const listContainer = await pageContainer.$('.list-container')
    expect(listContainer.tagName).toBe('view')
  });
  it('$$', async () => {
    const listContainer = await page.$('.list-container')
    const listItems = await listContainer.$$('.list-item')
    expect(listItems.length).toBe(3)
  });
  it('size', async () => {
    const listContainer = await page.$('.list-container')
    const {width, height} = await listContainer.size()
    expect(width).toBeGreaterThan(100)
    expect(height).toBeGreaterThan(100)
  });
  it('offset', async () => {
    const listContainer = await page.$('.list-container')
    const {left, top} = await listContainer.offset()
    expect(left).toBeGreaterThan(1)
    expect(top).toBeGreaterThan(1)
  });
  it('text', async () => {
    const title = await page.$('#title')
    expect(await title.text()).toBe('setting page')
  });
  it('attribute', async () => {
    const logo = await page.$('.logo')
    expect(await logo.attribute('src')).toBe('/static/logo.png')
  });
  it('property', async () => {
    const input = await page.$('#input')
    expect(await input.property('value')).toBe('default value')
  });
  it('html', async () => {
    const container = await page.$('.page-container')
    const html = await container.html()
    expect(html).toContain('<text id="title">')
    expect(html).toContain('<view class="list-container')
  });
  it('outerHtml', async () => {
    const container = await page.$('.page-container')
    const outerHtml = await container.outerHtml()
    expect(outerHtml.startsWith('<view class="page-container')).toBe(true)
    expect(outerHtml).toContain('<text id="title">')
    expect(outerHtml).toContain('<view class="list-container')
  });
  it('value', async () => {
    const input = await page.$('#input')
    const value = await input.value()
    expect(value).toBe('default value')
  });
  it('style', async () => {
    const logo = await page.$('.logo')
    expect(await logo.style('width')).toBe('100px')
  });
  it('tap', async () => {
    const preNum = await page.data('num')
    const plusNum = await page.$('#plus-num')
    await plusNum.tap()
    await page.waitFor(500)
    const newNum = await page.data('num')
    expect(newNum).toBe(preNum + 1)
  });
  it('longPress', async () => {
    const preNum = await page.data('num')
    const plusNum = await page.$('#plus-num')
    await plusNum.longpress()
    const newNum = await page.data('num')
    expect(newNum).toBe(preNum + 10)
  });
  it('touchstart', async () => {
    const preNum = await page.data('num')
    const logo = await page.$('.logo')
    await logo.touchstart({
      touches: [{
        identifier: 1,
        pageX: 500,
        pageY: 500
      }],
      changedTouches: [{
        identifier: 1,
        pageX: 500,
        pageY: 500
      }]
    })
    const newNum = await page.data('num')
    expect(newNum).toBe(preNum + 1)
  });
  it('touchmove', async () => {
    const preNum = await page.data('num')
    const logo = await page.$('.logo')
    await logo.touchmove({
      touches: [{
        identifier: 1,
        pageX: 500,
        pageY: 500
      }],
      changedTouches: [{
        identifier: 1,
        pageX: 500,
        pageY: 500
      }]
    })
    const newNum = await page.data('num')
    expect(newNum).toBe(preNum + 1)
  });
  it('touchend', async () => {
    const preNum = await page.data('num')
    const logo = await page.$('.logo')
    await logo.touchend({
      touches: [{
        identifier: 1,
        pageX: 500,
        pageY: 500
      }],
      changedTouches: [{
        identifier: 1,
        pageX: 500,
        pageY: 500
      }]
    })
    const newNum = await page.data('num')
    expect(newNum).toBe(preNum + 1)
  });
  it('trigger', async () => {
    const preNum = await page.data('num')
    const input = await page.$('#input')
    await input.trigger('input', {value: 'new title'})
    await page.waitFor(500)
    const newNum = await page.data('num')
    expect(newNum).toBe(preNum + 1)
  });
  it('input', async () => {
    const input = await page.$('#input')
    await input.input('test input')
  });
});