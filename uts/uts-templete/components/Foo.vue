<template>
	<view>
		<slot name="header" :msg="msg"></slot>
		<slot msg="default slot msg"></slot>
	</view>
</template>

<script lang="uts">
	import { SlotsType } from 'vue'
	export default {
		name:"Foo",
		slots: Object as SlotsType<{
		  default: { msg: string },
		  header: { msg: string }
		}>,
		data() {
			return {
				msg: 'header slot msg'
			};
		}
	}
</script>

<style>

</style>