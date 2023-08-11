<template>
	<view>
		this is detail123
		<button @click="getCurrentPages">getCurrentPages</button>
		<button @click="getLaunchOptionsSync">getLaunchOptionsSync</button>
		<button @click="navigateToIndex">navigateToIndex</button>
		<button @click="showModal">showModal</button>
		<button @click="showActionSheet">showActionSheet</button>
		<button @click="back">back</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onBackPress(){
			console.warn('detail onBackPress')
			// return true
		},
		onReady(){
			// const pages = getCurrentPages()
			// console.warn('pages',pages.length)
			const launchOptions = uni.getLaunchOptionsSync()
			console.warn('launchOptions.path', launchOptions.path)
			setInterval(() => {
				console.warn('setInterval')
			}, 2000)
		},
		methods: {
			showModal(){
				uni.showModal({
					title: '提示',
					content: '这是一个模态弹窗',
				});
			},
			showActionSheet(){
				uni.showActionSheet({
					itemList: ['A', 'B', 'C'],
				});
			},
			back(){
				// this.showModal()
				this.showActionSheet()
				uni.navigateBack({
					delta: 2
				})
			},
			getCurrentPages(){
				uni.showLoading({
					title: 'loading in detail'
				})
				const pages = getCurrentPages()
				console.warn('pages', pages, pages.length, pages[0].route)
			},
			getLaunchOptionsSync(){
				const options = uni.getLaunchOptionsSync()
				console.warn('options',options, options.path)
			},
			navigateToIndex(){
				uni.switchTab({
					url: '/pages/index/index'
				})
			}
		}
	}
</script>

<style>

</style>
