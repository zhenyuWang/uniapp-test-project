<template>
	<view class="content">
		<button type="primary" @click="openDocument">openDocument</button>
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
			openDocument(){
				console.log('openDocument');
				uni.downloadFile({
				  url: 'http://114.115.235.59/测试题.pdf',
				  success: function (res) {
				    var filePath = res.tempFilePath;
						console.log('downloadFile success',filePath);
				    uni.openDocument({
				      filePath: filePath,
				      showMenu: true,
				      success: function (res) {
				        console.log('打开文档成功');
				      }
				    });
				  }
				});
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
