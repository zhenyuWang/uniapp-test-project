describe('test title', () => {
  let page;

  it('index screenShot', async () => {
    page = await program.reLaunch('/pages/index/index');
    await page.waitFor(1000);
    
    const image = await program.screenshot({
      fullPage: true
    });
    expect(image).toSaveImageSnapshot();
  })
  
  it('about screenShot', async () => {
    page = await program.reLaunch('/pages/index/about');
    await page.waitFor(1000);
    
    const image = await program.screenshot({
      fullPage: true
    });
    expect(image).toSaveImageSnapshot();
  })
});