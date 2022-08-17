<template>
	<view class="">
		<view>test useSlots</view>
		<slot></slot>
	</view>
</template>

<script setup>
	import {useSlots, onMounted} from 'vue'
	
	onMounted(() => {
		const slots = useSlots()
		console.log('slots', slots)
		console.log('slots.default',slots.default);
	})
</script>