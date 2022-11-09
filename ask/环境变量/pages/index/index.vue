<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view v-for="item in list" :key="item">{{item}}</view>
	</view>
</template>

<script lang="ts">
	import Vue from 'vue'
	export default Vue.extend({
		data() {
			return {
				title: 'Hello',
				list:[1,2,3]
			}
		},
		onLoad() {
			console.log('onLoad')
		},
		methods: {

		}
	})
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
