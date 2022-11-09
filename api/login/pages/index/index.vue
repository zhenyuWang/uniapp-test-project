<template>
	<view class="content">
		<button type="primary" open-type="login" @login="login">test login</button>
	</view>
</template>

<script>
	export default {
		methods: {
			login() {
				// 失败
				uni.login({
					success(res) {
						console.log('res',res)
					}
				})

				// 成功
				// uni.getLoginCode({
				// 	success(res) {
				// 		uni.getStorageSync('key')
				// 		uni.removeStorageSync('key')
				// 	}
				// })

				// 成功
				// uni.login({
				// 	success(res) {
				// 		uni.getStorageSync('key1')
				// 		uni.getStorageSync('key2')
				// 	}
				// })

				// 成功
				// uni.setStorage({
				// 	key:'test-key',
				// 	data:'test-data',
				// 	success(){
				// 		uni.login({})
				// 	}
				// })

				// 成功
				// uni.checkSession({
				// 	fail: function() {
				// 		uni.login({})
				// 	}
				// })
				
				// 失败
				// uni.setStorage({
				// 	key:'test-key',
				// 	data:'test-data',
				// 	success(){
				// 		uni.login({
				// 			success(){
				// 				uni.getStorageSync('test-key')
				// 			}
				// 		})
				// 	}
				// })
				
				// 成功
				// uni.setStorage({
				// 	key:'test-key',
				// 	data:'test-data',
				// 	success(){
				// 		uni.getLoginCode({
				// 			success(){
				// 				uni.getStorageSync('test-key')
				// 			}
				// 		})
				// 	}
				// })
				
				// 成功
				// uni.login({
				// 	success(res) {
				// 		swan.getStorageSync('key')
				// 		swan.removeStorageSync('key')
				// 	}
				// })
				
				// 替换login关键字后成功
				// uni.myTest({
				// 	success(res) {
				// 		uni.getStorageSync('key')
				// 		uni.removeStorageSync('key')
				// 	}
				// })
			},
		}
	}
</script>
