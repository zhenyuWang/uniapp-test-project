<template>
	<view>
		<navigator url="/pages/getImageData_putImageData/index">go getImageData_putImageData</navigator>
		<navigator url="/pages/styleMethods/index">go styleMethods</navigator>
		<navigator url="/pages/transformMethods/index">go transformMethods</navigator>
		<navigator url="/pages/drawMethods/index">go drawMethods</navigator>
		<navigator url="/pages/createMethods/index">go createMethods</navigator>
		<navigator url="/pages/isMethods/index">go isMethods</navigator>
		<navigator url="/pages/frequentDraw/index">go frequentDraw</navigator>
		<canvas canvas-id="home_test" type='2d' class="canvas home_test"></canvas>
		<button type="primary" @click="testAnimate">testAnimate</button>
		<button type="primary" @click="drawImage">drawImage</button>
		<button type="primary" @click="testCompress">testCompress</button>
		<view class="block" :style="`top:${top}px`"></view>
		<img :src="imgSrc" alt="">
	</view>
</template>

<script>
	import { pathToBase64 } from '../../js_sdk/mmmm-image-tools/index.js'
	export default {
		data() {
			return {
				y:0,
				top:0,
				timer:null,
				imgSrc:''
			}
		}, 
		onReady: function() {
			console.log('home onReady')
			// pathToBase64('/static/logo.png').then(res => {
			// 	console.warn(`pathToBase64 res:${res}`)
			// 	this.imgSrc = res
			// }).catch(e => {
			// 	console.warn(`pathToBase64 error:${JSON.stringify(e)}`)
			// })
			const self = this
			const query = uni.createSelectorQuery().in(this)
			query.select('.home_test').fields({node:true,context:true}).exec(res => {
				// console.warn(`res:${JSON.stringify(res)}`)
				const canvas = res[0].node
				const ctx = canvas.getContext('2d')
				// console.log('ctx',ctx);
				// ctx.setTransform(1,1,0,1,0,0)
				// ctx.setTransform(1,1,0,1,0,0)
				// ctx.transform(1,1,0,1,0,0)
				// ctx.transform(1,1,0,1,0,0)
				// ctx.fillRect(0,0,100,30)
				// const getTransformRes = ctx.getTransform()
				// console.warn(`----------------------getTransformRes:${JSON.stringify(getTransformRes)}`);
				// console.warn(`tyoeof getTransformRes.a:${typeof getTransformRes.a}`);
				// const measureTextRes = ctx.measureText('test font')
				// console.warn(`measureTextRes:${JSON.stringify(measureTextRes)}`);
				
				// const testEvalJSSyncRRes = ctx.testEvalJSSyncR()
				// console.warn(`testEvalJSSyncRRes:${testEvalJSSyncRRes}`)
				
				// for(let i = 0;i<100;i++){
				// 	if(i===0){
				// 		console.log(`start ${new Date().getTime()}`)
				// 	}
				// 	ctx.clearRect(0,0,300,100)
				// 	ctx.fillRect(10,i,10,10)
				// 	if(i===99){
				// 		console.log(`end ${new Date().getTime()}`)
				// 	}
				// }
				// self.timer = setInterval(() => {
				// 	ctx.clearRect(0,0,300,150)
				// 	ctx.fillRect(10,self.top,20,20)
				// 	self.top++
				// 	if(self.top>130){
				// 		clearInterval(self.timer)
				// 	}
				// },1000/16)
				// const img = canvas.createImage()
				// console.warn(`test img:${JSON.stringify(img)}`)
				// img.src = '/static/logo.png'
				// img.src = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F0c%2Fef%2Fa0%2F0cefa0f17b83255217eddc20b15395f9.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661340039&t=59e041cc922f55fd47ab1655cc7104ad'
				// img.onload = () => {
					// console.log('img onload')
					// console.log(`img onload:${JSON.stringify(img)}`)
					// let top = 0
					// const timer = setInterval(() => {
					// 	ctx.clearRect(0,0,300,150)
					// ctx.drawImage(img,0,0,30,30)
					// 	top++
					// 	if(top>100){
					// 		clearInterval(timer)
					// 	}
					// },1000/16)
					
					// const imgData = ctx.getImageData(0,0,6,6)
					// const imgData = ctx.getImageData(0,0,10,10)
					// console.warn(`imgData:${JSON.stringify(imgData.data)}`)
					// ctx.putImageData(imgData,40,10)
				// }
			})
			// setTimeout(() => {
			// 	const ctx = uni.createCanvasContext('home_test',this)
			// 	ctx.fillRect(100,0,30,30)
			// 	ctx.draw()
			// },1000)
		},
		methods:{
			drawImage(){
				const query = uni.createSelectorQuery().in(this)
				query.select('.home_test').fields({node:true,context:true}).exec(res => {
					const canvas = res[0].node
					const ctx = canvas.getContext('2d')
					ctx.clearRect(0,0,300,150)
					const img = canvas.createImage()
					img.src = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F0c%2Fef%2Fa0%2F0cefa0f17b83255217eddc20b15395f9.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661340039&t=59e041cc922f55fd47ab1655cc7104ad'
					// img.src = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fe%2F57beb96b43b32.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668071656&t=dac117011324155e625f8a5aab2f35c0'
					img.src = '_www/static/big_img.jpg'
					// img.src = '/static/logo.png'
					img.onload = () => {
						console.warn(`view 层 onload:${Date.now()}`)
						ctx.drawImage(img,0,0,100,100)
						setTimeout(() => {
							console.warn(`view 层 before getImageData:${Date.now()}`)
							const imgData = ctx.getImageData(0,0,100,100)
							console.warn(`view 层 after getImageData:${Date.now()}`)
							ctx.putImageData(imgData,40,10)
						},2000)
					}
				})
			},
			testCompress(){
				const query = uni.createSelectorQuery().in(this)
				query.select('.home_test').fields({node:true,context:true}).exec(res => {
					const canvas = res[0].node
					const ctx = canvas.getContext('2d')
					ctx.fillRect(0,0,300,150)
					ctx.getImageData(0,0,300,150)
				})
			},
			testAnimate(){
				const query = uni.createSelectorQuery().in(this)
				query.select('.home_test').fields({node:true,context:true}).exec(res => {
					const canvas = res[0].node
					const ctx = canvas.getContext('2d')
					let top = 0
					console.warn('start',Date.now())
					const timer = setInterval(() => {
						ctx.clearRect(0,0,300,150)
						ctx.fillRect(10,top,20,20)
						top++
						if(top>130){
							clearInterval(timer)
							console.warn('end',Date.now())
						}
					},1000/60)
					// for(let i = 0;i<1000;i++){
					// 		ctx.clearRect(0,0,300,150)
					// 		ctx.fillRect(10,10,20,20)
					// }
					console.warn('end',Date.now())
				})
			}
		}
	}
</script>
<style>
	.block{
		width: 20px;
		height: 20px;
		background-color: #000;
		position: relative;
	}
</style>