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
			    success(res) {  
			      console.log('addInterceptor request success',res)
			    },  
			    fail(err) {  
			      console.log('addInterceptor request fail',err)
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
