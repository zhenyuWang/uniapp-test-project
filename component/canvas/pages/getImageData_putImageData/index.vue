<template>
	<view>
		<!-- <canvas canvas-id="getImageData1" :hidpi="false" class="canvas getImageData1"></canvas> -->
		<canvas canvas-id="getImageData1" class="canvas getImageData1"></canvas>
		<canvas canvas-id="getImageData2" class="canvas getImageData2"></canvas>
		<button type="primary" @click="test">test</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		onReady: function() {
			const ctx1 = uni.createCanvasContext('getImageData1', this)
			ctx1.fillStyle = '#ff0000'
			ctx1.fillRect(0, 0, 100, 100)
			ctx1.draw(true)

			// for (let i = 0; i < 10; i++) {
			// 	ctx1.moveTo(150, i * 3)
			// 	ctx1.lineTo(250, i * 3)
			// 	ctx1.closePath()
			// 	ctx1.stroke()
			// 	if (i === 9) {
			// 		console.warn('for 循环 end')
			// 	}
			// }
			// ctx1.drawImage('../../static/logo.png', 0, 0,10,10)
			// ctx1.draw(true, () => {
			// 	uni.canvasGetImageData({
			// 		canvasId: 'getImageData1',
			// 		x: 0,
			// 		y: 0,
			// 		width: 10,
			// 		height: 10,
			// 		success(imageData) {
			// 			console.log('imageData----------------', imageData)
			// 			uni.canvasPutImageData({
			// 				canvasId: 'getImageData1',
			// 				data: imageData.data,
			// 				x: 120,
			// 				y: 10,
			// 				width: 10,
			// 				height: 10,
			// 				complete() {
			// 					console.log('getImageData1 putImageData complete');
			// 				}
			// 			})
			// 		}
			// 	})
			// })


			uni.canvasGetImageData({
				canvasId: 'getImageData1',
				x: 0,
				y: 0,
				width: 10,
				height: 10,
				success(imageData) {
					console.log('getImageData1 width', imageData.width)
					console.log('getImageData1 height', imageData.height)
					console.log('getImageData1 data', imageData.data)
					uni.canvasPutImageData({
						canvasId: 'getImageData1',
						data: imageData.data,
						x: 120,
						y: 0,
						width: 10,
						height: 10,
						complete() {
							console.log('getImageData1 putImageData complete');
						}
					})
				}
			})

			const ctx2 = uni.createCanvasContext('getImageData2', this)
			ctx2.fillStyle = '#ff0000'
			ctx2.fillRect(0, 0, 100, 100)
			ctx2.draw()
			uni.canvasGetImageData({
				canvasId: 'getImageData2',
				x: 40,
				y: 0,
				width: 20,
				height: 10,
				success(imageData) {
					console.log('getImageData2 width', imageData.width)
					console.log('getImageData2 height', imageData.height)
					console.log('getImageData2 data', imageData.data)
					uni.canvasPutImageData({
						canvasId: 'getImageData2',
						data: imageData.data,
						x: 120,
						y: 0,
						width: 20,
						height: 10,
						complete() {
							console.log('getImageData2 putImageData complete');
						}
					})
				}
			})
		},
		methods: {
			test(){
				const ctx = uni.createCanvasContext('getImageData1', this)
				for(let i = 0;i<20;i++){
					let top = i*3
					if(top>150){
						top %= 150
					}
					ctx.moveTo(150,top)
					ctx.lineTo(250,top)
					ctx.closePath()
					ctx.stroke()
				}
				ctx.draw(true,() => {
					uni.canvasGetImageData({
						canvasId: 'getImageData1',
						x: 150,
						y: 0,
						width: 100,
						height: 50,
						success(imageData) {
							console.warn('getImageData1 width', imageData.width)
							console.warn('getImageData1 height', imageData.height)
							console.log('getImageData1 data', imageData.data)
							uni.canvasPutImageData({
								canvasId: 'getImageData1',
								data: imageData.data,
								x: 120,
								y: 0,
								width: 100,
								height: 50,
								complete() {
									console.log('getImageData1 putImageData complete');
								}
							})
						}
					})
				})
			}
		}
	}
</script>
