<script>
  export default {
    onLaunch: function() {
      console.log('App Launch')
    },
    onShow: function() {
      console.log('App Show')
      // navigateTo switchTab
      uni.addInterceptor('switchTab', {
        invoke(args) {
          console.warn('args.url', args.url)
          uni.reLaunch({
            url: '/pages/login/login'
          })
          return false
        }
      })

uni.addInterceptor('request', {
  invoke(args) {
    if (!args.url.startsWith('http://localhost') && !args.url.startsWith('http://192.168.31.147')) {
      args.url = 'https://www.baidu.com'
    }
  },
  success(res) {
    console.log('addInterceptor request success', res)
  },
  fail(err) {
    console.log('addInterceptor request fail', err)
  }
})
    },
    onHide: function() {
      console.log('App Hide')
    }
  }
</script>

<style>
  /*每个页面公共css */
</style>