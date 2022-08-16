<template>
	<view>
		<button type="primary" @click="openLocation">openLocation nvue-3</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onReady() {
			
		},
		methods: {
			openLocation(){
				uni.getLocation({
					type: 'gcj02', //返回可以用于uni.openLocation的经纬度
					success: function (res) {
						const latitude = res.latitude;
						const longitude = res.longitude;
						uni.openLocation({
							latitude,
							longitude,
							scale:18,
							name:'当前位置当前位置当前位置当前位置当前位置当前位置当前位置当前位置当前位置当前位置当前位置当前位置当前位置',
							address: '111详细地址详细地址详细地址详细地址详细地址详细地址详细地址详细地址详细地址详细地址详细地址详细地址',
							success: function (res) {
								console.log('success',res);
							},
							fail: function(err){
								console.log('err',err);
							}
						});
					}
				});
			}
		}
	}
</script>

<style>

</style>
