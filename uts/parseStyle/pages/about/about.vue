<template>
	<view>
		<view>this is page about1234</view>
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
