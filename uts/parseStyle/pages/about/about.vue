<template>
	<view>
		<view>this is page about</view>
		<button @click="reLaunchIndex">reLaunchIndex</button>
		<button @click="navigateToDetail">navigateToDetail</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onReady(){
			// uni.showLoading()
		},
		methods: {
			reLaunchIndex(){
				uni.reLaunch({
					url: '/pages/index/index'
				})
			},
			navigateToDetail(){
				uni.navigateTo({
					url: '/pages/detail/detail'
				})
			}
		}
	}
</script>

<style>

</style>
