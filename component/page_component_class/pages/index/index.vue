<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<text :style="{
		}">style with empty {}</text>
		<button @click="setNavigationBarColor">setNavigationBarColor</button>
		<Foo />
		<Bar />
	</view>
</template>

<script lang="ts">
	import Foo from '../../components/Foo.vue'
	import Bar from '../../components/Bar.vue'
	export default {
		components: { Foo, Bar },
		data() {
			return {
				title: 'Hello1234',
			}
		},
		onLoad() {

		},
		methods: {
			setNavigationBarColor(){
				uni.setNavigationBarColor({
					backgroundColor: '#007aff',
					complete(res){
						console.warn('setNavigationBarColor res:', res)
					}
				})
			}
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