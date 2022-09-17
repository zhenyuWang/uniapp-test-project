App({
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch 123123');
    my.onPageNotFound(res => {
      console.log('123123  onPageNotFound')
    });
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
    console.log('App show')
  },
  onHide(){
    console.log('on hide')
  },
  onError(){
    console.log('on error')
  },
  onPageNotFound(){
    console.log('111111 on page not found')
  }
});
