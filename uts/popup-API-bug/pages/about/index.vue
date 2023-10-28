<template>
	<view class="content">
		<text class="title">{{title}}</text>
		<button @click="test">test</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'this is about'
			}
		},
		onLoad() {
			// uni.showToast({title: 'toast title', icon: 'success'})
			// uni.showLoading({title: 'loading title'})
			// uni.showModal({
			// 	title: 'about',
			// 	content: '这是一个模态弹窗',
			// 	success: function (res) {
			// 		if (res.confirm) {
			// 			console.log('用户点击确定');
			// 		} else if (res.cancel) {
			// 			console.log('用户点击取消');
			// 		}
			// 	}
			// });
			// uni.showActionSheet({
			// 	itemList: ['A', 'B', 'C'],
			// 	success: function () {
			// 		console.log('showActionSheet success');
			// 	},
			// 	fail: function (res) {
			// 		console.log(res.errMsg);
			// 	}
			// });
		},
		onReady() {
			// uni.showToast({title: 'toast title', icon: 'success'})
			// uni.showLoading({title: 'loading title'})
			uni.showModal({
				title: 'about',
				content: '这是一个模态弹窗',
				success: function (res) {
					if (res.confirm) {
						console.log('用户点击确定');
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
			// uni.showActionSheet({
			// 	itemList: ['A', 'B', 'C'],
			// 	success: function () {
			// 		console.log('showActionSheet success');
			// 	},
			// 	fail: function (res) {
			// 		console.log(res.errMsg);
			// 	}
			// });
		},
		methods: {
			test(){
				uni.reLaunch({url: '/pages/index/index'})
			}
		}
	}
</script>