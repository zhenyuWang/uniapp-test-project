<template>
	<view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onReady() {
			uni.getFuzzyLocation({
				type: 'wgs84',
				success(res) {
					console.log('success', res);
				},
				fail(err) {
					console.log('fail', err);
				},
				complate(res) {
					console.log('complate', res);
				}
			})
		},
		methods: {

		}
	}
</script>

<style>

</style>
