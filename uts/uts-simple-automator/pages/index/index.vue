<template>
	<view class="content">
		<!-- <input type="text" /> -->
		<view class="border-0">测试节点1</view>
		<view class="border-1">测试节点2</view>
		<view class="border-2">测试节点3</view>
		<view class="border-3">测试节点</view>
		<view class="border-4">测试节点</view>
		<view class="border-5">测试节点</view>
		<view class="border-6">测试节点</view>
		<view class="border-7">测试节点</view>
		<view class="border-8">测试节点</view>
		<view class="border-9">测试节点</view>
		<view class="border-10">测试节点</view>
		<view class="border-11">测试节点</view>
		<view class="border-12">测试节点</view>
		<view class="border-13">测试节点</view>
		<view class="border-14">测试节点</view>
		<view class="border-15">测试节点</view>
		<view class="border-16">测试节点</view>
		<view class="border-17">测试节点</view>
		<view class="border-18">测试节点</view>
		<view class="border-19">测试节点</view>
		<view class="border-20">测试节点</view>
		<view class="border-21">测试节点</view>
		<view class="border-22">测试节点</view>
		<view class="border-23">测试节点</view>
		<view class="border-24">测试节点</view>
		<view class="border-25">测试节点</view>
		<view class="border-26">测试节点</view>
		<view class="border-27">测试节点</view>
		<view class="border-28">测试节点</view>
		<view class="border-29">测试节点</view>
		<view class="border-30">测试节点</view>
		<view class="border-31">测试节点</view>
		<view class="border-32">测试节点</view>
		<view class="border-33">测试节点</view>
		<view class="border-34">测试节点</view>
		<view class="border-35">测试节点</view>
		<button type="primary" @click="shot">shot</button>
		<image style="width: 300px;height:300px;" :src="imgSrc" alt="" />
		<image style="width: 300px;height:300px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg" alt="" />
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: '111',
				imgSrc: 'https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg'
			}
		},
		onReady() {
			// uni.navigateTo({
			// 	url: '/pages/test/test',
			// 	success(res){
			// 		console.log('uni.navigateTo success', res)
			// 	},
			// 	fail(err){
			// 		console.log('uni.navigateTo fail', err)
			// 	},
			// 	complete(err){
			// 		console.log('uni.navigateTo fail', err)
			// 	}
			// })
			// uni.onSocketOpen((res) => {
			// 	console.log('uni.onSocketOpen', res)
			// 	uni.sendSocketMessage({
			// 		data: 'data in uni.sendSocketMessage in index.vue',
			// 		complete(res){
			// 			console.log('uni.sendSocketMessage complete', res)
			// 		}
			// 	});
			// })
			// uni.onSocketMessage((res) => {
			// 	console.log('uni.onSocketMessage', res)
			// })
			// const socketTask = uni.connectSocket({
			// 	url: 'ws://192.168.31.80:8080',
			// 	// url: 'ws://192.168.12.106:8080/ws',
			// 	success(res) {
			// 		console.log('connectSocket success', res)
			// 	},
			// 	fail(err) {
			// 		console.warn('connectSocket fail', err)
			// 	}
			// })
			// console.warn('socketTask', socketTask)
			
			// uni.pageScrollTo({
			// 	scrollTop: 500
			// })
			// uni.onUserCaptureScreen(function () {
			// 	console.log('用户截屏了')
			// });
			// uni.onKeyboardHeightChange((e) => {
			// 	console.log('uni.onKeyboardHeightChange', e);
			// })
			// uni.clearStorage({
			// 	success(res){
			// 		console.log('clearStorage success', res);
			// 	},
			// 	fail(res){
			// 		console.log('clearStorage fail', res);
			// 	},
			// })
			// const socketTask = uni.connectSocket({
			// 	// url: 'ws://192.168.31.119:8080',
			// 	url: 'ws://192.168.12.106:8080/ws',
			// 	success(res) {
			// 		console.warn('connectSocket success', res)
			// 	},
			// 	fail(err) {
			// 		console.warn('connectSocket fail', err)
			// 	}
			// })
			// console.warn('socketTask', socketTask)
			// uni.onSocketOpen((res) => {
			// 	console.log('uni.onSocketOpen', res)
			// })
		},
		methods: {
			shot() {
				// const _this = this
				// const currentWebview = this.$scope.$getAppWebview();
				// const bitmap = new plus.nativeObj.Bitmap('captureScreenshot', 'captureScreenshot.png');
				// // 将webview内容绘制到Bitmap对象中
				// currentWebview.draw(bitmap, () => {
				// 	console.log('截屏绘制图片成功');
				// 	const data = bitmap.toBase64Data()
				// 	_this.imgSrc = data
				// 	bitmap.clear()
				// }, (e) => {
				// 	console.log('截屏绘制图片失败：' + JSON.stringify(e));
				// }, {
				// 	wholeContent: true
				// });
			},
			getStorageInfo(callback) {
				setTimeout(() => {
					callback('uniapp-1.0 getStorageInfo res')
				}, 1000)
			}
		}
	}
