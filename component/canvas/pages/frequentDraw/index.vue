<template>
	<view>
		<canvas canvas-id="frequentDraw" class="canvas frequentDraw"></canvas>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				timer: null,
				top: 0
			}
		},
		onReady(){
			const self = this
			const ctx = uni.createCanvasContext('frequentDraw',this)
			this.timer = setInterval(() => {
				ctx.clearRect(0,0,300,150)
				ctx.drawImage('../../static/logo.png',0,this.top,20,20)
				ctx.draw(true)
				self.top++
				if(self.top>=150){
					self.top = -20
				}
			},1000/16)
		},
		beforeDestroy() {
			clearInterval(this.timer)
		},
		beforeUnmount(){
			this.timer && clearInterval(this.timer)
		},
	}
</script>

<style>

</style>
