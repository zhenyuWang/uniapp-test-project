<template>
	<view>
		<map class='map' :latitude="latitude" :longitude="longitude" :show-location="true"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude: 39.909,
				longitude: 116.39742,
			}
		},
		onReady() {
			uni.getLocation({
				// type:'wgs84',
				type: 'gcj02',
				success:(res) => {
					console.log('getLocation success',res);
					this.longitude = res.longitude
					this.latitude = res.latitude
				},
				complete(res) {
					console.log('getLocation complete',res)
				}
			})
		}
	}
</script>

<style>
.map{
	width: 350px;
	height: 300px;
}
</style>
