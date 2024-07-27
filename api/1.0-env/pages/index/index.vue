<template>
  <view>
    <text>{{title}}</text>
    <block v-if="true">
      <text>{{title}}</text>
    </block>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello vue2'
      }
    },
    onReady(){
      // const num = import.meta.env.VITE_TEST_NUM
      // const str = import.meta.env.VITE_TEST_STR
      const num = process.env.VITE_TEST_NUM
      const str = process.env.VITE_TEST_STR
      console.log('num', num)
      console.log('str', str)
    }
  }
</script>