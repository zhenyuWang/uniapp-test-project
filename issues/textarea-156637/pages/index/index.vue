<template>
	<view class="content">
		{{testvalue}}
		<my-input v-model="testvalue"></my-input>
		<button @click="test">修改value</button>
	</view>
</template>

<script>
	export default {
		data() {
			return { testvalue: '123456' }
		},
		methods: {
			test() {
				this.testvalue = '9999'
			}
		}
	}
</script>

<style>

</style>