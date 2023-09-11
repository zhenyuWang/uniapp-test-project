<template>
	<view class="content">
		<text>index.uvue</text>
		<Foo />
		<Bar />
		<x-Bar />
	</view>
</template>

<script>
	import Bar from '../../components/Bar'
	export default {
		components: {Bar},
		data() {
			return {
				title: 'Hello'
			}
		},
	}
</script>
