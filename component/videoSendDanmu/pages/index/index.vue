<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view>
				<video id="myVideo"
					src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4"
					enable-danmu danmu-btn controls></video>
			</view>
			<button @click="play">play</button>
			<view class="uni-list uni-common-mt">
				<view class="uni-list-cell">
					<view>
						<view class="uni-label">弹幕内容</view>
					</view>
					<view class="uni-list-cell-db">
						<input v-model="danmuValue" class="uni-input" type="text" placeholder="在此处输入弹幕内容" />
					</view>
				</view>
			</view>
			<view class="uni-btn-v">
				<button @click="sendDanmu" class="page-body-button">发送弹幕</button>
			</view>
		</view>
		<navigator hover-class='button-hover' url="/pages/map/map">goMap</navigator>
		<button @click="goMap">goMap</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: '',
				danmuValue: '',
				videoContext:null
			}
		},
		onReady: function(res) {
			this.videoContext = uni.createVideoContext('myVideo',this)
		},
		methods: {
			play(){
				console.log('this.videoContext',this.videoContext)
				this.videoContext.play()
			},
			sendDanmu: function() {
				this.videoContext.sendDanmu({
					text: this.danmuValue,
					color: '#09c'
				});
				this.danmuValue = '';
			},
			goMap(){
				this.videoContext.pause()
				uni.navigateTo({
					url:'/pages/map/map'
				})
			}
		}
	}
</script>

<style>
	.uni-video-danmu {
		background-color: red;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		width: 100%;
		margin-top: 18px;
		margin-bottom: 18px;
		font-size: 18px;
		line-height: 18px;
		overflow: visible;
	}
</style>
