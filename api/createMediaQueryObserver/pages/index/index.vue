<template>
	<view class="content">
		<button @click="test" type="primary">test</button>
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
			test(){
				const mediaQueryOb = uni.createMediaQueryObserver(this)
				console.log('mediaQueryOb',mediaQueryOb);
			}
		}
	}
</script>
