<template>
	<view>
		<canvas canvas-id="createMethod1" type="2d" class="canvas createMethod1"></canvas>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onReady(){
			const query = uni.createSelectorQuery()
			query.select('.createMethod1').node(res => {
				const canvas = res.node
				const ctx = canvas.getContext('2d')
				
				// #ifdef MP-WEIXIN || MP-TOUTIAO
				const img = canvas.createImage()
				img.src = '../../static/logo.png'
				img.onload = () => {
					const pattern =	ctx.createPattern(img,'repeat')
					ctx.fillStyle = pattern
					ctx.fillRect(0,0,100,100)
				}
				// #endif
				// #ifndef MP-WEIXIN || MP-TOUTIAO
				const pattern =	ctx.createPattern('../../static/logo.png','repeat')
				ctx.fillStyle = pattern
				ctx.fillRect(0,0,100,100)
				// #endif
				
				const imageData = ctx.getImageData(0,0,10,10)
				console.log('getImageData1 width',imageData.width)
				console.log('getImageData1 height',imageData.height)
				console.log('getImageData1 data',imageData.data)
				const createImageDataRes1 = ctx.createImageData(imageData)
				console.log(`createImageDataRes1.width:${JSON.stringify(createImageDataRes1.width)}`)
				console.log(`createImageDataRes1,height:${JSON.stringify(createImageDataRes1.height)}`)
				console.log(`createImageDataRes1,data:${JSON.stringify(createImageDataRes1.data)}`)
				
				const createImageDataRes2 = ctx.createImageData(10,10)
				console.log('createImageDataRes2',createImageDataRes2)
				console.log(`createImageDataRes2.width:${JSON.stringify(createImageDataRes2.width)}`)
				console.log(`createImageDataRes2,height:${JSON.stringify(createImageDataRes2.height)}`)
				console.log(`createImageDataRes2,data:${JSON.stringify(createImageDataRes2.data)}`)
				
				const linearGradientRes = ctx.createLinearGradient(100,0,200,0)
				linearGradientRes.addColorStop(0,'blue')
				linearGradientRes.addColorStop(0.5,'red')
				linearGradientRes.addColorStop(1,'#09c')
				ctx.fillStyle = linearGradientRes
				ctx.fillRect(100,0,100,30)
				
				const radialGradientRes = ctx.createRadialGradient(250,50,50,250,50,0)
				radialGradientRes.addColorStop(0,'blue')
				radialGradientRes.addColorStop(0.5,'yellow')
				radialGradientRes.addColorStop(1,'white')
				ctx.fillStyle = radialGradientRes
				ctx.fillRect(200,0,100,100)
				
				const conicGradient = ctx.createConicGradient(0, 150, 100)
				conicGradient.addColorStop(0, "red")
				conicGradient.addColorStop(0.25, "orange")
				conicGradient.addColorStop(0.5, "yellow")
				conicGradient.addColorStop(0.75, "green")
				conicGradient.addColorStop(1, "blue")
				ctx.fillStyle = conicGradient
				ctx.fillRect(100, 50, 100,100)
			}).exec()
		}
	}
</script>

<style>

</style>
