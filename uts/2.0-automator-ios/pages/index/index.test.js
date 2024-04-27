describe('/pages/index/index', () => {
  it('basic', async () => {
    const page = await program.currentPage()
    await page.waitFor(2000)
    // let data = await page.data()
    // expect(data.title).toBe('Hello')
    // await page.setData({title: 'new title'})
    // data = await page.data()
    // expect(data.title).toBe('new title')
    
    // const img = await program.screenshot();
    // expect(img).toMatchImageSnapshot()
    
    // const body = await page.$('body')
    // console.log('body',body)
    const title = await page.$('.title')
    expect(await title.text()).toBe('Hello')
    const img = await program.screenshot({
      // deviceShot: true,
      // area: {
      //   x: 100,
      //   y: 100,
      //   width: 200,
      //   height: 200
      // }
      fullPage: true
    });
    expect(img).toMatchImageSnapshot()
  })
});