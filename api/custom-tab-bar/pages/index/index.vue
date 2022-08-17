<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<button @click="goLogs">goLogs</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello custom tabbar'
			}
		},
		onShow() {
			// #ifdef MP-WEIXIN | MP-QQ | MP-ALIPAY
			const _self = getCurrentPages()[0]
			console.log('_self',_self)
			if (typeof _self.getTabBar === 'function' && _self.getTabBar()) {  
			    _self.getTabBar().setData({  
			        selected: 0 
			    });  
			}
			// #endif
		},
		methods: {
			goLogs(){
				uni.switchTab({url:'/pages/logs/logs'})
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
