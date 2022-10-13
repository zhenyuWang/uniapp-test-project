<template>
	<view>
		<canvas canvas-id="transform1" class="canvas transform1"></canvas>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onReady() {
			const ctx = uni.createCanvasContext('transform1',this)
			ctx.translate(50, 50)
			ctx.rotate(45 * Math.PI / 180);
			ctx.scale(1, 0.5)
			ctx.fillRect(0,0,100,30)
			ctx.draw(true)
			
			ctx.rotate(-45 * Math.PI / 180)
			ctx.setTransform(1,1,0,1,0,0)
			ctx.fillStyle = '#09c'
			ctx.fillRect(100,0,100,50)
			ctx.fillRect(200,0,100,80)
			ctx.transform(1,1,0,1,0,0)
			ctx.transform(1,1,0,1,0,0)
			ctx.draw(true)
		},
		methods: {
			
		}
	}
</script>

<style>
	.createImage{
		width: 300px;
		height: 150px;
		border: 1px solid red;
	}
</style>
