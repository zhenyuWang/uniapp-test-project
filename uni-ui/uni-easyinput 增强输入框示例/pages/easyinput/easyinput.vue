<template>
	<view>
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">easyinput 组件是对原生input组件的增强 ，是专门为配合表单组件 uni-forms 而设计的，easyinput 内置了边框，图标等，同时包含 input
				所有功能</text>
		</uni-card>
		<view class="uni-mt-5">
			<input type="text" value="test text" disabled style="color: green;" />
		</view>
		<view class="uni-mt-5">
			<uni-easyinput :styles="{'color':'#00ff00'}" value="不正常的" disabled></uni-easyinput>
		</view>
		<view class="uni-mt-5">
			<uni-easyinput :styles="{'color':'#ff0000'}" value="正常的"></uni-easyinput>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
			}

		},
		onLoad() {},
		onReady() {},
		methods: {

		}
	}
</script>

<style lang="scss">
	.uni-mt-5 {
		margin-top: 5px;
	}
</style>
