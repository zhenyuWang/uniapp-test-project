<template>
	<view>
		this is about
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onBackPress() {
			console.log('life cycle onBackPress');
		},
		// #ifdef MP-ALIPAY
		events:{
			// onBack(){
			// 	console.log('events onBack');
			// }
		},
		// #endif
	}
</script>

<style>

</style>
