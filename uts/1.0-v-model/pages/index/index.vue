<template>
  <view>
    <!-- <text v-text="title"></text>
    <view v-text="title"></view> -->
    <text>num: {{num}}</text>
    <text>typeof num: {{typeof num}}</text>
    <input v-model.number="num" type="text" />
    <text>str: {{str}}</text>
    <text>str.length: {{str.length}}</text>
    <!-- <input v-model.trim="str" type="text" /> -->
    <input v-model.lazy="str" type="text" />
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello',
        num: 1,
        str: 'abc'
      }
    }
  }
</script>