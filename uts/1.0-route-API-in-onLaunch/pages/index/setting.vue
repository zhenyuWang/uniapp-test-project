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
        title: 'setting'
      }
    },
    onLoad() {
      console.log('setting onLoad')
    },
    methods: {
      getState() {
        const pages = getCurrentPages()
        console.log('pages', pages)
      }
    }
  }
</script>