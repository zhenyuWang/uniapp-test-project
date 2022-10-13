<template>
	<view>
		<button @click="goIndex">goIndex</button>
		<button @click="goAbout">goAbout</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(){
			console.log('setting onLoad');
		},
		methods: {
			goIndex(){
				uni.switchTab({
					url:'/pages/index/index'
				})
			},
			goAbout(){
				uni.switchTab({
					url:'/pages/about/about'
				})
			}
		}
	}
</script>

<style>

</style>
