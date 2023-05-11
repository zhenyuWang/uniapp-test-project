<template>
	<view class="content">
		<view>this is {{title}}</view>
		<button type="primary" @click="navigateToAbout">navigateTo about</button>
		<button type="primary" @click="redirectToAbout">redirectTo about</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'index title'
			}
		},
		onLoad() {
			console.log('index onLoad')
		},
		onShow() {
			console.log('index onShow')
		},
		onReady() {
			console.log('index onReady')
		},
		onHide() {
			console.log('index onHide')
		},
		onUnload() {
			console.log('index onUnload')
		},
		methods: {
			navigateToAbout() {
				uni.navigateTo({
					url: "/pages/about/index",
					complete(e) {
						console.log('navigateTo about complete', e)
					}
				})
			},
			redirectToAbout() {
				uni.redirectTo({
					url: "/pages/about/index"
				})
			}
		}
	}
</script>