const PAGE_PATH = '/pages/form/form'
describe('form', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })
  it('submit', async () => {
    const btnSubmit = await page.$('.btn-submit')
    console.log('btnSubmit', btnSubmit)
  })
})