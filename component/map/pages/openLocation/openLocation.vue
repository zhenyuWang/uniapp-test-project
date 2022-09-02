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
				uni.openLocation({
					latitude: 39.909,
					longitude: 116.39742,
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
		}
	}
</script>

<style>

</style>
