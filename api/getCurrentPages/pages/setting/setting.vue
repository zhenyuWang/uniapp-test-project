<template>
	<view>
		<view>this is setting page</view>
		<button type="primary" @click="test">test</button>
		<view class="block"></view>
	</view>
</template>

<script>
	export default {
		onReachBottom(){
			console.log('setting onReachBottom');
		},
		methods: {
			test(){
				const currentPages = getCurrentPages();
				console.log('currentPages',currentPages );
			}
		}
	}
</script>
<style>
	.block{
		width: 200px;
		height: 800px;
		background-color: #09c;
	}
</style>
