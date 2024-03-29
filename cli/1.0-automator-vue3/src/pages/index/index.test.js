describe('/pages/index/index', () => {
  it('basic', async () => {
    const page = await program.reLaunch('/pages/index/index')
    await page.waitFor(1000)
    console.log('page:', page)
    const title = await page.$('.title')
    console.log('title:', title)
    expect(await title.text()).toBe('Hello')
    await page.setData({ title: 'World' })
    console.log('title:', await title.text())
    expect(await title.text()).toBe('World')
  })
});