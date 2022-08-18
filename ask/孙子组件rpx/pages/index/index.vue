<template>
	<view class="container">
		<view>index</view>
		<List></List>  
	</view>  
</template>

<script>
	import List from '@/components/List.vue'
	export default {
		components:{List},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.container{
		font-size: 12rpx;
	}
</style>
