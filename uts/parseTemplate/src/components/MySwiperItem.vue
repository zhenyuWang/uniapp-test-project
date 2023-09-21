<template>
  <swiper-item>
    <view>swiper-item</view>
    <text>msg: {{msg}}</text>
  </swiper-item>
</template>

<script lang="uts">
  export default {
    props: {
      msg: {
        type: String,
        default: 'default msg'
      }
    },  
  }
</script>