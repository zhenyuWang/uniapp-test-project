<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <text class="font-size-20" style="font-family: UniFontFamily">{{ uniIcon }}</text>
    <text class="font-size-20" style="font-family: UniFontFamily">\ue101</text>
  </view>
</template>

<script setup>
import { ref } from 'vue'
const title = ref('hello world')
console.log('title', title)
const uniIcon = '\ue101'
</script>

<style>
@font-face {
  font-family: UniFontFamily;
  src: url('/static/uni.ttf');
}
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
