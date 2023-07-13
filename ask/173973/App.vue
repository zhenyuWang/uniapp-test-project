<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		getThemeConfig() {
			return {
				borderRadius: '8rpx', // string
				backgroundColor: '#FE2C55', // string
				fontColor: '#ffffff', // string
			}
		},
		getPhoneNumber({
			params,
			success,
			fail
		}) {
			const {
				iv,
				encryptedData
			} = params;
			// ...
			// 开发者服务端解密 encryptedData，得到手机号
			// ...
			const result = {
				phoneNumber: '13580006666',
			}
			// 回调前端模板
			success(result)
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>