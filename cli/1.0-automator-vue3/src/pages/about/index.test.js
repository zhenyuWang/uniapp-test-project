describe('/pages/about/index', () => {
  it('basic', async () => {
    const page = await program.reLaunch('/pages/about/index')
    await page.waitFor(1000)
    const title = await page.$('.title')
    expect(await title.text()).toBe('Hello')
    await page.setData({ title: 'World' })
    console.log('title:', await title.text())
    expect(await title.text()).toBe('World')
  })
});