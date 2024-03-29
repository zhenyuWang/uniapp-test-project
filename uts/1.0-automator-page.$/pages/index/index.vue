<template>
  <view class="content">
    <text class="title">{{title}}</text>
    <text>count： {{count}}</text>
  </view>
</template>

<script setup>
  // export default {
  //   data() {
  //     return {
  //       title: 'Hello'
  //     }
  //   }
  // }
  import { ref, watchEffect } from 'vue';
  
  const title = 'Hello'
  
  const count = ref(0)
  
  watchEffect(() => console.log(count.value))
  // -> 输出 0
  
  count.value++
</script>