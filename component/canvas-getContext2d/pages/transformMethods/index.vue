<template>
	<view>
		<canvas canvas-id="transform1" type="2d" class="canvas transform1"></canvas>
		<canvas canvas-id="transform2" type="2d" class="canvas transform2"></canvas>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onReady() {
			console.log('transformMethods onReady')
			const query = uni.createSelectorQuery()
			query.select('.transform1').node(res => {
				const canvas = res.node
				const ctx = canvas.getContext('2d')
				ctx.translate(50, 50)
				ctx.rotate(45 * Math.PI / 180);
				ctx.scale(1, 0.5)
				ctx.fillRect(0,0,100,30)
				
				ctx.rotate(-45 * Math.PI / 180)
				ctx.setTransform(1,1,0,1,0,0)
				ctx.fillStyle = '#09c'
				ctx.fillRect(100,0,100,50)
				ctx.fillRect(200,0,100,80)
				ctx.resetTransform()
				ctx.transform(1,1,0,1,0,0)
				ctx.transform(1,1,0,1,0,0)
				
				ctx.fillRect(0,0,100,20)
				const contextAttributes = ctx.getContextAttributes()
				console.warn(`contextAttributes:${JSON.stringify(contextAttributes )}`)
				const getLineDashRes = ctx.getLineDash()
				console.warn(`getLineDashRes:${JSON.stringify(getLineDashRes )}`)
				const getTransformRes = ctx.getTransform()
				console.warn(`getTransformRes:${JSON.stringify(getTransformRes)}`)
				}).exec()
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
