<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<button type="primary" @click="uploadFile">uploadFile</button>
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
			uploadFile(){
				uni.chooseImage({
					success(res){
						console.log('chooseImage success',res)
						const tempFilePaths = res.tempFilePaths
						const uploadTask = uni.uploadFile({
							url:'https://unidemo.dcloud.net.cn/upload',
							filePath:tempFilePaths[0],
							name:'file',
							formData:{
								'user':'test'
							},
							complete(uploadFileRes){
								console.log('uploadFile complete',uploadFileRes)
							}
						})
						uploadTask.onProgressUpdate(({progress,totalBytesSent,totalBytesExpectedToSend}) => {
							console.log('onProgressUpdate progress',progress)
							console.log('onProgressUpdate totalBytesSent',totalBytesSent)
							console.log('onProgressUpdate totalBytesExpectedToSend',totalBytesExpectedToSend)
						})
						// uploadTask.abort()
					}
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
