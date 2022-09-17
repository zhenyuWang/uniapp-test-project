<template>
	<view>
		getLocation
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onReady() {
			uni.getLocation({
				type:'wgs84',
				// type: 'gcj02',
				success:(res) => {
					console.log('getLocation success',res);
				},
				complete(res) {
					console.log('getLocation complete',res)
				}
			})
		}
	}
</script>

<style>

</style>
