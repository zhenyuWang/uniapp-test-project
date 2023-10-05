<template>
	<view>
		this is detail123
		<button @click="getCurrentPages">getCurrentPages</button>
		<button @click="getLaunchOptionsSync">getLaunchOptionsSync</button>
		<button @click="navigateToIndex">navigateToIndex</button>
		<button @click="showModal">showModal</button>
		<button @click="showActionSheet">showActionSheet</button>
		<button @click="back">back</button>
		<button @click="setNavigationBarColor1">setNavigationBarColor1</button>
		<button @click="setNavigationBarColor2">setNavigationBarColor2</button>
	</view>
</template>

<script>
	export default {
		onBackPress(){
			console.warn('detail onBackPress')
			// return true
		},
		onLoad(){
			uni.navigateBack()
		},
		onReady(){
			// const pages = getCurrentPages()
			// console.warn('pages',pages.length)
			// const launchOptions = uni.getLaunchOptionsSync()
			// console.warn('launchOptions.path', launchOptions.path)
			// setInterval(() => {
			// 	console.warn('setInterval')
			// }, 2000)
		},
		methods: {
			setNavigationBarColor1() {
			  uni.setNavigationBarColor({
			    frontColor: '#ffffff',
			    backgroundColor: '#00ff00',
			    success() {
			      console.log('setNavigationBarColor success')
			    },
			    fail() {
			      console.log('setNavigationBarColor success')
			    },
			    complete() {
			      console.log('setNavigationBarColor success')
			    }
			  })
			},
			setNavigationBarColor2() {
			  uni.setNavigationBarColor({
			    frontColor: '#000000',
			    backgroundColor: '#ff0000',
			    success() {
			      console.log('setNavigationBarColor success')
			    },
			    fail() {
			      console.log('setNavigationBarColor success')
			    },
			    complete() {
			      console.log('setNavigationBarColor success')
			    }
			  })
			},
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
