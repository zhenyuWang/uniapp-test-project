<template>
	<view>
		<view>this is Foo component vue</view>
		<slot str="str" :age="18">后备</slot>
		<button @click="test">test</button>
	</view>
</template>

<script>
	export default {
		methods: {
			test() {
				// 获取默认插槽中的vnode
				const defaultSlots = this.$slots.default();
				console.log('defaultSlots', defaultSlots)
				console.log(Object.keys(defaultSlots[0]))
				console.log(defaultSlots[0].type)
				console.log(defaultSlots[0].props)
				console.log(defaultSlots[0].data)
				console.log(defaultSlots[0].methods)
				console.log(defaultSlots[0].children)
				console.log(defaultSlots[1].type.data())
				console.log(defaultSlots[1].type.methods.test())
				// console.log(defaultSlots[1].type.data())
				// console.log(defaultSlots[1].type.methods.test())
			}
		}
	}
</script>