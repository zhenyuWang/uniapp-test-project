describe('/pages/index/index', () => {
  it('basic', async () => {
    const page = await program.currentPage()
    const title = await page.$('.title')
    expect(await title.text()).toBe('Hello')
  })
  it('screenshot', async () => {
    const img = await program.screenshot();
    expect(img).toMatchImageSnapshot()
  })
});