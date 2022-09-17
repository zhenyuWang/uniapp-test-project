<template>
	<page-meta
	page-style="color: green"
	:root-font-size="fontSize">
		<head> 
			<meta name="keyword" ontent="123123" />
		</head>
	</page-meta>
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
				title: 'Hello',
				fontSize:'14px'
			}
		},
		onShow() {
			// setTimeout(() => {
				this.fontSize = '80px'
			// },1000)
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
		font-size: 1rem;
	}
</style>
