<template>
	<view class="content">
		<view>123</view>
		<image class="logo" @load="ImageLoad" src="/static/logo.png"></image>
		<image src="/static/test.jpg" @load="ImageLoad"></image>
		<image class="logo" src="/static/logo.png"></image>
		<view @click="test" class="input-box">
			<input class="test-input" type="text" placeholder="请选择" v-model="title" disabled="true" />
		</view>
		<button type="primary" @click="goAbout">goAbout</button>
		<input type="text" placeholder="test keyboard height">
		<div @click="uni.navigateTo({url:'/pages/about/about'})" class="block" style="background-color: aqua;height:800px;width:200px;"></div>
		<button type="primary" @click="goHome">goHome</button>
		<navigator url="/pages/test-nvue/test-nvue">go test-nvue</navigator>
		<navigator url="/pages/test-vue/test-vue">go test-vue</navigator>
		<button type="primary" @click="sync">test sync</button>
		<button type="primary" @click="getCurrentPages">getCurrentPages</button>
	</view>
</template>

<script>
	import myMixin from './mixin'
	export default {
		data() {
			return {
				title: 'Hello',
				time: 60,
				timer: null
			}
		},
		mixins:[myMixin],
		created(){
			console.log('index created');
		},
		onLoad(){
			console.log('index onLoad');
			// uni.redirectTo({
			// 	url:'/pages/home/home'
			// })
			// uni.redirectTo({
			// 	url:'/pages/about/about'
			// })
			// this.timer = setInterval(() => {
			// 	console.log('onload setInterval');
			// },1000)
		},
		mounted(){
			console.log('index mounted');
		},
		onReady() {
			console.log('index onReady');
			// console.log('this.$jsonp',this.$jsonp)
			// let titleNum = 1
			// setInterval(() => {
			// 	uni.setNavigationBarTitle({
			// 		title:`测试title${titleNum}`
			// 	})
			// 	titleNum++
			// },1000)
			// uni.request({
			// 	url:'../../pages.json',
			// 	complete(res){
			// 		console.log('res',res);
			// 	}
			// })
			// uni.login({
			// 	complete(res){
			// 		console.log('uni.login complete res',res);
			// 	}
			// })
			// uni.onKeyboardHeightChange(res => {
			// 	console.log('键盘高度变化：',res)
			// })
		},
		onShow(){
			console.log('index onShow');
		},
		onHide(){
			console.log('index onHide');
		},
		onUnload(){
			console.log('index onUnload');
			clearInterval(this.timer)
		},
		onPullDownRefresh(){
			console.log('index onPullDownRefresh');
		},
		onReachBottom(){
			console.log('index onReachBottom');
		},
		onTabItemTap(){
			console.log('index onTabItemTap');
		},
		onInit(){
			console.log('index onInit');
		},
		onPageScroll(){
			console.log('index onPageScroll');
		},
		// #ifdef MP-ALIPAY
		// events:{
		// 	onKeyboardHeight(e){
		// 		// 键盘高度变化时触发   
		// 		console.log('键盘高度：', e.height)
		// 	}
		// },
		// #endif
		methods: {
			sync:function(){
				console.log('test method name sync');
				uni.showLoading({
					title:'123'
				})
				setTimeout(() => {
					uni.hideLoading()
				},1000)
			},
			test() {
				console.log('test');
			},
			getCurrentPages(){
				const currentPages = getCurrentPages()
				console.log('currentPages',currentPages)
			},
			goHome(){
				clearInterval(this.timer)
				uni.reLaunch({
					url:'/pages/home/home'
				})
			},
			goAbout(){
				console.log('before go about')
				// uni.navigateTo({  
				//    url:'/pages/about/about?id=123',  
				// })
				uni.redirectTo({
					url: '/pages/about/about'
				});
			},
			ImageLoad(res){
				console.log('ImageLoad res:',res);
			}
		}
	}
</script>

<style>
	.content {
		/* display: flex; */
/* 		paading-left: 10px;
		pading-right: 10px; */
	}

	.input-box {
		background-color: aqua;
	}
	.test-input{
		width:50%;
		background-color: red;
	}
</style>
