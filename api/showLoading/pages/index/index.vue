<template>
	<view class="content" @click="contentClick">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<text class="test-text">test text</text>
		<button type="primary" @click="showLoading">show loading</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				appUserInfo: {}
			}
		},
		methods: {
			showLoading() {
				uni.showLoading({
					title: 'test loading'
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
		width: 100vw;
		height: 100vh;
		background-color: antiquewhite;
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

	.test-text {
		font-size: 40rpx;
	}
</style>
