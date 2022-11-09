<template>
	<view class="content">
		<view>test onAccelerometerChange</view>
		<button type="primary" @click="startAccelerometer">startAccelerometer</button>
		<button type="primary" @click="onAccelerometerChange">onAccelerometerChange</button>
		<view>x:{{x}}</view>
		<view>y:{{y}}</view>
		<view>z:{{z}}</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				x:0,
				y:0,
				z:0
			}
		},
		methods: {
			startAccelerometer(){
				uni.startAccelerometer({
					complete(res){
						console.log('startAccelerometer complete',res);
					}
				})
			},
			onAccelerometerChange(){
				uni.onAccelerometerChange(res => {
					this.x = res.x
					this.y = res.y
					this.z = res.z
					alert('onAccelerometerChange 触发')
				})
			}
		}
	}
</script>
