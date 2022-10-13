<template>
	<view>
		<canvas canvas-id="frequentDraw" type="2d" class="canvas frequentDraw"></canvas>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				timer:null,
				top: 0
			}
		},
		onReady(){
			const query = uni.createSelectorQuery()
			query.select('.frequentDraw').node(res => {
				const canvas = res.node
				const ctx = canvas.getContext('2d')
				// #ifdef MP-WEIXIN || MP-TOUTIAO
				const img = canvas.createImage()
				img.src = '../../static/logo.png'
				img.onload = () => {
					this.drawImage(ctx,img)
				}
				// #endif
				// #ifndef MP-WEIXIN || MP-TOUTIAO
				this.drawImage(ctx,'../../static/logo.png')
				// #endif
			}).exec()
		},
			
		beforeDestroy(){
			this.timer && clearInterval(this.timer)
		},
		beforeUnmount(){
			this.timer && clearInterval(this.timer)
		},
		methods:{
			drawImage(ctx,img){
				const self = this
				this.timer = setInterval(() => {
					ctx.clearRect(0,0,300,150)
					// ctx.drawImage(img,0,this.top,20,20)
					ctx.fillRect(0,this.top,20,20)
					self.top++
					if(self.top>=150){
						self.top = -20
					}
				},1000/16)
			}
		}
	}
</script>

<style>

</style>
