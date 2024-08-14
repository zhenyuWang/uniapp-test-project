describe('test title', () => {
  let page;
  beforeAll(async () => {
    page = await program.currentPage();
    await page.waitFor(3000);
  });

  it('check page title', async () => {
    expect(1).toEqual(1);
  });
});