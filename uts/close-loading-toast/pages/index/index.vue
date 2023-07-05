<template>
	<view class="content">
		<view>{{title}}</view>
		<navigator url="/pages/setting/index">go setting</navigator>
		<button @click="goSettingWithLoading">go setting with loading</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'index page'
			}
		},
		onLoad() {
			// uni.showLoading({
			// 	title: 'index loading'
			// })
			// uni.showToast({
			// 	title: 'index toast',
			// 	duration:20000
			// })
		},
		methods: {
			goSettingWithLoading() {
				// uni.showLoading({
				// 	title: 'index loading',
				// 	mask: true,
				// })
				// uni.showToast({
				// 	title: 'index toast',
				// 	duration:20000
				// })
				// uni.showModal({
				// 	title: '提示',
				// 	content: '这是一个模态弹窗',
				// 	success: function (res) {
				// 		if (res.confirm) {
				// 			console.log('用户点击确定');
				// 		} else if (res.cancel) {
				// 			console.log('用户点击取消');
				// 		}
				// 	}
				// });
				uni.showActionSheet({
					itemList: ['A', 'B', 'C'],
					success: function (res) {
						console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
					},
					fail: function (res) {
						console.log(res.errMsg);
					}
				});
				uni.navigateTo({
					url: '/pages/setting/index'
				})
			}
		}
	}
</script>