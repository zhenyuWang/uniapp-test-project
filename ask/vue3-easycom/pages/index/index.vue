<template>
	<view class="content">
		<view>hx create project test vue3 easycom</view>
		<my-foo :text="text" />
		<uni-data-checkbox v-model="value" :localdata="range"></uni-data-checkbox>
	</view>
</template>

<script setup lang="ts">
	const text = 'test text'
	const value = 0
	const range = [{"value": 0,"text": "篮球"	},{"value": 1,"text": "足球"},{"value": 2,"text": "游泳"}]
</script>
