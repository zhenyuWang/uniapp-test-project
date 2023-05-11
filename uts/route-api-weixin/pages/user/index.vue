<template>
	<view class="content">
		<view>this is {{title}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'user title'
			}
		},
		onLoad(){
			console.log('user onLoad')
		},
		onShow() {
			console.log('user onShow')
		},
		onReady() {
			console.log('user onReady')
		},
		onHide() {
			console.log('user onHide')
		},
		onUnload() {
			console.log('user onUnload')
		},
		methods: {
			
		}
	}
</script>