<template>
	<view class="content">
		<canvas canvas-id="canvas" class="canvas" @touchstart.stop="handleTouchstart" @touchmove.stop="handleTouchmove" @touchend.stop="handleTouchend"></canvas>
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
			handleTouchstart(e){
				console.log('handleTouchstart',e);
			},
			handleTouchmove(e){
				console.log('handleTouchmove',e);
			},
			handleTouchend(e){
				console.log('handleTouchend',e);
			}
		}
	}
</script>

<style>
	.canvas {
		width: 610rpx;
		height: 610rpx;
		background-color: #fff;
		border: 1px solid red;
	}
</style>
