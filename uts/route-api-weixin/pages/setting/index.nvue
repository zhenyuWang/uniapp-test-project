<template>
	<view class="content">
		<view>this is {{title}}</view>
		<button type="primary" @click="navigateToUser">navigateTo user</button>
		<button type="primary" @click="navigateBack">navigateBack</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'setting title'
			}
		},
		onLoad(){
			console.log('setting onLoad')
		},
		onShow() {
			console.log('setting onShow')
		},
		onReady() {
			console.log('setting onReady')
		},
		onHide() {
			console.log('setting onHide')
		},
		onUnload() {
			console.log('setting onUnload')
		},
		onBackPress(){
			console.log('setting onBackpress')
		},
		methods: {
			navigateToUser() {
				uni.navigateTo({
					url: "/pages/user/index"
				})
			},
			navigateBack(){
				uni.navigateBack({delta:10})
			}
		}
	}
</script>