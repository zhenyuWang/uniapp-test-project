<template>
	<div>
		<div class="title">{{title}}</div>
		<button @click="foo">click me</button>
	</div>
</template>

<script>
	export default {
		name: 'Foo',
		data() {
			return {
				title: 'Hello'
			}
		},
		beforeUpdate() {
			console.log('beforeUpdate')
		},
		methods: {
			foo() {
				console.log('foo')
				this.title = 'new title'
				return 'foo res'
			}
		},
	}
</script>