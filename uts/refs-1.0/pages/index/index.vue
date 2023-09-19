<template>
	<view>
		<text ref='text'>text node</text>
		<Foo ref='foo' />
	</view>
</template>

<script lang="ts">
	export default {
		onReady() {
			const text = this.$refs.text as Element
			const foo = this.$refs.foo as ComponentPublicInstance
		}
	}
</script>
