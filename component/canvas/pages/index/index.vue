<template>
	<view>
		<navigator url="/pages/getImageData_putImageData/index">go getImageData_putImageData</navigator>
		<navigator url="/pages/styleMethods/index">go styleMethods</navigator>
		<navigator url="/pages/transformMethods/index">go transformMethods</navigator>
		<navigator url="/pages/drawMethods/index">go drawMethods</navigator>
		<navigator url="/pages/createMethods/index">go createMethods</navigator>
		<navigator url="/pages/frequentDraw/index">go frequentDraw</navigator>
		<canvas canvas-id="index" class="canvas index"></canvas>
		<button type="primary" @click="draw">draw</button>
	</view>
</template>

<script>
	import logo from '../../static/logo.png'
	export default {
		data() {
			return {
				title: 'canvas',
			}
		},
		onReady: function() {
			const ctx = uni.createCanvasContext('index')
			console.log('ctx',ctx)
			// ctx.transform(1,1,0,1,0,0)
			// ctx.transform(1,1,0,1,0,0)
			// ctx.fillRect(0,0,100,30)
			// ctx.draw(true)
			// const measureTextRes = ctx.measureText('test font')
			// console.warn(`measureTextRes:${JSON.stringify(measureTextRes)}`);
		},
		methods:{
			draw(){
				console.log('this-------',this)
				const ctx = uni.createCanvasContext('index',this)
				ctx.transform(1,1,0,1,0,0)
				ctx.transform(1,1,0,1,0,0)
				ctx.fillRect(0,0,100,30)
				ctx.draw(true)
			}
		}
	}
</script>

<style>
	
</style>
