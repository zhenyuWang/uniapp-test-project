
<template>
	<view>
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
				index:1
			}
		}
	}
</script>

<style>
</style>