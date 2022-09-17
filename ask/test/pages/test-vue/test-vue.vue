<template>
	<view>
		test-vue
		<video
			src="https://cdn-huadong.mlkee.com/yunkong/e2a6a1ace352668000aed191a817d143/1657088576648/f9a7c8781fefb44cdf2e191298a953c2.mp4"
			controls></video>
		<cover-view style="margin-top: -40px;background-color: aqua;color:#fff;" @click="testClick">
			testClick
		</cover-view>
	</view>
</template>

<script setup>
	import {
		onNavigationBarButtonTap
	} from '@dcloudio/uni-app'
	console.log('onNavigationBarButtonTap', onNavigationBarButtonTap)
	onNavigationBarButtonTap(() => {
		console.log('onNavigationBarButtonTap', onNavigationBarButtonTap)
	})

	function testClick() {
		console.log('testClick');
	}
</script>

<style>

</style>
