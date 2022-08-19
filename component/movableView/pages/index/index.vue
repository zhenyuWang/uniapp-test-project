<template>
	<view>
		<movable-area class="movable-area">
			<movable-view
				class="movable-view"
				direction="all"
				:damping="40"
				inertia='true'
				:scale="true"
				:disabled="disabled"
				@longpress="longpress"
				@change="handleChange"
				@touchend.stop="touchend"
			>
			<img style="width:100%;height:100%;" src="../../static/test-gif.gif" alt="">
			</movable-view>
		</movable-area>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				disabled:false
			}
		},
		methods: {
				longpress(){
					this.disabled = false
					console.log('longpress',this.disabled);
				},
				handleChange(e){
					console.log('onChange',e);
				},
				touchend(e){
					console.log('touchend',e)
					// this.disabled = true
				}
		}
	}
</script>

<style>
	.movable-area{
		width: 300px;
		height: 500px;
		background-color: red;
	}
	.movable-view{
		width: 200px;
		height: 100px;
		background-color: aqua;
	}
</style>
