<template>
	<view class="content">
		<view>test getStorageInfo</view>
		<button type="primary" @click="getStorageInfo">getStorageInfo</button>
		<button type="primary" @click="setStorageSync">setStorageSync</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			getStorageInfo(){
				uni.setStorage({
					key: 'storage_key',
					// data: '测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字',
					data: '测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字',
					success: function () {
						console.warn('setStorage success')
						uni.getStorageInfo({
							success(res){
								console.warn(`getStorageInfo success`)
								console.warn(`getStorageInfo: ${JSON.stringify(res)}`)
							},
							fail(){
								console.warn*('getStorageInfo fail')
							}
						})
					},
					fail(){
						console.warn('setStorage fail')
					}
				});
			},
			setStorageSync(){
				const key = "setStorageSync-key"
				// const data = encodeURI(`<p>商业服务基本上是公司在做了，业务也是公司在接</p>\n`)
				// const data = `<p>商业服务基本上是公司在做了，业务也是公司在接</p>\n<p>商业服务基本上是公司在做了，业务也是公司在接</p>\n<p>商业服务基本上是公司在做了，业务也是公司在接</p>\n<p>商业服务基本上是公司在做了，业务也是公司在接</p>\n<p>商业服务基本上是公司在做了，业务也是公司在接</p>\n<p>商业服务基本上是公司在做了，业务也是公司在接</p>\n<p>商业服务基本上是公司在做了，业务也是公司在接</p>\n<p>商业服务基本上是公司在做了，业务也是公司在接</p>\n<p>商业服务基本上是公司在做了，业务也是公司在接</p>\n<p>商业服务基本上是公司在做了，业务也是公司在接</p>\n<p>商业服务基本上是公司在做了，业务也是公司在接</p>\n<p>商业服务基本上是公司在做了，业务也是公司在接</p>\n<p>商业服务基本上是公司在做了，业务也是公司在接</p>\n`
				// const data = '测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字'
				// const data = '测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字'
				const data = 'test texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest text'
				// const data = '测试文字'
				uni.setStorageSync(key,data)
				// uni.setStorageSync(key,data)
				// uni.setStorageSync(key,data)
				console.warn('after setStorageSync')
				const res = uni.getStorageInfoSync()
				console.warn(`getStorageInfoSync res:${JSON.stringify(res)}`)
			}
		}
	}
</script>

