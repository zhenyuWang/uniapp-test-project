<template>
	<view class="content">
		<button type="primary" @click="startLocationUpdate">startLocationUpdate 微信 百度 字节 快手</button>
		<button type="primary" @click="onLocationChange">onLocationChange 微信 百度 字节 快手</button>
		<button type="primary" @click="onLocationChangeError">onLocationChangeError 微信 字节</button>
		<button type="primary" @click="offLocationChangeFn1">offLocationChangeFn1 微信 百度 字节 快手</button>
		<button type="primary" @click="offLocationChangeAll">offLocationChangeAll 微信 百度 字节 快手</button>
		<button type="primary" @click="offLocationChangeError">offLocationChangeError 微信 字节</button>
		<button type="primary" @click="stopLocationUpdate">stopLocationUpdate 微信 百度 字节 快手</button>
		<button type="primary" @click="startLocationUpdateBackground">startLocationUpdateBackground 微信 快手</button>
		<button type="primary" @click="getLocation">getLocation</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				changeFn1: null,
				changeFn2: null,
				changeErrorFn1: null,
				changeErrorFn2: null,
			}
		},
		onReady() {
			this.changeFn1 = (res) => {
				console.log('onLocationChange res1', res)
			}
			this.changeFn2 = (res) => {
				console.log('onLocationChange res2', res)
			}

			this.changeErrorFn1 = (err) => {
				console.log('onLocationChange err1', err)
			}
			this.changeErrorFn2 = (err) => {
				console.log('onLocationChange err2', err)
			}
			uni.getLocation({
				// type:'wgs84',
				type: 'gcj02',
				success:(res) => {
					console.log('getLocation success',res);
				},
				complete(res) {
					console.log('getLocation complete',res)
				}
			})
			this.startLocationUpdate()
		},
		methods: {
			startLocationUpdate() {
				uni.startLocationUpdate({
					type: 'gcj02',
					success:(res)=> {
						console.log('startLocationUpdate success', res);
						uni.onLocationChange(this.changeFn1);
						uni.onLocationChange(this.changeFn2);
					},
					fail(err) {
						console.log('startLocationUpdate fail', err);
					},
					complete(res) {
						console.log('startLocationUpdate complete', res);
					}
				})

				// uni.startAccelerometer()
			},
			onLocationChange() {
				uni.onLocationChange(this.changeFn1);
				uni.onLocationChange(this.changeFn2);
				// uni.onAccelerometerChange(function (res) {
				// 	console.log(res.x);
				// 	console.log(res.y);
				// 	console.log(res.z);
				// });
			},
			onLocationChangeError() {
				uni.onLocationChangeError(this.changeErrorFn1);
				uni.onLocationChangeError(this.changeErrorFn2);
			},
			stopLocationUpdate() {
				uni.stopLocationUpdate({
					success(res) {
						console.log('stopLocationUpdate success', res);
					},
					fail(err) {
						console.log('stopLocationUpdate fail', err);
					},
					complete(res) {
						console.log('stopLocationUpdate complete', res);
					}
				})
				uni.stopAccelerometer()
			},
			offLocationChangeFn1() {
				uni.offLocationChange(this.changeFn1)
			},
			offLocationChangeAll() {
				const res1 = uni.offLocationChange()
				console.log('res1-------------', res1);
				uni.offAccelerometerChange()
			},
			offLocationChangeError() {
				uni.offLocationChangeError(this.changeErrorFn1)
			},
			startLocationUpdateBackground() {
				// #ifdef APP-PLUS | H5
				console.log('app-plus 及 H5 平台不支持 startLocationUpdateBackground')
				// #endif

				// #ifndef APP-PLUS | H5
				uni.startLocationUpdateBackground({
					type: 'gcj02',
					success(res) {
						console.log('startLocationUpdateBackground success', res);
					},
					fail(err) {
						console.log('startLocationUpdateBackground fail', err);
					},
					complete(res) {
						console.log('startLocationUpdateBackground complete', res);
					}
				})
				// #endif
			},
			getLocation() {
				uni.getLocation({
					type: 'gcj02',
					success(res) {
						console.log('getLocation success');
						console.log('res', res);
					},
					fail(err) {
						console.log('uni.getLocation fail');
						console.log('err', err)
					}
				})
			}
		}
	}
</script>
