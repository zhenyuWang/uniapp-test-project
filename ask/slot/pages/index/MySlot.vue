
<template>
	<view>
		<slot :name="'title1'+index1" data="test data"></slot>
	<!-- 		<slot :name="'title'+index1"></slot>
			<slot :name="'title'+index2"></slot>
			<slot :name="'title'+index3"></slot> -->
			<!-- <slot :name="'title'+index" :content="{name:'标题1'}"></slot> -->
			<!-- <slot name="title1" :content="{name:'标题1'}"></slot> -->
			<!-- <slot :name="'title'+index"></slot> -->
		<view v-for="(item,index) in 3" :key="index">
			<!-- <slot :name="'title'+index"></slot> -->
			<!-- <slot name="title1" :content="{name:'标题1'}"></slot> -->
			<slot :name="'title'+index" :content="{name:'标题'+index}"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				index1:0,
				index2:1,
				index3:2,
				
			}
		}
	}
</script>

<style>
</style>