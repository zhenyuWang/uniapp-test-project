<template>
  <view class="content">
    <text class="title">{{title}}</text>
    <Foo />
    <navigator url="/pages/index/about">go about</navigator>
  </view>
</template>

<script>
  import Foo from './Foo.vue'
  export default {
    components: {Foo},
    data() {
      return {
        title: 'this is page title'
      }
    },
    onLoad() {
      console.log('page onLoad')
    },
    onShow() {
      console.log('page onShow')
    },
    onReady() {
      console.log('page onReady')
    },
    onBackPress() {
      console.log('page onBackPress')
      return null
    },
    onHide() {
      console.log('page onHide')
    },
    onUnload() {
      console.log('page onUnload')
    },
  }
</script>

