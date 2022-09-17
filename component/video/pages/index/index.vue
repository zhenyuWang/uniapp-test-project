<template>
	<view class="content">
		<video
		v-if="showVideo1"
		:src="videoSrc1"
		id='video1'
		:show-mute-btn='true'
		:muted="true"
		controls
		></video>
		<video
		v-if="!showVideo1"
		id='video2'
		:src="videoSrc2"
		controls
		></video>
		<input type="text">
		<button type="primary" @click="setPlaybackRate">setPlaybackRate</button>
		<button type="primary" @click="changeVideo">changeVideo</button>
		<button type="primary" @click="changeSeek">changeSeek</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				videoSrc1:'https://cdn-huadong.mlkee.com/yunkong/e2a6a1ace352668000aed191a817d143/1657088576648/f9a7c8781fefb44cdf2e191298a953c2.mp4',
				videoSrc2:'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4',
				showVideo1:true,
				video1Context:null,
				video2Context:null
			}
		},
		onReady() {
			this.video1Context = uni.createVideoContext('video1')
			this.video2Context = uni.createVideoContext('video2')
			this.video1Context.seek(100)
			this.video1Context.play()
		},
		methods: {
			setPlaybackRate() {  
				this.video1Context.playbackRate(2);  
			},
			changeSeek(){
				this.video1Context.seek(100)
			},
			changeVideo(){
				this.videoSrc1 = this.videoSrc2
				this.video1Context.play()
				// if(this.showVideo1){
				// 	this.video1Context.pause()
				// 	this.video2Context.play()
				// 	this.showVideo1 = false
				// }else{
				// 	this.video2Context.pause()
				// 	this.video1Context.play()
				// 	this.showVideo1 = true
				// }
			}
		}
	}
</script>

<style>
	
</style>
