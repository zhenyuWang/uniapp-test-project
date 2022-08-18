<template>
	<view class="content">
		this is about
		<button type="primary" @click="goUser">go user</button>
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
			goUser(){
				uni.redirectTo({
					url:'/pages/user/user'
				})
			}
		}
	}
</script>

<style>

</style>
