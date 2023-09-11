<template>
	<view>
		<text>this is Foo</text>
		<text id="foo-text">title is {{title}}</text>
	</view>
</template>

<script>
	export default {
		name:"Foo",
		props:{
			type: {
				type: String,
				default: 'default type'
			}
		},
		data() {
			return {
				title: "foo title"
			};
		},
		mounted(){
		  console.log('component foo mounted')
		},
		unmounted() {
		  console.log('component foo unmounted',this.$el)
			console.warn('this.$el.parentNode', this.$el?.parentNode)
		},
		methods: {
			fooTest(){
				console.warn('foo test in component Foo')
			}
		}
	}
</script>

<style>

</style>
