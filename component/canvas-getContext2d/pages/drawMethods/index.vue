<template>
	<view>
		<canvas canvas-id="drawMethods1" type="2d" class="canvas drawMethods1" @click="drawFocusIfNeeded">
		</canvas>
		<canvas canvas-id="drawMethods2" type="2d" class="canvas drawMethods2"></canvas>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// focus:false
			}
		},
		onReady(){
			const query1 = uni.createSelectorQuery()
			query1.select('.drawMethods1').node(res => {
				const canvas = res.node
				const ctx = canvas.getContext('2d')
				ctx.arc(30,30,30,0,360)
				ctx.stroke()
				
				ctx.moveTo(70, 20)
				ctx.arcTo(70,90,120,10,30)
				ctx.stroke()
				
				ctx.beginPath()
				ctx.strokeStyle = 'blue'
				ctx.moveTo(70,30)
				ctx.lineTo(120,30)
				ctx.closePath()
				ctx.stroke()
				
				ctx.beginPath()
				ctx.moveTo(140,5)
				ctx.bezierCurveTo(140, 5, 200, 40, 140, 50)
				ctx.stroke()
				ctx.closePath()
				
				// #ifdef MP-WEIXIN || MP-TOUTIAO
				const img = canvas.createImage()
				img.src = '../../static/logo.png'
				img.onload = () => {
					ctx.drawImage(img,180,0,30,30)
				}
				// #endif
				// #ifndef MP-WEIXIN || MP-TOUTIAO
				ctx.drawImage('../../static/logo.png',180,0,30,30)
				// #endif
				
				
				ctx.ellipse(250, 25, 30, 20, 0, 0, 360)
				ctx.stroke()
				
				ctx.quadraticCurveTo(10, 70, 90, 70)
				ctx.stroke()
				
				ctx.rect(100, 50, 20, 20)
				ctx.fillStyle = '#09c'
				console.log('ctx.reset',ctx.reset)
				ctx.reset()
				ctx.fill()
				
				// roundRect 安卓 4.4.4+  ios 不支持
				ctx.roundRect(10, 80, 70, 40,[0,10,20,30])
				ctx.stroke()
				
				ctx.save()
				ctx.fillStyle = 'green'
				ctx.fillRect(130,55,20,20)
				ctx.restore()
				ctx.fillRect(155,55,20,20)
				
				ctx.strokeRect(180,50,30,20)
				
				ctx.font = '14px serif'
				ctx.strokeText("strokeText", 215, 60)
				
				const measureTextRes = ctx.measureText('test font')
				console.warn(`measureTextRes.width:${measureTextRes.width}`)
				console.warn(`typeof measureTextRes.width:${typeof measureTextRes.width}`)
				
				// setTimeout(() => {
				// 	ctx.clearRect(0,0,300,150)
				// },2000)
			}).exec()
			
			const query2 = uni.createSelectorQuery()
			query2.select('.drawMethods2').node(res => {
				const canvas = res.node
				const ctx = canvas.getContext('2d')
				ctx.fillStyle = '#09d'
				ctx.arc(50, 50, 40, 0, 360)
				ctx.clip()
				ctx.fillRect(0, 0, 100,100)
			}).exec()
		},
		methods:{
			drawFocusIfNeeded(event){
				const self = this
				const query = uni.createSelectorQuery()
				query.select('.drawMethods1').node(res => {
					console.log(`res:${res}`)
					const canvas = res.node
					const ctx = canvas.getContext('2d')
					var x = event.detail.x
					var y = event.detail.y
					console.warn(`x:${x}`)
					console.warn(`y:${y}`)
					// 距离两个圈圈圆心的距离
					var distance = Math.sqrt((60 - x) * (60 - x) + (60 - y) * (60 - y));
					console.warn(`distance:${distance}`)
					// 根据距离和半径大小判断是否在圈内
					if (distance <= 50) {
						ctx.beginPath();
						ctx.arc(60, 60, 50, 0, Math.PI * 2);
						ctx.fillStyle = 'red';
						ctx.fill();
						ctx.drawFocusIfNeeded();
					}else{
						ctx.clearRect(0,0,300,150)
					}
				}).exec()
			}
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
