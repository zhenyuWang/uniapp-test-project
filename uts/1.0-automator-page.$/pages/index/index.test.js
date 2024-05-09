describe('test title', () => {
    let page;
    beforeAll(async () => {
        page = await program.reLaunch('/pages/index/index');
        await page.waitFor(3000);
    });

    // it('check page title', async () => {
    //     const el = await page.$('.title');
    //     const titleText = await el.text();
    //     expect(titleText).toEqual('Hello');
    // });
    it('test element.data', async () => {
      const foo = await page.$('.my-foo')
      const fooData = await foo.data()
      console.log('fooData', fooData)
      
      const bar = await page.$('.my-bar')
      const barData = await bar.data()
      console.log('barData', barData)
    })
});
