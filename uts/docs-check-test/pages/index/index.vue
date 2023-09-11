<template>
	<!-- <scroll-view class="content"> -->
	<view class="content">
		<template v-for="(item, index) in list" :key="index">
			<text>{{item}}</text>
		</template>
		<view style='width:100px;height: 800px;border: 1px solid red;'>
			<text v-for="item in 26" :key="item">{{item}}</text>
		</view>
		<input type="text" value="title" />
	</view>
	<!-- </scroll-view> -->
</template>

<script>
	export default {
		data() {
			return {
				title: 'index',
				list: ['a', 'b', 'c']
			}
		},
		onReachBottom() {
			console.warn('onReachBottom')
		},
		methods: {
			fooSubmit() {
				console.warn('fooSubmit')
			}
		}
	}
</script>

<style>
	.content {
		background: transparent;
	}
</style>