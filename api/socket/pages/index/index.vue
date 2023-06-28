<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onReady() {
			const socketTask0 = uni.connectSocket({
				url: "ws://192.168.0.106:8080",
				success() {
					console.warn('connectSocket success')
				},
				fail(error) {
					console.warn('connectSocket fail', error)
				}
			})
			socketTask0.onOpen(res => {
				console.warn('socketTask0.onOpen', res)
			})
			const socketTask1 = uni.connectSocket({
				url: 'ws://192.168.31.116:8080',
				complete(res) {
					console.log('connectSocket res1', res)
				}
			})
			const socketTask2 = uni.connectSocket({
				url: 'ws://192.168.31.116:8081',
				complete(res) {
					console.log('connectSocket res2', res)
				}
			})
			uni.onSocketOpen(function(res) {
				console.log('WebSocket连接已打开！', res);
				// socketTask.send({
				// 	data: 'msg from socketTask.send',
				// 	complete(res) {
				// 		console.log('socketTask.send complete', res)
				// 	}
				// });
			});
			// uni.onSocketOpen(function(res) {
			// 	console.log('WebSocket连接已打开-1！', res);
			// })
			// uni.onSocketOpen(function(res) {
			// 	console.log('WebSocket连接已打开-2！', res);
			// })
			uni.onSocketError(function(res) {
				console.log('WebSocket连接打开失败，请检查！', res);
			});
			uni.onSocketMessage(function(res) {
				console.log('收到服务器内容：', res);
			});
			uni.onSocketClose(function(res) {
				console.log('WebSocket 已关闭！', res);
			});
			setTimeout(() => {
				uni.sendSocketMessage({
					data: 'msg from uni.sendSocketMessage',
					complete(res) {
						console.log('sendSocketMessage complete', res)
					}
				});
			},1000)
		},
		methods: {

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