</script>
<style>
	.border-0 {
		border: 100px dotted red;
	}

	.border-1 {
		border: 100px dotted #66ccff;
	}

	.border-2 {
		border: 100px dotted rgb(255, 0, 0);
	}

	.border-3 {
		border: 100px dotted rgba(255, 0, 0, 0.8);
	}

	.border-4 {
		border: 100px dashed red;
	}

	.border-5 {
		border: 100px dashed #66ccff;
	}

	.border-6 {
		border: 100px dashed rgb(255, 0, 0);
	}

	.border-7 {
		border: 100px dashed rgba(255, 0, 0, 0.8);
	}

	.border-8 {
		border: 100px solid red;
	}

	.border-9 {
		border: 100px solid #66ccff;
	}

	.border-10 {
		border: 100px solid rgb(255, 0, 0);
	}

	.border-11 {
		border: 100px solid rgba(255, 0, 0, 0.8);
	}

	.border-12 {
		border: 85rpx dotted red;
	}

	.border-13 {
		border: 85rpx dotted #66ccff;
	}

	.border-14 {
		border: 85rpx dotted rgb(255, 0, 0);
	}

	.border-15 {
		border: 85rpx dotted rgba(255, 0, 0, 0.8);
	}

	.border-16 {
		border: 85rpx dashed red;
	}

	.border-17 {
		border: 85rpx dashed #66ccff;
	}

	.border-18 {
		border: 85rpx dashed rgb(255, 0, 0);
	}

	.border-19 {
		border: 85rpx dashed rgba(255, 0, 0, 0.8);
	}

	.border-20 {
		border: 85rpx solid red;
	}

	.border-21 {
		border: 85rpx solid #66ccff;
	}

	.border-22 {
		border: 85rpx solid rgb(255, 0, 0);
	}

	.border-23 {
		border: 85rpx solid rgba(255, 0, 0, 0.8);
	}

	.border-24 {
		border: 20% dotted red;
	}

	.border-25 {
		border: 20% dotted #66ccff;
	}

	.border-26 {
		border: 20% dotted rgb(255, 0, 0);
	}

	.border-27 {
		border: 20% dotted rgba(255, 0, 0, 0.8);
	}

	.border-28 {
		border: 20% dashed red;
	}

	.border-29 {
		border: 20% dashed #66ccff;
	}

	.border-30 {
		border: 20% dashed rgb(255, 0, 0);
	}

	.border-31 {
		border: 20% dashed rgba(255, 0, 0, 0.8);
	}

	.border-32 {
		border: 20% solid red;
	}

	.border-33 {
		border: 20% solid #66ccff;
	}

	.border-34 {
		border: 20% solid rgb(255, 0, 0);
	}

	.border-35 {
		border: 20% solid rgba(255, 0, 0, 0.8);
	}
</style>