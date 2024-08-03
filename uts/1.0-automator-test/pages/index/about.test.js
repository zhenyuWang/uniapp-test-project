jest.setTimeout(100000);
describe('/pages/index/about', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch('/pages/index/about');
    await page.waitFor(1000);
  })
  
  it('test', async () => {
    const data = await page.data()
    console.log('data', data)
  })
  
  // it('test save file and image 1', async () => {
  //   const img1 = await program.screenshot();
  //   expect(img1).toSaveImageSnapshot()
  
  //   const img2 = await program.screenshot();
  //   expect(img2).toSaveImageSnapshot()
  
  //   const testText1 = 'about-111' + Date.now()
  //   expect(testText1).toSaveSnapshot()
  //   const testText2 = 'about-222' + Date.now()
  //   expect(testText2).toSaveSnapshot()
  //   const testText3 = 'about-333' + Date.now()
  //   expect(testText3).toSaveSnapshot()
  // })
  
  // it('test save file and image 2', async () => {
  //   const testText1 = 'about-111' + Date.now()
  //   expect(testText1).toSaveSnapshot({
  //     customSnapshotsDir: '/Users/wangzhenyu/work/DCloud/git/uniapp-test-project/uts/1.0-automator-test/__file_snapshots__',
  //     fileName: 'about-111.txt'
  //   })
  //   const testText2 = 'about-222' + Date.now()
  //   expect(testText2).toSaveSnapshot({
  //     customSnapshotsDir: '/Users/wangzhenyu/work/DCloud/git/uniapp-test-project/uts/1.0-automator-test/__file_snapshots__'
  //   })
  
  //   const img1 = await program.screenshot();
  //   expect(img1).toSaveImageSnapshot({
  //     customSnapshotsDir: '/Users/wangzhenyu/work/DCloud/git/uniapp-test-project/uts/1.0-automator-test/__image_snapshots__',
  //     customSnapshotIdentifier() {
  //       return 'about-111.png';
  //     },
  //   })
  
  //   const img2 = await program.screenshot();
  //   expect(img2).toSaveImageSnapshot({
  //     customSnapshotsDir: '/Users/wangzhenyu/work/DCloud/git/uniapp-test-project/uts/1.0-automator-test/__image_snapshots__',
  //   })
  // })
});