<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<!-- 		<view class="text-area">
			<text class="title">{{title}}</text>
		</view> -->
		<!-- <div class='box' :style="'width: '+width+'px'"></div> -->
		<!-- <div class='box' :style="`width:${width}px`"></div> -->
		<div class='box' style="width:100px"></div>
		<div style="
			/* 123 */
			width:300px;
			height:200px;
			background-color: aqua;
		"></div>
		<button type="primary" @click="request">request</button>
		<!-- <text :class="list.length>0 ? 'red' : 'green' ">测试三元编译{{list.length?'>0':'=0'}}</text> -->
	</view>
</template>

<script setup>
	// export default {
	// 	data() {
	// 		return {
	// 			width:200,
	// 			title: 'Hello',
	// 			list: []
	// 		}
	// 	},
	// 	onLoad() {
	uni.request({
		url: '/api/.html',
		timeout: 2000,
		// method:'POST',
		// data:{
		// 	"businessCode": "thscz",
		// 	"loginName": "chenliang",
		// 	"password": "123456"				// }
		complete(res) {
			console.log('res', res)
		}
	})

	uni.request({
		url: '/dapi/wechat/baseHousePersonRel/page',
		data: {
			current: 1,
			size: 20
		},
		header: {
			'Authorization': 'bearer 8f1af65e-26dd-431c-9e54-45834b6d75b3',
			'TENANT-ID': '1',
			'PROJECT-ID': '1000000277'
		},
		success(res) {
			console.log('用户测试 res ', res)
		}
	})

	const request = () => {
		uni.request({
			url: 'https://www.baidu.com',
			timeout: 2000,
			fail(err) {
				uni.showModal({
					title: `${err.statusCode}`,
					content: err.errMsg
				});
			}
		})
	}
	// 	},
	// 	methods: {

	// 	}
	// }

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

	.red {
		color: red;
	}

	.green {
		color: green;
	}

	.box {
		width: 200px;
		height: 200px;
		background-color: bisque;
	}

</style>

