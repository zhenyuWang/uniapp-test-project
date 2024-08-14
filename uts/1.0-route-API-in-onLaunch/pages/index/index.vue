<template>
  <view>
    <text class="title">{{title}}</text>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'index'
      }
    },
    onLoad() {
      console.log('index onLoad')
    },
    onShow() {
      console.log('index onShow')
    },
    onReady() {
      console.log('index onReady')
    }
  }
</script>