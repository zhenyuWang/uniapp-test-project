<template>
	<view>
		<canvas canvas-id="canvas" class="canvas"></canvas>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'canvas',
				canvasWidth: 0,
				startStatus: false,
				ballList: []
			}
		},
		onReady: function() {
			this.$nextTick(() => {
				uni.createSelectorQuery().select(".canvas").boundingClientRect(data => {
					this.canvasWidth = data.width
					const ctx = uni.createCanvasContext('canvas')
					console.log('ctx',ctx)
					ctx.fillStyle = '#0000ff'
					ctx.fillRect(0, 0, 200, 200)
					ctx.draw()
				}).exec()
			})
		},
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
