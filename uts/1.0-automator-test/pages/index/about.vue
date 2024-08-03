<template>
	<view class="content">
		this is about page
	</view>
</template>
<script setup>
  import {ref, defineExpose} from 'vue'
  const test = ref('test')
  defineExpose({test})
</script>