<template>
  <view>
    <view class="box1">
      <text class="title">{{title}}</text>
      <view class="box2">
        <text class="title">{{title}}</text>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello'
      }
    },
    onLoad() {

    },
    methods: {

    }
  }
</script>

<style>
  .box1 {
    width: 300px;
    height: 100px;
    background-image: linear-gradient(to right, yellow, red);
  }

  .box2 {
    width: 200px;
    height: 60px;
    background-image: linear-gradient(-90deg, rgb(172, 226, 246) 0%, rgb(255, 255, 255) 45%, rgb(255, 255, 255) 100%)
  }
</style>