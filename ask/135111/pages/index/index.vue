<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<navigator url="/pages/about/about">go about</navigator>
		<view class="block">
			<view>11111</view>
			<view>11111</view>
			<view>11111</view>
			<view>11111</view>
			<view>11111</view>
			<view>11111</view>
			<view>11111</view>
			<view>11111</view>
			<view>11111</view>
			<view>11111</view>
			<view>11111</view>
			<view>11111</view>
			<view>11111</view>
			<view>11111</view>
			<view>11111</view>
			<view>11111</view>
			<view>11111</view>
			<view>11111</view>
			<view>11111</view>
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
			console.log('this is index onLoad');
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
		background-color: antiquewhite;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
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
	
	.block{
		width: 150px;
		height: 900px;
		background-color: aqua;
	}
</style>
