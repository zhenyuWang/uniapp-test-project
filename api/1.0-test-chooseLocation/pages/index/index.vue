<template>
  <view>
    <button @click="test">chooseLocation</button>
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
      test() {
        uni.chooseLocation({
          success: (res) => {
            console.log('chooseLocationRes: ', res);
          },
          fail: (err) => {
            console.log('err: ', err)
          },
          complete: (res) => {
            console.log('complete: ', res)
          }
        })
      }
    }
  }
</script>