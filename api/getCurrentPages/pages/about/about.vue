<template>
	<view class="content">
		<view>this is about page</view>
		<button type="primary" @click="navigateTo">navigateTo setting</button>
		<button type="primary" @click="redirectTo">redirectTo setting</button>
		<view class="block"></view>
	</view>
</template>

<script>
	export default {
		onReachBottom(){
			console.log('about onReachBottom');
		},
		methods: {
			navigateTo(){
				uni.navigateTo({
					url:'/pages/setting/setting'
				})
			},
			redirectTo(){
				uni.redirectTo({
					url:'/pages/setting/setting'
				})
			}
		}
	}
</script>
<style>
	.block{
		width: 200px;
		height: 800px;
		background-color: #09c;
	}
</style>
