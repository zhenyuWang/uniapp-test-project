<template>
	<view>
		<canvas canvas-id="drawMethods1" class="canvas drawMethods1"></canvas>
		<canvas canvas-id="drawMethods2" class="canvas drawMethods2"></canvas>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onReady(){
			const ctx1 = uni.createCanvasContext('drawMethods1',this)
			ctx1.arc(30,30,30,0,360)
			ctx1.stroke()
			ctx1.draw(true)
			
			ctx1.moveTo(70, 20)
			ctx1.arcTo(70,90,120,10,30)
			ctx1.stroke()
			ctx1.draw(true)
			
			ctx1.beginPath()
			ctx1.strokeStyle = 'blue'
			ctx1.moveTo(70,30)
			ctx1.lineTo(120,30)
			ctx1.closePath()
			ctx1.stroke()
			ctx1.draw(true)
			
			ctx1.beginPath()
			ctx1.moveTo(140,5)
			ctx1.bezierCurveTo(140, 5, 200, 40, 140, 50)
			ctx1.stroke()
			ctx1.closePath()
			ctx1.draw(true)
			
			ctx1.drawImage('../../static/logo.png',180,0,30,30)
			ctx1.draw(true)
			
			ctx1.quadraticCurveTo(10, 70, 90, 70)
			ctx1.stroke()
			ctx1.draw(true)
			
			ctx1.rect(100, 50, 20, 20)
			ctx1.fill()
			ctx1.draw(true)
			
			ctx1.save()
			ctx1.fillStyle = 'green'
			ctx1.fillRect(130,55,20,20)
			ctx1.restore()
			ctx1.fillRect(155,55,20,20)
			ctx1.draw(true)
			
			ctx1.strokeRect(180,50,30,20)
			ctx1.draw(true)
			
			ctx1.font = '14px serif'
			ctx1.strokeText("strokeText", 215, 60)
			ctx1.draw(true)
			
			const measureTextRes = ctx1.measureText('test font')
			console.warn(`measureTextRes.width:${measureTextRes.width}`)
			console.warn(`typeof measureTextRes.width:${typeof measureTextRes.width}`)
			
			// setTimeout(() => {
			// 	ctx1.clearRect(0,0,300,150)
			// },2000)
			
			const ctx2 = uni.createCanvasContext('drawMethods2',this)
			ctx2.fillStyle = '#09d'
			ctx2.arc(50, 50, 40, 0, 360)
			ctx2.clip()
			ctx2.fillRect(0, 0, 100,100)
			ctx2.draw(true)
		},
		methods:{
		}
	}
</script>

<style>
	.block{
		width: 100vw;
		height: 600px;
		border:1px solid #09c;
	}
</style>
