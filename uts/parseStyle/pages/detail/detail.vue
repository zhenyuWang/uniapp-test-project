<template>
	<view>
		this is detail123
		<button @click="getCurrentPages">getCurrentPages</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			getCurrentPages(){
				const pages = getCurrentPages()
				console.warn('pages', pages, pages.length, pages[0].route)
			}
		}
	}
</script>

<style>

</style>
