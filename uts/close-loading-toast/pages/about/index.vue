<template>
	<view class="content">
		{{title}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'about page'
			}
		},
		onLoad() {
			// uni.showLoading({
			// 	title:'about loading'
			// })
		},
	}
</script>
