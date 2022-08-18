<template>  
    <view>
		<view class="list">List</view>
        <Loading></Loading>  
    </view>  
</template>

<script>
	import Loading from './Loading.vue'
	export default {
		name:"List",
		components:{Loading},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.list{font-size: 6px;}
</style>