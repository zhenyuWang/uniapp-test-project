<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view v-if="testObj">{{testObj.name}}:{{testObj.age}}</view>
		<view v-if="testObj2">{{testObj2.name}}:{{testObj2.age}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		computed:{
			testObj(){
				return this.$store.state.obj
			},
			testObj2(){
				return this.$store.state.obj2
			}
		},
		onReady(){
			this.$store.commit('testResponsive')
			console.log('test data',this.$store.state.obj);
			this.$store.state.obj2 = {
				name:'obj2',
				age:20
			}
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
