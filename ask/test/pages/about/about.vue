<template>
	<view>
		this is about
		<navigator url="/pages/setting/setting">go setting</navigator>
		<cover-view class="box">
			<cover-view class="block block1" />
			<cover-view class="block block2" />
		</cover-view>
		<view class="test-flex">
			<view class="child child1"></view>
			<view class="child child2"></view>
		</view>
		<button type="primary" @click="goSetting">goSetting</button>
		<button type="primary" @click="goIndex">goIndex</button>
		<button type="primary" @click="getCurrentPages">getCurrentPages</button>
		<uni-section class="mb-10" title="竖线装饰" sub-title="副标题" type="line"></uni-section>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		onBackPress(e){
			console.log('on back press',e);
		},
		methods: {
			goSetting() {
				uni.navigateTo({
					url: '/pages/setting/setting?id=123',
				})
			},
			goIndex() {
				uni.switchTab({
					url: '/pages/index/index',
				});
			},
			getCurrentPages(){
				const currentPages = getCurrentPages()
				console.log('currentPages',currentPages)
			}
		},
	}
</script>

<style>
	.box {
		height: 500rpx;
		background-color: aquamarine;
		display: flex;
		/* flex-direction: row; */
		flex-direction: column;
	}

	.block {
		width: 50rpx;
		height: 50rpx;
	}

	.block1 {
		background-color: bisque;
	}

	.block2 {
		background-color: blue;
	}

	.test-flex {
		height: 300px;
		background-color: antiquewhite;
		display: flex;
		/* flex-direction: row; */
		flex-direction: column;
	}

	.child {
		width: 40px;
		height: 40px;
	}

	.child1 {
		background-color: aqua;
	}

	.child2 {
		background-color: aquamarine;
	}
</style>
