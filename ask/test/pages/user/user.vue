<template>
	<view>
		<web-view class="webview" src="http://192.168.12.202:5500/index.html"></web-view>
		this is page user
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.webview{
	width: 300px;
	height: 400px;
	border:1px solid #ccc;
}
</style>
