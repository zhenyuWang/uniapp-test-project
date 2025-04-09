<template>
  <view>
    <text>this is index page</text>
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
    onShow() {
      console.log('index page show');
    },
    onHide() {
      console.log('index page onHide');
    },
    methods: {
      test() {
        uni.showActionSheet({
          itemList: ['a', 'b', 'c']
        })
        setTimeout(() => {
          uni.chooseLocation({
            complete(res) {
              console.log('uni.chooseLocation complete', res);
            }
          })
        }, 1000)
        setTimeout(() => {
          uni.previewImage({
            urls:['/static/logo.png']
          })
        }, 2000)
      }
    }
  }
</script>