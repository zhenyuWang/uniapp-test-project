describe('test title', () => {
  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/index/index');
    await page.waitFor(1000);
  });

  it('swipe', async () => {
    await program.swipe({
      startPoint: {
        x: 100,
        y: 400
      },
      endPoint: {
        x: 100,
        y: 800
      },
      duration: 1000
    })
    await program.swipe({
      startPoint: {
        x: 100,
        y: 600
      },
      endPoint: {
        x: 100,
        y: 100
      },
      duration: 400
    })
  });
});