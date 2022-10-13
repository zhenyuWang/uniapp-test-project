<template>
	<view>
		<button type="primary" @click="chooseLocation()">chooseLocation</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			chooseLocation(){
				uni.getLocation({
					// type:'wgs84',
					type:'gcj02',
					success(res){
						console.log('getLocation success',res);
						uni.chooseLocation({
							latitude:res.latitude,
							longitude:res.longitude,
							// latitude:38,
							// longitude:115,
							success(res){
								console.log('chooseLocation success',res);
							},
							fail(err){
								console.log('chooseLocation fail',err);
							}
						})
					},
					fail(err){
						console.log('getLocation fail',err);
					}
				})
			}
		}
	}
</script>

<style>

</style>
