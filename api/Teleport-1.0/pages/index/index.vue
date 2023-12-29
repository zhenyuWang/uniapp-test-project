<template>
	<view class="content">
		<view id="test"></view>
		<text>this is home page</text>
		<view>{{title}}</view>
		<view>{{globalStr}}</view>
		<view>{{globalNum}}</view>
		<button @click="test">test</button>
		<Foo />
	</view>
</template>

<script>
	import Foo from './Foo.vue'
	export default {
		components: {
			Foo
		},
		data(){
			return {
				title: 'defualt title'
			}
		},
		methods: {
			test(){
				this.title = 'new title'
				this.globalStr = 'new str'
				this.globalNum = 1234
			}
		}
	}
</script>

<style>
	.content {
		background-color: red;
	}
</style>
