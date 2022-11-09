<template>
	<view>
		<view>this is packageFoo foo.vue commonName:{{commonName}}</view>
		<button type="primary" @click="testCommonFn">test commonFn</button>
	</view>
</template>

<script>
	import {commonName,commonFn} from '../../../common.js'
	export default {
		data() {
			return {
				commonName:commonName
			}
		},
		methods: {
			testCommonFn(){
				commonFn()
			}
		}
	}
</script>

<style>

</style>
