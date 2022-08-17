<template>
	<view class="content">
		<canvas canvas-id="myCanvas" class="myCanvas" id="myCanvas"></canvas>
		<button type="primary" @click="test">test</button>
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
		onReady(){
			uni.createSelectorQuery().select(".myCanvas").boundingClientRect(data => {
				const ctx = uni.createCanvasContext('canvas')
				console.log('ctx',ctx)
				ctx.setStrokeStyle("#00ff00")
				ctx.setLineWidth(5)
				ctx.rect(0, 0, 200, 200)
				ctx.stroke()
				ctx.draw()
		}).exec()
		},
		methods: {
			test(){
				uni.canvasToTempFilePath({
				  x: 100,
				  y: 200,
				  width: 50,
				  height: 50,
				  destWidth: 100,
				  destHeight: 100,
				  canvasId: 'myCanvas',
				  success: function(res) {
				    // 在H5平台下，tempFilePath 为 base64
				    console.log('canvasToTempFilePath success',res.tempFilePath)
				  } 
				})

			}
		}
	}
</script>

<style>
	.myCanvas {
	    width: 610rpx;
	    height: 610rpx;
	    background-color: #fff;
			border:1px solid red;
	}
</style>