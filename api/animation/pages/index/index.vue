<template>
	<view class="">
		<view :animation="animationData" style="height:100rpx;width:100rpx;margin-bottom:20px;background-color:red;"></view>
		<button type="primary" @click="test">test</button>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				animationData: {},
				animation:{}
			}
		},
		onShow: function() {
			var animation = uni.createAnimation({
				duration: 1000
			})
			this.animation = animation
		},
		methods: {
			test: function() {
				this.animation.scale(1).step({
					duration:200
				})
				this.animation.scale(0.8).rotate(-20).step({
					duration:200
				})
				this.animation.scale(0.9).rotate(20).step({
					duration:200
				})
				this.animation.scale(0.7).rotate(0).step({
					duration:200
				})
				this.animation.scale(1.5).opacity(0).step({
					duration:200
				})
				this.animationData = this.animation.export()
			}
		}
	}
</script>
