<template>
  <view class="content">
    <button @click="test">test</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello'
      }
    },
    methods: {
      test() {
        uni.scanCode({
          onlyFromCamera: true,
          success(res) {
            console.log('scanCode res---------', res)
          }

        })
      }
    }
  }
</script>

<style>

</style>