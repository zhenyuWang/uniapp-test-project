<template>
  <view class="a1">
    <view class="a11">组件a</view>
		<view v-for="(item,index) in list" :key="index">
			{{item.name}}
		</view>
  </view>
</template>

<script>
	export default {
		props:{
			list:{
				type:Array,
				required:true
			}
		},
		onPageShow(){
			console.log('component a onPageShow')
		},
		created(){
			console.log('component a created');
		},
		onLoad(){
			console.log('component a onLoad');
		},
		onReady(){
			console.log('component a onReady');
		},
		onShow(){
			console.log('component a onShow');
		},
		onHide(){
			console.log('component a onHide');
		},
		onUnload(){
			console.log('component a onUnload');
		},
		onPullDownRefresh(){
			console.log('component a onPullDownRefresh');
		},
		onReachBottom(){
			console.log('component a onReachBottom');
		},
		onTabItemTap(){
			console.log('component a onTabItemTap');
		},
		onInit(){
			console.log('component a onInit');
		},
		onPageScroll(){
			console.log('component a onPageScroll');
		},
	}
</script>