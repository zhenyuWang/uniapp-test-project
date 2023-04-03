<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// uni.addInterceptor('request', {
			// 	success(res) {
			// 		console.log('interceptor-success', res);
			// 		res.cookies.push('1','2')
			// 	},
			// 	fail(err) {
			// 		console.log('interceptor-fail', err)
			// 	}
			// })
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
