<template>
	<view class="content">
		this is index
		<button type="primary" @click="goAbout">go about</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			goAbout(){
				uni.redirectTo({
					url:'/pages/about/about'
				})
			}
		}
	}
</script>

<style>

</style>
