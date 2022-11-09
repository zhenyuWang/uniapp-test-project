<template>
	<view class="content">
		<view>this is index page</view>
		<button type="primary" @click="goAbout">goAbout</button>
		<view class="block"></view>
	</view>
</template>

<script>
	export default {
		onReachBottom() {
			console.log('index onReachBottom');
		},
		methods: {
			goAbout() {
				uni.navigateTo({
					url: '/pages/about/about'
				})
			},
		},
	}
</script>
<style>
	.block {
		width: 200px;
		height: 800px;
		background-color: #09c;
	}
</style>
