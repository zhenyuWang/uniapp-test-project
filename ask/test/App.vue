<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
			uni.onTabBarMidButtonTap(() => {
				uni.navigateTo({
					url: '/pages/setting/setting'
				})
			})
			// const whiteList = ['/pages/setting/setting']
			// const list = ['navigateTo', 'redirectTo', 'reLaunch', 'switchTab']
			// list.forEach(item => {
			// 	uni.addInterceptor(item, {
			// 		invoke(args) {
			// 			console.log('444444444444444444444444444444',args.url)
			// 			console.log('5555555555555555555',args.url===whiteList[0])
			// 			// 白名单直接跳过  
			// 			if (whiteList[0] === args.url) {
			// 				console.log('in whiteList')
			// 			}else{
			// 				console.log('not in whiteList go setting')
			// 				uni.reLaunch({
			// 					url: '/pages/setting/setting'
			// 				})
			// 			}
			// 		}
			// 	})
			// })
		},
		onReady(){
			console.log('app onReady')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
