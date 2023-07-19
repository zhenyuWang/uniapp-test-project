<template>
	<view>
		this is detail12
		<button @click="getCurrentPages">getCurrentPages</button>
		<button @click="getLaunchOptionsSync">getLaunchOptionsSync</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onBackPress(){
			console.warn('onBackPress')
			return true
		},
		methods: {
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
			}
		}
	}
</script>

<style>

</style>
