<script setup>
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()
counter.count++
// 自动补全！ ✨
counter.$patch({ count: counter.count + 1 })
// 或使用 action 代替
counter.increment()
function plus() {
  counter.increment()
}
</script>
<template>
  <!-- 直接从 store 中访问 state -->
  <div @click="plus">Current Count: {{ counter.count }}</div>
</template>
