const PAGE_PATH = '/pages/index/index'


describe('form', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  it('submit', async () => {
  	await changeData(page)
    const btnSubmit = await page.$('.btn-submit')
    console.log('btnSubmit', btnSubmit)
  })
})

async function changeData(page) {
  await page.setData({
    gender: '1',
    switch: false
  })
  await page.waitFor(100)
}
