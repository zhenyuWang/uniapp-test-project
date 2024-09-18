<template>
  <view class="content">
    <text>title: {{title}}</text>
  </view>
</template>

<script setup>
import { ref } from 'vue'

const title = ref('this is about')
</script>
