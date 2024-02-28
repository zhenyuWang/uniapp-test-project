<template>
  <view class="content">
    <Foo ref='fooRef' class="foo" />
    <text>fooStr: {{fooStr}}</text>
    <text>fooNum: {{fooNum}}</text>
    <button class="increment-btn uni-panel-h-on" @click="increment">trigger Foo increment</button>
  </view>
</template>

<script setup>
  import Foo from './Foo.vue'
  import {
    ref,
    onMounted,
    defineExpose
  } from 'vue'

  const fooRef = ref(null)
  const fooStr = ref('')
  const fooNum = ref(0)

  onMounted(() => {
    fooStr.value = fooRef.value.str
    fooNum.value = fooRef.value.num
  })

  const increment = () => {
    fooRef.value.increment()
    fooNum.value = fooRef.value.num
  }
  defineExpose({increment})
</script>