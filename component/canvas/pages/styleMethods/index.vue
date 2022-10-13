<template>
	<view>
		<canvas canvas-id="styleMethod" class="canvas styleMethod"></canvas>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'canvas',
			}
		},
		onReady: function() {
			const ctx = uni.createCanvasContext('styleMethod')
			
			ctx.fillStyle = '#ff0000'
			ctx.fillRect(0, 0, 60, 50)
			ctx.draw(true)
			
			ctx.font = "bold 14px serif"
			ctx.fillText("this is styleMethod 哈哈",10,70)
			ctx.draw(true)
			
			ctx.globalAlpha = 0.2
			ctx.fillRect(0,75,20,20)
			ctx.globalAlpha = 1
			ctx.draw(true)
			
			ctx.globalCompositeOperation = "xor"
			ctx.fillStyle = '#0000ff'
			ctx.fillRect(0,100,30,30)
			ctx.fillStyle = '#00ff00'
			ctx.fillRect(20,120,30,30)
			ctx.globalCompositeOperation = "source-over"
			ctx.draw(true)
			
			ctx.beginPath()
			ctx.moveTo(105,10)
			ctx.lineCap = 'square'
			ctx.lineDashOffset = 4
			// ctx.lineCap = 'round'
			// ctx.lineCap = 'butt'
			// ctx.lineJoin = 'bevel'
			// ctx.lineJoin = 'round'
			ctx.lineJoin = 'miter'
			ctx.lineWidth = 10
			// 正数。规定最大斜接长度。如果斜接长度超过 miterLimit 的值，边角会以 lineJoin 的 "bevel" 类型来显示
			ctx.miterLimit = 2
			ctx.lineTo(150,10)
			ctx.lineTo(120,40)
			ctx.stroke()
			ctx.draw(true)
			
			ctx.beginPath()
			ctx.lineWidth = 3
			ctx.setLineDash([30, 30])
			ctx.moveTo(70,50)
			ctx.lineTo(160,50)
			ctx.stroke()
			ctx.draw(true)
			
			ctx.shadowColor = '#09c'
			ctx.shadowBlur = 20
			ctx.fillRect(160,0,30,30)
			ctx.shadowOffsetX = 10
			ctx.shadowOffsetY = 10
			ctx.fillRect(200,0,30,30)
			ctx.draw(true)
			
			ctx.strokeStyle = "green"
			ctx.strokeRect(250,0,30,30)
			ctx.draw(true)
			
			ctx.textAlign = 'left'
			ctx.textBaseline = 'top'
			// ctx.textBaseline = 'hanging'
			// ctx.textBaseline = 'middle'
			// ctx.textBaseline = 'bottom'
			ctx.fillText('test text',200,60)
			ctx.draw(true)
		}
	}
</script>
