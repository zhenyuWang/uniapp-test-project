<template>
	<view class="content">
		<view>this is index page</view>
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
		methods: {

		}
	}
</script>

<style>
	@media only screen and (max-width: 375px) {
		page {
			background-color: lightblue;
			color: #000;
		}
	}
	
	@media screen and (min-width: 376px) {
		page {
			color: #f00;
			background-color: lightgreen;
		}
	}
	
	@media screen and (width: 414px) {
		page {
			background-color: red;
			color: #fff;
		}
	}

	@media all and (min-width: 500px) {
		page {
			background-color: yellow;
			color: #f00;
		}
	}

	@media only screen and (orientation: landscape) {
		page {
			background-color: red;
		}
	}
</style>
