<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<child ref='child'></child>
	</view>
</template>

<script>
	import Child from '../../components/Child.vue'
	export default {
		components:{Child},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		onReady() {
			console.log('this.$refs.child',this.$refs.child)
			console.log('this.$refs.child.test',this.$refs.child.test)
			this.$refs.child.test()
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
