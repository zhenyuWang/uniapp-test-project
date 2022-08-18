<template>
	<view>
		<button @click="back">back</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		created(){
			console.log('about created');
		},
		onBackPress(event) {
			console.log("e", event);  
			//e, [Object] {"from":"backbutton"}  
			if (event.from == 'backbutton') {  
				uni.showModal({  
					title: '提示',  
					content: '退出后已填写的数据会丢失,是否继续退出?',  
					showCancel: true,  
					confirmText: '退出',  
					success: (res) => {  
						if (res.confirm) {  
							uni.navigateBack()  
						}  
					}  
				})  
				return true;  
			}  
		},
		methods: {
			back(){
				uni.navigateBack()
				
			}
		}
	}
</script>

<style>

</style>
