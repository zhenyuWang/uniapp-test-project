Page({
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
    console.log('my.SDKVersion',my.SDKVersion)
    console.log('my.canIUse(page-container)',my.canIUse('page-container'))
  },
  onShow() {
    // 页面显示
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0,
      });
    }
  },
  events:{
    onKeyboardHeight(e){
      console.log('监听键盘高度',e);
    }
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  saveImage(){
    my.saveImageToPhotosAlbum({
      filePath:'https://gw.alipayobjects.com/zos/skylark-tools/public/files/66539db61b570eb2b7cf2df4241ea56c.png',
      complete(res) {
        console.log('save image complte',res);
      }
    });
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
  openLocation() {
    my.openLocation({
      latitude: '40.04',
      longitude: '116.27',
      name: '黄龙万科中心',
      address: '学院路77号',
      success() {
        console.log('openLocation success');
      },
      fail(err) {
        console.log('openLocation fail', err);
      }
    })
  },
  chooseLocation(){
      my.chooseLocation({
        success(){
          console.log('chooseLocation success');
        },
        fail(err){
            console.log('chooseLocation fail',err);
        }
      })
  }
});
