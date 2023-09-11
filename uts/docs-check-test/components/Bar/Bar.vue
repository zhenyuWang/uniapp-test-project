<template>
	<view>
		<text>title: {{title}}</text>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>