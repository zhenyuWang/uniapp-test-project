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
		onLoad() {
			uni.request({
				url:'http://localhost:8090',
				success(res) {
					console.log('index request success', res);
				},
				fail(res) {
					console.log('index request fail', res);
				}
			})
			uni.request({
				url:'http://localhost:8090/err?code=500',
				success(res) {
					console.log('index request/error success', res);
				},
				fail(res) {
					console.log('index request/error fail', res);
				}
			})
			
			fetch('http://localhost:8090/err?code=500').then(res => {
				console.log('fetch success',res)
			}).catch(err => {
				console.log('fetch fail', err);
			})
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