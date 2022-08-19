<template>
	<view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onReady() {
			console.log('vue2')
			const num = BigInt(100)
			console.log('BigInt num',num)
			const ws = new WeakSet()
			const foo = {}
			ws.add(foo)
			console.log('weakSet',ws);
		},
		methods: {

		}
	}
</script>

<style>

</style>
