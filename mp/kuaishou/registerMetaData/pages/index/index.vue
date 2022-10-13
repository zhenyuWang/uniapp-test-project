<template>
	<view class="content">
		<button type="primary" @click="test">test</button>
	</view>
</template>

<script>
	export default {
		registerMetaData(options){
			console.log('registerMetaData-----------------',options)
		},
		methods: {
			test(){
				this.$scope.registerMetaData('test registerMetaData')
			}
		}
	}
</script>

<style>
</style>
