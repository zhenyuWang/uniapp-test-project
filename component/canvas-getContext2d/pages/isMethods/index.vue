<template>
	<view>
		<canvas canvas-id="isMethods" type="2d" class="canvas isMethods"></canvas>
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
			query.select('.isMethods').node(res => {
				const canvas = res.node
				const ctx = canvas.getContext('2d')
				
				ctx.rect(0, 0, 100, 100)
				ctx.stroke()
				
				setTimeout(() => {
					const isPointInPathRes = ctx.isPointInPath(0,0)
					console.log(`isPointInPathRes:${isPointInPathRes}`) // true
					console.log(`typeof isPointInPathRes:${typeof isPointInPathRes}`) // true
					
					const isPointInStrokeRes = ctx.isPointInStroke(0,0)
					console.log(`isPointInStrokeRes:${isPointInStrokeRes}`) // true
					console.log(`typeof isPointInStrokeRes:${typeof isPointInStrokeRes}`) // true
				},100)
			}).exec()
		}
	}
</script>

<style>

</style>
