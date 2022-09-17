<template>
	<view>
		this is page setting test
		<navigator url="/pages/user/user">go user</navigator>
		<button type="primary" @click="goAbout">goAbout</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			goAbout() {
				uni.redirectTo({
					url: '/pages/about/about?id=123'
				})
			}
		}
	}
</script>

<style>

</style>
