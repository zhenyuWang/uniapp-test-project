<template>
	<view>
		<view>this is page about</view>
		<button @click="reLaunchIndex">reLaunchIndex</button>
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
			}
		}
	}
</script>

<style>

</style>
