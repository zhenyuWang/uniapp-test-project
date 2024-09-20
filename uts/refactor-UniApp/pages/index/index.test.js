describe('test title', () => {
    let page;
    beforeAll(async () => {
        page = await program.currentPage();
        await page.waitFor('view');
    });
    it('check globalData', async () => {
      const res = await page.callMethod('checkGlobalData')
      expect(res).toBe(true)
    });
    it('check app funtion', async () => {
      const res = await page.callMethod('checkAppFunction')
      expect(res).toBe(true)
    });
    it('check eventBus', async () => {
      const res = await page.callMethod('checkEventBus')
      expect(res).toBe(true)
    });
    it('check getAndroidApplication', async () => {
      const res = await page.callMethod('checkGetAndroidApplication')
      expect(res).toBe(true)
    });
});
