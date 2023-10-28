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
				title: 'this is index'
			}
		},
		onLoad() {

		},
		methods: {
			test(){
				// 当前页面显示 toast 时,如果页面关闭前 toast 未关闭,应用崩溃
				// uni.showToast({title: 'toast title', icon: 'success'})
				// 当前页面显示 loading modal actionSheet 其一,第一次页面关闭,应用不会崩溃,再来一次就会了
				// uni.showLoading({title: 'loading title'})
				uni.showModal({
					title: 'index',
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
				// uni.redirectTo({url: '/pages/about/index'})
				uni.navigateTo({url: '/pages/about/index'})
				
				// 跳转 B 页面,B onLoad 调用弹框,弹框会出现在当前页面
				// 然后随着 B 页面打开, 弹框消失
				// loading toast 返回当前页面不再显示
				// modal actionSheet 返回当前页面会显示
				// uni.navigateTo({url: '/pages/about/index'})
			}
		}
	}
</script>
