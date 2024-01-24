jest.setTimeout(100000);
describe('/pages/index/test-web-view-fullpage-screenshot', () => {
  it('test', async () => {
    let page = await program.reLaunch('/pages/index/test-web-view-fullpage-screenshot');
    await page.waitFor(async () => {
      const isLoaded = page.data("isLoaded");
      return isLoaded;
    });
    await page.waitFor(5000)
    const headHeight = await page.data('headHeight')
    const img1 = await program.screenshot({
      fullPage: true,
      offsetY: `${headHeight}`
    });
    expect(img1).toMatchImageSnapshot({
      customSnapshotIdentifier() {
        return 'screenshot-compaire';
      },
    })
    
    page = await program.reLaunch('/pages/index/index')
    await page.waitFor(1000)
    
    const img2 = await program.screenshot({fullPage: true})
    expect(img2).toMatchImageSnapshot({
      customSnapshotIdentifier() {
        return 'screenshot-compaire';
      },
    })
  });
});