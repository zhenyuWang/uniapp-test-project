<template>
	<view>
		this is page setting test 物理返回键
		<navigator url="/pages/user/user">go user</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onShow(){
			window.addEventListener('popstate', this.testBack)
		},
		onUnload(){
			// 处理当前页面返回
			setTimeout(() => {
				window.removeEventListener('popstate',this.testBack)
			},300)
		},
		onHide() {
			// 处理当前页面离开（跳转其他页面）
			window.removeEventListener('popstate',this.testBack)
		},
		methods:{
			testBack(){
				uni.reLaunch({
					url:'/pages/index/index'
				})
			}
		}
	}
</script>

<style>

</style>
