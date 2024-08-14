describe('about page', () => {
  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/index/about');
    await page.waitFor(3000);
  });

  it('log in about page', async () => {
    for(let i = 0;i<12;i++){
      await page.waitFor(5000);
      console.log(`about page log ${i}`)
    }
    expect(1).toBe(1)
  });
});