<template>
	<view>
		<canvas canvas-id="styleMethod" type="2d" class="canvas styleMethod"></canvas>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'canvas',
				canvasWidth: 0,
				startStatus: false,
				ballList: []
			}
		},
		onReady: function() {
			const query = uni.createSelectorQuery()
			query.select('.styleMethod').fields({context:true,node:true}).exec(res => {
				const canvas = res[0].node
				const ctx = canvas.getContext('2d')
				ctx.direction = 'rtl'
				console.log(`ctx.direction:----------------${ctx.direction}`)
				
				
				ctx.fillStyle = '#ff0000'
				ctx.fillRect(0, 0, 60, 50)
				
				ctx.filter = "blur(10px)"
				ctx.fillRect(70,0,20,20)
				ctx.filter = 'blur(0px)'
				
				ctx.font = "bold 14px serif"
				ctx.fontKerning = 'normal'
				console.log(`ctx.fontKerning:----------------${ctx.fontKerning}`)
				ctx.fontStretch = 'expanded'
				console.log(`ctx.fontStretch:----------------${ctx.fontStretch}`)
				ctx.fontVariantCaps = 'small-caps'
				console.log(`ctx.fontVariantCaps:----------------${ctx.fontVariantCaps}`)
				ctx.fillText("this is styleMethod 哈哈",10,70)
				
				ctx.globalAlpha = 0.2
				ctx.fillRect(0,75,20,20)
				ctx.globalAlpha = 1
				
				ctx.globalCompositeOperation = "xor"
				ctx.fillStyle = '#0000ff'
				ctx.fillRect(0,100,30,30)
				ctx.fillStyle = '#00ff00'
				ctx.fillRect(20,120,30,30)
				ctx.globalCompositeOperation = "source-over"
				
				ctx.imageSmoothingEnabled = false
				console.log(`ctx.imageSmoothingEnabled:----------------${ctx.imageSmoothingEnabled}`)
				ctx.imageSmoothingQuality = 'high'
				console.log(`ctx.imageSmoothingQuality:----------------${ctx.imageSmoothingQuality}`)
				
				ctx.letterSpacing = '10px'
				console.log(`ctx.letterSpacing:----------------${ctx.letterSpacing}`)
				ctx.fillText('test letterSpacting',30,100)
				
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
				
				ctx.beginPath()
				ctx.lineWidth = 3
				ctx.setLineDash([30, 30])
				ctx.moveTo(70,50)
				ctx.lineTo(160,50)
				ctx.stroke()
				
				ctx.shadowColor = '#09c'
				ctx.shadowBlur = 20
				ctx.fillRect(160,0,30,30)
				ctx.shadowOffsetX = 10
				ctx.shadowOffsetY = 10
				ctx.fillRect(200,0,30,30)
				
				ctx.strokeStyle = "green"
				ctx.strokeRect(250,0,30,30)
				
				ctx.textAlign = 'left'
				ctx.textBaseline = 'top'
				// ctx.textBaseline = 'hanging'
				// ctx.textBaseline = 'middle'
				// ctx.textBaseline = 'bottom'
				ctx.textRendering = 'geometricPrecision'
				ctx.wordSpacing = '20px'
				ctx.fillText('test text',200,60)
			})
		}
	}
</script>
