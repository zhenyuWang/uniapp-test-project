<template>
	<view class="content">
		<text>{{globalDataStr}}</text>
		<text>{{globalDataNum}}</text>
		<text>{{globalDataBool}}</text>
		<button @click="setGlobalData">setGlobalData</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				globalDataStr: '',
				globalDataNum: 0,
				globalDataBool: false,
			}
		},
		onReady(){
			this.globalDataStr = getApp().globalData.str
			this.globalDataNum = getApp().globalData.num
			this.globalDataBool = getApp().globalData.bool
		},
		methods: {
			setGlobalData() {
			  const app = getApp()
			  app.globalData.str = 'new global data str'
			  app.globalData.num = 456
			  app.globalData.bool = false
			},
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
