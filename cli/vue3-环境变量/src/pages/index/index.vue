<template>
  <view class="content">
    <view>TEST: {{test}}</view>
    <view>VITE_SOME_KEY: {{someKey}}</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello',
      test: process.env.TEST,
      someKey: import.meta.env.VITE_SOME_KEY
    }
  },
  onLoad() {},
  methods: {},
}
</script>
