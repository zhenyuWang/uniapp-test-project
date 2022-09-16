<template>
	<scroll-view class="scroll-view" scroll-y>
		<view class="scroll-area">
			<text class="notice">向下滚动让小球出现</text>
			<!-- 占位元素 -->
			<view class="filling"></view>
			<!-- 小球 -->
			<view class="ball1"></view>
			<view class="ball2"></view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				ballTop: -20
			}
		},
		onReady() {
			const observer = uni.createIntersectionObserver(this, {
				observeAll: true
			})
			observer.relativeTo('.scroll-view', {
				bottom: 100
			}).observe('.ball1,.ball2', (res) => {
				console.log('observe res', res)
			})
		},
		methods: {
			changeBallPosition() {
				this.ballTop -= 10
			}
		}
	}
</script>

<style>
	.scroll-view {
	    height: 400rpx;
	    background: #ccc;
	}
	
	.scroll-area {
	    height: 1900rpx;
	    display: flex;
	    flex-direction: column;
	    align-items: center;
	    transition: .5s;
	}
	
	.notice {
	    margin-top: 150rpx;
	}
	
	.ball1, .ball2 {
	    width: 100rpx;
	    height: 100rpx;
	    background: #38f;
	    border-radius: 50%;
	}
	
	.ball2 {
	    margin-left: 220rpx;
	    margin-top: -100rpx;
	}
	
	.filling {
	    height: 400rpx;
	}
</style>
