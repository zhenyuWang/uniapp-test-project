<template>
  <div>
    <text>str: {{str}}</text>
    <view><text class='foo-num'>num: {{num}}</text></view>
  </div>
</template>

<script setup>
  import {
    ref,
    defineExpose
  } from 'vue'

  const str = 'foo str'
  const num = ref(0)
  const increment = () => {
    num.value++
  }

  defineExpose({
    str,
    num,
    increment
  })
</script>