<template>
  <div>
    <div>counter: {{ mainStore.counter }}</div>
    <div>doubleCounter: {{ mainStore.doubleCounter }}</div>
    <div>doubleCounterPlusOne: {{ mainStore.doubleCounterPlusOne }}</div>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
    <button @click="mainStore.reset">reset</button>
  </div>
</template>

<script lang="ts">
import { useMainStore } from '../stores/main'
export default {
  name: 'Foo',
  data() {
    const mainStore = useMainStore()
    const increment = () => {
      mainStore.counter++
    }
    const decrement = () => {
      mainStore.counter--
    }
    return {
      mainStore,
      increment,
      decrement,
    }
  },
}
</script>
