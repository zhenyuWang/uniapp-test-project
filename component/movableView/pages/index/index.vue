<template>
	<view class="content">
		<movable-area class="movable-area" :style="`width:${movableAreaWidth}`">
			<movable-view class="movable-view" direction="all" :damping="40" inertia='true' :scale="true"
			:animation="false"
				:disabled="disabled" @longpress="longpress" @change="handleChange" @touchend.stop="touchend">
			</movable-view>
		</movable-area>
		<button type="primary" @click="changeWidth">changeWidth</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				disabled: false,
				movableAreaWidth: '100%'
			}
		},
		methods: {
			changeWidth() {
				this.movableAreaWidth = '90%'
			},
			longpress() {
				this.disabled = false
				console.log('longpress', this.disabled);
			},
			handleChange(e) {
				console.log('onChange', e);
			},
			touchend(e) {
				console.log('touchend', e)
				// this.disabled = true
			}
		}
	}
</script>

<style>
	.content{
		width: 100vw;
		height: 600px;
	}
	.movable-area {
		width: 100%;
		height: 100%;
		border:1px solid red;
		background-color: antiquewhite;
	}

	.movable-view {
		width: 200px;
		height: 100px;
		background-color: aqua;
	}
</style>
