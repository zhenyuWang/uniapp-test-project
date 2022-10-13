<template>
	<view>
		<canvas canvas-id="TestCreateCanvasContext" style="border:1px solid #09c;"></canvas>
		<video id="myVideo" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/360e4b20-4f4b-11eb-8a36-ebb87efcf8c0.mp4"></video>
		<map id="map" class="map" :show-location="true"></map>
		<view class="scroll"></view>
		<view class="test"></view>
	</view>
</template>

<script>
	export default {
		name:"TestCreateCanvasContext",
		data() {
			return {
				
			};
		},
		onReady(){
			const ctx = uni.createCanvasContext('TestCreateCanvasContext',this)
			console.log('TestCreateCanvasContext ctx',ctx)
			
			ctx.fillRect(0,0,10,10)
			ctx.draw()
			
			uni.canvasToTempFilePath({
				canvasId:'TestCreateCanvasContext',
				x:0,
				y:0,
				width:120,
				height:120,
				success(res){
					console.log('canvasToTempFilePath',res);
				}
			},this)
			uni.canvasGetImageData({
				canvasId:'TestCreateCanvasContext',
				x:0,
				y:0,
				width:10,
				height:10,
				success(res){
					console.log('canvasGetImageData',res)
				}
			},this)
			
			const videoContext = uni.createVideoContext('myVideo',this)
			console.log('videoContext',videoContext);
			
			const mapContext = uni.createMapContext("map", this);
			console.log('mapContext',mapContext);
			
			const mediaQueryOb = uni.createMediaQueryObserver(this)
			console.log('mediaQueryOb',mediaQueryOb);
			
		}
	}
</script>

<style>

</style>