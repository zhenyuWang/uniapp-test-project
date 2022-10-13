<template>
	<view @click="click" class="content">
		<TestCreateCanvasContext />
		<canvas canvas-id="index" style="border:1px solid #ccc;"></canvas>
	</view>
</template>

<script>
	import TestCreateCanvasContext from '../../components/TestCreateCanvasContext.vue'
	export default {
		components:{TestCreateCanvasContext},
		data() {
			return {
				title: 'Hello'
			}
		},
		onReady() {
			
		},
		methods: {
			click(){
				console.log('this',this)
				const ctx = uni.createCanvasContext('index',this)
				console.log('ctx123',ctx)
				uni.canvasToTempFilePath({
					canvasId:'index',
					x:0,
					y:0,
					width:120,
					height:120,
					success(res){
						console.log('canvasToTempFilePath',res);
					}
				},this)
				
				const data = new Uint8ClampedArray([255, 0, 0, 255,255, 0, 0, 255,255, 0, 0, 255,255, 0, 0, 255,255, 0, 0, 255])
				uni.canvasPutImageData({
				  canvasId: 'index',
				  x: 10,
				  y: 10,
				  width: 2,
					height: 2,
				  data: data,
				  complete(res) {
						console.log('canvasPutImageData complete',res);
					}
				})

			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
