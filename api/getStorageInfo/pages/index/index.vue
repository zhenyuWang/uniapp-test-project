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
					data: '测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字',
					success: function () {
						uni.getStorageInfo({
							success(res){
								console.warn(`getStorageInfo: ${JSON.stringify(res)}`)
							}
						})
					}
				});
			},
			setStorageSync(){
				const key = "NeiRong_CaoGao"
				// const data = encodeURI(`<p>商业服务基本上是公司在做了，业务也是公司在接</p>\n`)
				// const data = `<p>商业服务基本上是公司在做了，业务也是公司在接</p>\n<p>商业服务基本上是公司在做了，业务也是公司在接</p>\n<p>商业服务基本上是公司在做了，业务也是公司在接</p>\n<p>商业服务基本上是公司在做了，业务也是公司在接</p>\n<p>商业服务基本上是公司在做了，业务也是公司在接</p>\n<p>商业服务基本上是公司在做了，业务也是公司在接</p>\n<p>商业服务基本上是公司在做了，业务也是公司在接</p>\n<p>商业服务基本上是公司在做了，业务也是公司在接</p>\n<p>商业服务基本上是公司在做了，业务也是公司在接</p>\n<p>商业服务基本上是公司在做了，业务也是公司在接</p>\n<p>商业服务基本上是公司在做了，业务也是公司在接</p>\n<p>商业服务基本上是公司在做了，业务也是公司在接</p>\n<p>商业服务基本上是公司在做了，业务也是公司在接</p>\n`
				const data = '测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字'
				// const data = '测试文字'
				uni.setStorageSync(key,data)
				const res = uni.getStorageInfoSync()
				console.warn(`getStorageInfoSync res:${JSON.stringify(res)}`)
			}
		}
	}
</script>

