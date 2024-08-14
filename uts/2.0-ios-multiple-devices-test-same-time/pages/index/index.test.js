describe('index page', () => {
  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/index/index');
    await page.waitFor(3000);
  });

  it('log in index page', async () => {
    for(let i = 0;i<12;i++){
      await page.waitFor(5000);
      console.log(`index page log ${i}`)
    }
    expect(1).toBe(1)
  });
});