<template>
	<view>
		<text>data: {{data}}</text>
		<slot name="header" :msg="msg"></slot>
		<slot msg="default slot msg"></slot>
	</view>
</template>

<script lang="uts">
	import { SlotsType } from 'vue'
	export default {
		name: "Foo",
		slots: Object as SlotsType<{
			default : { msg : string },
			header : { msg : string }
		}>,
		props: {
			data: {
				type: String,
				default: 'default data',
				validator(value): boolean {
					console.warn('validator', value)
					return ['success', 'warning', 'danger'].includes(value)
				}
			}
		},
		data() {
			return {
				msg: 'header slot msg'
			};
		}
	}
</script>

<style>

</style>