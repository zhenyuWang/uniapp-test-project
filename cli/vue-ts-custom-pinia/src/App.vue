<script lang="ts">
import { useMainStore } from './stores/main'
import Foo from './components/Foo.vue'
export default {
  name: 'App',
  components: {
    Foo,
  },
  data() {
    const mainStore = useMainStore()
    return {
      mainStore,
    }
  },
}
</script>

<template>
  <div>
    <div>counter: {{ mainStore.counter }}</div>
    <div>doubleCounter: {{ mainStore.doubleCounter }}</div>
    <div>doubleCounterPlusOne: {{ mainStore.doubleCounterPlusOne }}</div>
    <button @click="mainStore.reset">reset</button>
    <hr />
    <Foo />
    
  </div>
</template>
