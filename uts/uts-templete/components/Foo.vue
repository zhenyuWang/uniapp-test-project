<template>
	<view>
		<text>data: {{ data }}</text>
		<slot name="header" :msg="msg"></slot>
		<slot msg="default slot msg">插槽后备内容</slot>
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
				type: String
			}
		},
		data() {
			return {
				msg: 'header slot msg'
			};
		}
	}
</script>
