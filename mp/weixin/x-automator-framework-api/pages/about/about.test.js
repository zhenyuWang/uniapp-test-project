describe('Page API', () => {
  const ABOUT_PATH = 'pages/about/about'
  const defaultTitle = 'about page'
  let page
  beforeAll(async () => {
    page = await program.reLaunch(`/${ABOUT_PATH}?a=aaa&b=bbb`)
    await page.waitFor('view')
  })
  it('path & query', async () => {
    expect(page.path).toBe(ABOUT_PATH)
    expect(page.query).toEqual({
      "a": "aaa",
      "b": "bbb"
    })
  });
  it('$', async () => {
    const title = await page.$('.title')
    expect(await title.text()).toEqual(defaultTitle)
  });
  it('$$', async () => {
    const listItemTexts = await page.$$('.list-item-text')
    const listData = await page.data('list')
    expect(listItemTexts.length).toBe(listData.length)
    for (let i = 0; i < listData.length; i++) {
      expect(await listItemTexts[i].text()).toBe(listData[i])
    }
  });
  it('data', async () => {
    const title = await page.data('title')
    expect(title).toBe(defaultTitle)
    const data = await page.data()
    expect(data.list).toEqual(['0', '1', '2'])
  });
  it('setData', async () => {
    const title = 'new title'
    await page.setData({
      title,
    })
    expect(await page.data('title')).toBe(title)
  });
  it('setData', async () => {
    const {width, height} = await page.size()
    expect(width).toBeGreaterThan(100)
    expect(height).toBeGreaterThan(100)
  });
  it('callMethod', async () => {
    const newTitle = 'title for callMethod'
    await page.callMethod('setTitle', newTitle)
    expect(await page.data('title')).toBe(newTitle)
    await page.callMethod('resetTitle')
    expect(await page.data('title')).toBe(defaultTitle)
  });
});