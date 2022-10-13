<template>
	<view>
		<canvas canvas-id="getImageData1" type="2d" class="canvas getImageData1"></canvas>
		<canvas canvas-id="getImageData2" type="2d" class="canvas getImageData2"></canvas>
		<button type="primary" @click="canvasGetImageData">canvasGetImageData</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				y:0
			}
		}, 
		onReady: function() {
				const query1 = uni.createSelectorQuery().in(this)
				query1.select('.getImageData1').node(res => {
					const canvas = res.node
					const ctx = canvas.getContext('2d')
					
					ctx.fillStyle = '#ff0000'
					// ctx.fillStyle = '#09c'
					// ctx.fillStyle = '#00ff00'
					ctx.fillRect(0, 0, 100, 100)
					// const isPointInPathRes = ctx.isPointInPath(1,2)
					// console.log(`isPointInPathRes:${isPointInPathRes}`)
					// const isPointInStrokeRes = ctx.isPointInStroke(1,2)
					// console.log(`isPointInStrokeRes:${isPointInStrokeRes}`)
					const imageData = ctx.getImageData(0,0,10,10)
					console.log(`getImageData1 width:${JSON.stringify(imageData.width)}`)
					console.log(`getImageData1 height:${JSON.stringify(imageData.height)}`)
					// console.log(`getImageData1 data:${JSON.stringify(imageData.data)}`)
					const putImageDataRes = ctx.putImageData(imageData,110,0)
					console.warn(`putImageDataRes:${JSON.stringify(putImageDataRes)}`)
					// for(let i = 0;i<20;i++){
					// 	if(i===0){
					// 		console.log(`start:${Date.now()}`)
					// 	}
					// 	// ctx.clearRect(0,0,300,150)
					// 	let top = i*3
					// 	if(top>150){
					// 		top %= 150
					// 	}
					// 	// ctx.fillRect(150,top,10,10)
					// 	ctx.moveTo(150,top)
					// 	ctx.lineTo(250,top)
					// 	// ctx.moveTo(150,2)
					// 	// ctx.lineTo(250,2)
					// 	ctx.closePath()
					// 	ctx.stroke()
					// 	if(i===99){
					// 		console.warn(`end:${Date.now()}`)
					// 	}
					// }
					// console.warn('after for and before getImageData')
					// const isPointInPathRes = ctx.isPointInPath(1,2)
					// console.warn(`isPointInPathRes:${isPointInPathRes}`)
					// const imageDataLine = ctx.getImageData(150,0,100,40)
					// console.warn(`imageDataLine: ${JSON.stringify(imageDataLine)}`)
					// ctx.putImageData(imageDataLine,110,50)
				}).exec()
				
				const query2 = uni.createSelectorQuery().in(this)
				query2.select('.getImageData2').node(res => {
					const canvas = res.node
					const ctx = canvas.getContext('2d')
					ctx.fillStyle = '#ff0000'
					ctx.fillRect (0,0,100,100)
					const isPointInPathRes = ctx.isPointInPath(0,0)
					console.log(`isPointInPathRes:${isPointInPathRes}`)
					
					const imageData = ctx.getImageData(10,10,13,13)
					// const imageData = ctx.getImageData(0,0,20,20)
					// console.log(`getImageData2 width:${JSON.stringify(imageData.width)}`)
					// console.log(`getImageData2 height:${JSON.stringify(imageData.height)}`)
					// console.log(`getImageData2 data:${JSON.stringify(imageData.data)}`)
					const putImageDataRes = ctx.putImageData(imageData,110,0)
					console.warn(`putImageDataRes:${JSON.stringify(putImageDataRes)}`)
				}).exec()
		},
		methods:{
			canvasGetImageData(){
				const query1 = uni.createSelectorQuery().in(this)
				query1.select('.getImageData1').node(res => {
					const canvas = res.node
					const ctx = canvas.getContext('2d')
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
					const imageDataLine = ctx.getImageData(150,0,100,60)
					console.warn(`imageDataLine: ${JSON.stringify(imageDataLine)}`)
					ctx.putImageData(imageDataLine,110,50)
				}).exec()
			}
		}
	}
</script>
