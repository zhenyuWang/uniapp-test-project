<template>
  <view>
    <text class="title">{{title}}</text>
    <button @click="getState">getState</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'about'
      }
    },
    onLoad() {
      console.log('about onLoad')
    },
    methods: {
      getState() {
        const pages = getCurrentPages()
        console.log('pages', pages)
      }
    }
  }
</script>