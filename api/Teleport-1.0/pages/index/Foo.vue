<template>
	<view class="foo">
		<text>this is foo component</text>
		<button @click="changeShow">changeShow</button>
		<template v-if="show">
			<Teleport to='#test'>
				<text>this is node in Teleport from foo to #test</text>
			</Teleport>
		</template>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false
			}
		},
		methods: {
			changeShow() {
				this.show = !this.show
			}
		}
	}
</script>

<style>
	.foo {
		background-color: green;
	}
</style>