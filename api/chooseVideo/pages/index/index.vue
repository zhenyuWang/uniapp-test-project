<template>
	<view class="content">
		<button type="primary" @click="test">test</button>
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
		methods: {
			test(){
				// uni.chooseVideo({
				// 	success(){
				// 		console.log('chooseVideo success');
				// 	},
				// 	fail(){
				// 		console.log('chooseVideo fail');
				// 	},
				// 	complete(){
				// 		console.log('chooseVideo complete');
				// 	}
				// })
				
				// uni.downloadFile({
				// 	url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fe%2F57beb96b43b32.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668071656&t=dac117011324155e625f8a5aab2f35c0', //仅为示例，并非真实的资源
				// 	success: (res) => {
				// 		console.log('success',res);
				// 	},
				// 	fail(err){
				// 		console.log('fail',err);
				// 	},
				// 	complete(res){
				// 		console.log('complete',res);
				// 	}
				// });
				
				uni.request({
				    url: 'https://www.baidu.com', //仅为示例，并非真实接口地址。
				    success: (res) => {
							console.log('success',res);
				    },
						fail(err){
							console.log('fail',err);
						},
						complete(res){
							console.log('complete',res);
						}
				});
			}
		}
	}
</script>

<style>

</style>
