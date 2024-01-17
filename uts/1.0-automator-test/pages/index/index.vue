<template>
	<view class="content" :key='key'>
		<view><text id="test-id">this is index page</text></view>
		<Foo class="foo" />
		<text v-pre>{{this will not be compile}}</text>
<!-- 		<text>msg: {{msg}}</text>
		<text>bool: {{bool}}</text>
		<text>num: {{num}}</text>
		<text>arr: {{arr}}</text> -->
		<!-- <button :type='type' class='my-btn' @click="test">button</button> -->
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
		onReady() {
			// console.log('index this.msg', this.msg)
			// console.log('index this.bool', this.bool)
			// console.log('index this.num', this.num)
			// console.log('index this.obj', this.obj)
			// console.log('index this.arr', this.arr)
			// console.log('index this.fn', this.fn())
		},
		methods: {
			test(){
				this.type = 'primary'
				// change globalProperties
				this.msg = 'change msg'
				this.bool = true
				this.num = 456
				this.obj = {
					a: 1,
					b: 2
				}
				this.arr = [4, 5, 6]
				console.log('index this.fn 2', this.fn())
				this.fn = function() {
					return 'new fn'
				}
				console.log('index changed this.fn', this.fn())
				this.key = Date.now()
			}
		}
	}	
	</script>