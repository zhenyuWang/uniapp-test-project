<template>
	<view>
		<text>this is component for test slot</text>
		<slot msg='default slot msg'></slot>
		<slot name="header" msg="header slot msg" :age="18"></slot>
	</view>
</template>

<script>
	import type {PropType} from 'vue'
	
	export default {
		 slots: Object as SlotsType<{
		    default: { msg: string },
		    header: { msg: string, age: number, num?: number | null }
		  }>
	}
</script>
