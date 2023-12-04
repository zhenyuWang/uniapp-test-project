<template>
	<view class="uni-switch">
		<page-head title='index page title' />
		<button @click="test1();test2()">test1 & test2</button>
		<view style="width:100px;height:100px;background-color: aqua;"></view>
		<view @touchstart="onTouchStart" @touchcancel="onTouchCancel" @touchend="onTouchEnd" @tap="onTap" @click="onClick"
			class="mytest"> class my-test12</view>
		<view id="mytest">id my-test</view>
		<view class="uni-switch-input" :style="trackStyle" @click="_onClick">
			<view class="uni-switch-thumb" :style="thumbStyle"></view>
		</view>
		<view>height: {{keyboardHeight}}</view>
		<input type="text">
		<button @click="relaunchAbout">relaunch about</button>
		<button @click="navigateToAbout">navigateTo about</button>
		<button @click="navigateToDetail">navigateTo detail</button>
		<button @click="navigateToSetting">navigateTo setting</button>
		<button style="margin-bottom: 1000px;" @click="pageScrollTo">pageScrollTo</button>
		<text ref='text'>1123</text>
		<swiper>
			<view><swiper-item>1</swiper-item></view>
			<view><swiper-item>2</swiper-item></view>
		</swiper>
		<text>\\n换行</text>
		<rich-text :nodes="[
			{
				name: 'div',
				attrs: {
					class: 'div-class',
					style: 'line-height: 60px; color: red; text-align:center;',
				},
				children: [
					{ type: 'text', text: 'Hello&nbsp;this is v-bind nodes array!' },
				],
			},
		]" />
	</view>
</template>
<script>
	export default {
		name: 'Switch',
		data() {
			return {
				isChecked1: false,
				trackStyle: '',
				thumbStyle: '',
				keyboardHeight: 0,
			}
		},
		watch: {
			checked(val) {
				this.isChecked1 = val
			},
			// TODO
			isChecked1(val) {
				this.trackStyle = val ? `borderColor:${this.color};` : ''
				// this.thumbStyle = val ? `transform: translateX(20px);` : 'transform: translateX(0);'
				this.thumbStyle = val ? `transform: translateX(20px);` : ''
			},
		},
		onReady() {
			const app = getApp()
			app.test()
			const text = this.$refs.text
			console.log('text', text, Object.keys(text))
			// uni.onKeyboardHeightChange((e) => {
			// 	console.log('onKeyboardHeightChange', e)
			// 	this.keyboardHeight = e.height
			// })
			// uni.showToast({
			// 	title: 'title in 1.0',
			// 	image: '',
			// 	duration: 3000
			// })
			// uni.showLoading({
			// 	title: 'index vue loading'
			// })
		},
		onShow() {
			console.log('index Page show')
		},
		onHide() {
			console.log('index Page hide')
		},
		methods: {
			onTouchStart() {
				console.warn('onTouchStart')
				uni.showModal({
					title: '123',
					content: '456'
				})
			},
			onTouchCancel() {
				console.warn('onTouchCancel')
			},
			onTouchEnd() {
				console.warn('onTouchEnd')
			},
			onTap() {
				console.warn('onTap')
			},
			onClick() {
				console.warn('onClick')
				console.log('--------------------------')
				uni.reLaunch({
					url:'/pages/index/index',
					complete(){
						console.log('reLaunch currentPage complete')
					}
				})
			},
			test1() {
				console.log('test1')
			},
			test2() {
				console.log('test2')
			},
			relaunchAbout() {
				uni.navigateTo({
					url: '../about/about',
					success(res) {
						console.log('reLaunch success', res)
					}
				})
			},
			navigateToAbout() {
				uni.navigateTo({
					url: '/pages/about/about',
					success() {
						uni.navigateBack()
					}
				})
			},
			navigateToDetail() {
				uni.navigateTo({
					url: '/pages/detail/detail'
				})
			},
			navigateToSetting() {
				uni.navigateTo({
					url: '/pages/setting/setting'
				})
			},
			_onClick() {
				this.isChecked1 = !this.isChecked1
				uni.getBatteryInfo({
					complete(res) {
						console.warn('uni.getBatteryInfo res', res)
					}
				})
			},
			pageScrollTo() {
				uni.pageScrollTo({
					scrollTop: 2000,
					complete(res) {
						console.warn('pageScrollTo complete', res)
					}
				})
			}
		}
	}
</script>
<style>
	.div-class {
		border: 1px solid blue;
	}

	.uni-switch {
		font-family: 'my test';
	}

	.uni-switch-input {
		position: relative;
		flex-direction: row;
		background-color: #fdfdfd;
		border: 1px solid #dfdfdf;
		border-radius: 16px;
		width: 52px;
		height: 32px;
	}

	.uni-switch-thumb {
		width: 30px;
		height: 30px;
		background-color: #fff;
		box-shadow: 0 1px 3px rgba(0, 0, 0, .4);
		border-radius: 15px;
		transform: translateX(0);
	}
</style>