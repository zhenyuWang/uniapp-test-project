<template>
	<view class="content">
		  <view>
				<button type="primary"
				@click="showPageContainer = !showPageContainer">{{showPageContainer}}</button>  
			</view>
		  <!-- #ifdef MP-ALIPAY || MP-WEIXIN -->
		  <page-container :show="showPageContainer"
		  	@beforeEnter="onBeforeEnter"  
		  	@enter="onEnter"  
		  	@afterEnter="onAfterEnter"  
		  	@beforeLeave="onBeforeLeave"  
		  	@leave="onLeave"  
		  	@afterLeave="onAfterLeave"  
		  	@clickOverlay="onClickOverlay">  
		    <view>  
		      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolore   
		      cupiditate esse amet deserunt velit explicabo quam fugiat, odit natus hic   
		      deleniti quisquam incidunt ipsam quia magnam quasi libero neque?  
		    </view>  
		  </page-container>  
		  <!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showPageContainer:false
			}
		},
		onLoad() {

		},
		methods:{
			onBeforeEnter(){
				console.log('page-container onBeforeEnter')
			},
			onEnter(){
				console.log('page-container onEnter')
			},
			onAfterEnter(){
				console.log('page-container onAfterEnter')
			},
			onBeforeLeave(){
				console.log('page-container onBeforeLeave')
			},
			onLeave(){
				console.log('page-container onLeave')
			},
			onAfterLeave(){
				console.log('page-container onAfterLeave')
			},
			onClickOverlay(){
				console.log('page-container onClickOverlay')
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
