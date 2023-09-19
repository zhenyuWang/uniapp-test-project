<template>
  <view class="test-container">
    <view>this is test container</view>
    <slot></slot>
  </view>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true,
      validator: (value: string): boolean => {
        console.warn('validator----------', value)
        return ['111', '222', '123'].indexOf(value) != -1
      },
    },
  },
}
</script>
<style>
.test-container {
  background-color: antiquewhite;
}
</style>
