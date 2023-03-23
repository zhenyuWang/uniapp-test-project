<template>
	<view class="foo">
		this is Foo
	</view>
</template>

<script>
	export default {
		name:"Foo",
		data() {
			return {
				
			};
		},
		onReachBottom() {
			console.log('foo onReachBottom')
		}
	}
</script>

<style>
	.foo{
		height: 800px;
		background-color: antiquewhite;
	}
</style>