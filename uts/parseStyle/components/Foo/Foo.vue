<template>
	<view>
		<text>title: {{title}}</text>
	</view>
</template>

<script>
	export default {
		name:"Foo",
		props: {
			title: {
				type: String,
				default: "default title in Foo"
			}
		},
		methods: {
			test(){
				console.warn('test function in component Foo'+this.title)
			}
		}
	}
</script>

<style>

</style>