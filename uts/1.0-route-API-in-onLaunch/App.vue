<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
      // uni.switchTab({
      //   url: '/pages/index/about',
      //   success(res) {
      //     console.log('switchTab about success')
      //   },
      //   fail(res) {
      //     console.log('switchTab about fail 1', res)
      //   }
      // })
      // uni.switchTab({
      //   url: '/pages/index/about',
      //   success(res) {
      //     console.log('switchTab about success')
      //   },
      //   fail(res) {
      //     console.log('switchTab about fail 2', res)
      //   }
      // })
      // uni.switchTab({
      //   url: '/pages/index/about',
      //   success(res) {
      //     console.log('switchTab about success')
      //   },
      //   fail(res) {
      //     console.log('switchTab about fail 3', res)
      //   }
      // })
      
      // uni.reLaunch({
      //   url: '/pages/index/setting',
      //   success(res) {
      //     console.log('reLaunch setting success')
      //   },
      //   fail(res) {
      //     console.log('reLaunch setting fail 1', res)
      //   }
      // })
      // uni.reLaunch({
      //   url: '/pages/index/setting',
      //   success(res) {
      //     console.log('reLaunch setting success')
      //   },
      //   fail(res) {
      //     console.log('reLaunch setting fail 2', res)
      //   }
      // })
      // uni.reLaunch({
      //   url: '/pages/index/setting',
      //   success(res) {
      //     console.log('reLaunch setting success')
      //   },
      //   fail(res) {
      //     console.log('reLaunch setting fail 3', res)
      //   }
      // })
      
      uni.redirectTo({
        url: '/pages/index/setting',
        success(res) {
          console.log('redirectTo setting success')
        },
        fail(res) {
          console.log('redirectTo setting fail 1', res)
        }
      })
      uni.redirectTo({
        url: '/pages/index/setting',
        success(res) {
          console.log('redirectTo setting success')
        },
        fail(res) {
          console.log('redirectTo setting fail 2', res)
        }
      })
      uni.redirectTo({
        url: '/pages/index/setting',
        success(res) {
          console.log('redirectTo setting success')
        },
        fail(res) {
          console.log('redirectTo setting fail 3', res)
        }
      })
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
