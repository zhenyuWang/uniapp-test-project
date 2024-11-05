<template>
  <view>
    <text class="title">{{title}}</text>
    <text v-for="item in list" :key="item" class="list-item-text">{{item}}</text>
    <input id="input" type="text" @input="handleInputInput" value="default value" />
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'index page',
        list: ['0', '1', '2']
      }
    },
    onLoad() {

    },
    methods: {
      
    }
  }
</script>

<style>
  .title {
    color: red;
  }

  .list-item-text {
    color: greenyellow;
  }
</style>