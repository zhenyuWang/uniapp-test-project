<template>
	<view class="bar">
		this is Bar
	</view>
</template>

<script>
	export default {
		name:"Bar",
		data() {
			return {
				
			};
		},
		onReachBottom() {
			console.log('bar onReachBottom')
		}
	}
</script>

<style>
	.bar{
		height: 800px;
		background-color: aquamarine;
	}
</style>