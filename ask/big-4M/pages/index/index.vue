<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<image class="test" src="/static/test.jpg"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<TestUseSlots>
			<view class="">test useSlots default slot</view>
		</TestUseSlots>
	</view>
</template>

<script setup>
	import TestUseSlots from '@/components/TestUseSlots.vue'
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
