describe('/pages/index/index', () => {
  it('title', async () => {
    const page = await program.reLaunch('/pages/index/index')
    await page.waitFor(1000)
    const title = await page.$('.title')
    console.log('title', title)
    const text = await title.text()
    console.log('text', text)
    expect(text).toBe('Hello')
  })
})
