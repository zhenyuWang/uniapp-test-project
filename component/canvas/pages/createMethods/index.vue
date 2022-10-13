<template>
	<view>
		<canvas canvas-id="createMethod1" class="canvas createMethod1"></canvas>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onReady(){
			const ctx = uni.createCanvasContext('createMethod1',this)
			const pattern = ctx.createPattern('../../static/logo.png','repeat')
			console.log('---------pattern',pattern)
			ctx.fillStyle = pattern
			ctx.fillRect(0,0,100,100)
			ctx.draw(true)
			
			const linearGradientRes = ctx.createLinearGradient(100,0,200,0)
			linearGradientRes.addColorStop(0,'blue')
			linearGradientRes.addColorStop(0.5,'red')
			linearGradientRes.addColorStop(1,'#09c')
			ctx.fillStyle = linearGradientRes
			ctx.fillRect(100,0,100,30)
			ctx.draw(true)
			
			const radialGradientRes = ctx.createCircularGradient(250,50,50,250,50,0)
			radialGradientRes.addColorStop(0,'blue')
			radialGradientRes.addColorStop(0.5,'yellow')
			radialGradientRes.addColorStop(1,'white')
			ctx.fillStyle = radialGradientRes
			ctx.fillRect(200,0,100,100)
			ctx.draw(true)
		}
	}
</script>

<style>

</style>
