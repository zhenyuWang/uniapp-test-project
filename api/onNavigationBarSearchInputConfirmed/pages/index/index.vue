<template>
	<view class="content">
		onNavigationBarSearchInputConfirmed
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		onNavigationBarSearchInputConfirmed(){
			console.log('onNavigationBarSearchInputConfirmed');
			alert("onNavigationBarSearchInputConfirmed")
		},
		methods: {

		}
	}
</script>

