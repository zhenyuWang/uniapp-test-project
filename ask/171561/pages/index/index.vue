<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area" style="margin-bottom: 1000px;">
      <text class="title" id="test">{{title}}</text>
    </view>
    <button id="test123">test</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello'
      }
    },
    onPageScroll(options) {
      console.log('onPageScroll', options);
      this.title = `${this.title}`
    },
    methods: {

    }
  }
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    hei
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