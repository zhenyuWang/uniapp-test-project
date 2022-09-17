<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<navigator url="/pages/about/about">go about</navigator>
		<input type="text">
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		// #ifdef MP-ALIPAY
		events: {
			onKeyboardHeight(e) {
				// 键盘高度变化时触发
				console.log('键盘高度123：', e.height);
			},
			onPullDownRefresh(e){
				console.log('onPullDownRefresh',e)
			},
			onTitleClick(){
				console.log('点击了标题');
			}
		}
		// #endif
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
