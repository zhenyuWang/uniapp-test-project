<template>
	<view class="box">
		<text>当前选择:</text>
		<picker mode="time" :value="time" start="00:00" end="23:59" @change="bindTimeChange">
			<view class="uni-input">{{time}}</view>
		</picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        time: '12:01'
			}
		},
		methods: {
      bindTimeChange(e) {
        this.time = e.detail.value
      }
		}
	}
</script>

<style>
	.box{
		display: flex;
	}
</style>
