<template>
	<view class="uni-switch">
		<view class="mytest"> class my-test12</view>
		<view id="mytest">id my-test</view>
		<view class="uni-switch-input" :style="trackStyle" @click="_onClick">
			<view class="uni-switch-thumb" :style="thumbStyle"></view>
		</view>
		<view>height: {{keyboardHeight}}</view>
		<input type="text">
		<button @click="relaunchAbout">relaunch about</button>
		<button @click="navigateToAbout">navigateTo about</button>
		<button @click="navigateToDetail">navigateTo detail</button>
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
<script lang="ts">
	export default {
		name: 'Switch',
		data() {
			return {
				isChecked1: false,
				trackStyle: '',
				thumbStyle: '',
				keyboardHeight: 0
			}
		},
		props: {
			checked: {
				type: Boolean,
				default: false
			},
			color: {
				type: String,
				default: 'red'
			},
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
		onLoad() {
			const pages = getCurrentPages()
			console.log('pages.length---------', pages.length, pages[0].route)
		},
		onReady() {
			const app = getApp()
			app.test()
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
		methods: {
			relaunchAbout() {
				uni.reLaunch({
					url: '../about/about'
				})
			},
			navigateToAbout() {
				uni.navigateTo({
					url: '/pages/about/about'
				})
			},
			navigateToDetail() {
				uni.navigateTo({
					url: '/pages/detail/detail'
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
		}
	}
</script>
<style>
	.div-class{
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