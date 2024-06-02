describe('test trigger event', () => {
  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/index/index');
    await page.waitFor('view');
  });

  // it('click', async () => {
  //   const triggerClickBtn = await page.$('#trigger-click-btn')
  //   await triggerClickBtn.tap();
  //   const clickTriggered = await page.data('clickTriggered')
  //   expect(clickTriggered).toBe(true)
  // });

  // it('input', async () => {
  //   const myInput = await page.$('#my-input')
  //   await myInput.input('test input value');
  //   const inputTriggered = await page.data('inputTriggered')
  //   expect(inputTriggered).toBe(true)
  // });
  // 全平台不支持
  // it('focus', async () => {
  //   const myInput = await page.$('#my-input')
  //   await myInput.trigger('focus');
  //   const focusTriggered = await page.data('focusTriggered')
  //   expect(focusTriggered).toBe(true)
  // });
  // 全平台不支持
  // it('blur', async () => {
  //   const myInput = await page.$('#my-input')
  //   await myInput.trigger('blur');
  //   const blurTriggered = await page.data('blurTriggered')
  //   expect(blurTriggered).toBe(true)
  // });
  // it('touch', async () => {
  //   const myBlock = await page.$('#my-block')
  //   await myBlock.touchstart({
  //     touches: [{
  //       identifier: 1,
  //       pageX: 100,
  //       pageY: 100,
  //     }, ],
      
  //     changedTouches: [{
  //       identifier: 1,
  //       pageX: 100,
  //       pageY: 100,
  //     }, ],
  //   })
  //   await myBlock.touchmove({
  //     touches: [{
  //       identifier: 1,
  //       pageX: 100,
  //       pageY: 100,
  //     }, ],
  //     changedTouches: [{
  //       identifier: 1,
  //       pageX: 101,
  //       pageY: 101,
  //     }, ],
  //   })
  //   await myBlock.touchend({
  //     touches: [],
  //     changedTouches: [{
  //       identifier: 1,
  //       pageX: 101,
  //       pageY: 101,
  //     }, ],
  //   })
  //   const data = await page.data()
  //   expect(data.touchStartTriggered).toBe(true);
  //   expect(data.touchMoveTriggered).toBe(true);
  //   expect(data.touchEndTriggered).toBe(true);
  // })
  // it('longpress', async () => {
  //   const myBlock = await page.$('#my-block')
  //   await myBlock.longpress()
  //   const longPressTriggered = await page.data('longPressTriggered')
  //   expect(longPressTriggered).toBe(true);
  // })
});