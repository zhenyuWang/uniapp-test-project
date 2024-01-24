<template>
	<view class="content" :key='key'>
		<text>start</text><text id="test-id">  this is index page </text><text>end</text>
		<Foo class="foo" />
	</view>
</template>

<script>
	import Foo from './Foo.vue'
	export default {
		components: {
			Foo
		},
		data() {
			return {
				title: 'index page',
				key: Date.now(),
				data: null,
				type: 'default',
				header: {},
				myMap: new Map([['a', 'a'],['b', 'b']]),
				mySet: new Set([1, 2, 3]),
			}
		},
		methods: {
			test(){
				
			}
		}
	}	
	</script>