<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <button type="primary" @click="onPlay">on play123</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello',
      innerAudioContext: null
    }
  },
  onLoad() {},
  onReady(){
    console.log('page index onReady');
    // #ifdef APP-PLUS || MP-WEIXIN
    console.log('小程序 or App')
    // #endif
    this.innerAudioContext = uni.createInnerAudioContext({
      src: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3'
    });
    console.log('this.innerAudioContext',this.innerAudioContext);
  },
  methods: {
    onPlay(){
      console.log('on play')
      console.log('this.innerAudioContext',this.innerAudioContext.src);
      // this.innerAudioContext.play()
      // this.innerAudioContext.onPlay(() => {
      //   console.log('开始播放');
      // });
      // this.innerAudioContext.onError((res) => {
      //   console.log(res.errMsg);
      //   console.log(res.errCode);
      // });
      // this.innerAudioContext.onTimeUpdate((res) => {
      //   console.log(this.innerAudioContext.currentTime)
      //   console.log(this.innerAudioContext.duration)
      // });
      // this.innerAudioContext.onEnded((res) => {
      //   console.log('on end');
      // });
    }
  },
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
