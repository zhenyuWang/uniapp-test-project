<template>
	<view class="content">
		this is user
		<button type="primary" @click="goIndex">go index</button>
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
			goIndex(){
				uni.redirectTo({
					url:'/pages/index/index'
				})
			}
		}
	}
</script>

<style>

</style>
