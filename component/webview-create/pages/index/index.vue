<template>
	<view>
		<web-view :webview-styles="webviewStyles" src="http://192.168.12.202:5501/test.html"></web-view>
		<!-- <web-view src="https://dev.dcloud.net.cn/uniLogin?fromdev=1&dtoken=935f1bc1ce2bc71f30c6abbf38e0d2b27c51062a712af24fdd1ed261c681b57054a77f2cdcb1ca5cf75827d6f69f46180eb86e954925c634171c59cd898fbeb0352ad083cc82fb3896049732fdc4e8f6e9c357c0fea38e4adab6c7c4a3f9f006b7b303ea314129c1c3dce1ff96fb1498060cf846602d065d2b0ad4099556dcf1"></web-view> -->
		<!-- <view style="width:100%;height:1200px;background-color: red;">
			<view class="">1111123</view>
			<view class="">2222</view>
			<view class="">3333</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webviewStyles:{
					// width:'100px',
					// height:'100px',
					// left:'200px'
					// contentAdjust:false
				}
			}
		},
		onReady() {
			// #ifdef APP-PLUS
			// const wv = plus.webview.create('http://114.115.235.59/test.html', 'custom-webview', {
			// 	// 'top': uni.getWindowInfo().statusBarHeight+44,
			// 	// 'width': `100%`,
			// 	// 'height': `100%`,
			// 	'contentAdjust':false,
			// });
			// const currentWebview = this.$scope.$getAppWebview(); //此对象相当于html5plus里的plus.webview.currentWebview()。在uni-app里vue页面直接使用plus.webview.currentWebview()无效
			// currentWebview.append(wv);
			// const currentWebview = this.$scope.$getAppWebview() //获取当前页面的webview对象
			// setTimeout(function() {
			// 	const wv = currentWebview.children()[0]
			// 	wv.setStyle({contentAdjust:false})
			// }, 1000); //如果是页面初始化调用时，需要延时一下
			// #endif
		},
		methods: {

		}
	}
</script>

<style>

</style>
