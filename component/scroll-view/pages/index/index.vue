<template>
	<view>
		<view>{{testIndex}}</view>
		<button @click="addTestIndex">add testIndex</button>
		<scroll-view
			class="scroll-view"
			:scroll-y="true"
			:show-scrollbar="false"
			lower-threshold='150'
			@scrolltolower="loadmore">
			{{testIndex}}
			<view class="item-container" v-for="(item, index) in list" :key="index">
				<view @click="clickItem('粉色'+item)" class="item pink">
					粉{{item}}
				</view>
				<view @click="clickItem('粉色'+item)" class="item blue">
					蓝{{item}}
				</view>
				<view @click="clickItem('粉色'+item)" class="item red">
					红{{item}}
				</view>
			</view>
		</scroll-view>
	</view>
</template>
<script>
	import {defineComponent} from 'vue'
	const originData = [1,2,3,4,5,6,7,8,9,10]
	export default defineComponent({
		data() {
			return {
				page:1,
				list: [],
				loadMoreTimer: null,
				loading: false,
				testIndex:0
			}
		},
		created(){
			console.log('scroll-view created');
		},
		onLoad: function() {
			this.getdata();
		},
		methods: {
			handlePopupChange(val){
				console.log('handlePopupChange',val);
				this.testIndex = val
			},
			getdata: function() {
				if(this.page>5){
					return
				}
				this.loading = true;
				console.log('getdata page : ',this.page);
				// 模拟 api 请求刷新数据
				setTimeout(() => {
					if(this.page === 1){
						this.list = [...originData]
					}else{
						for(let i= 0;i<originData.length;i++){
							this.list.push(originData[i]+(this.page-1)*10)
						}
					}
					this.page++;
					this.loading = false;
				}, 2000);
			},
			addTestIndex(){
				this.testIndex++
			},
			clickItem(text) {
				console.log('clicked item',text)
				uni.showToast({
					title: 'clicked'+text,
					icon: 'none'
				})
			},
			loadmore: function() {
				if (this.loading) {
					return;
				}
				console.log("loadmore")
				this.getdata();
			},
		}
	})
</script>
<style scoped>
	.scroll-view{
		height: 80vh;
		padding-top:88rpx;
		background-color: #f8f8f8;
	}
	.item-container {
		display: flex;
		margin: 30rpx;
		line-height: 200rpx;
	}
	.item-container .item{
		flex:1
	}
	.item-container .item.pink{
		background-color: pink;
	}
	.item-container .item.blue{
		background-color: blue;
	}
	.item-container .item.red{
		background-color: red;
	}
</style>
