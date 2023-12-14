<script lang="ts">
import { useCounterStore } from './stores/counter'
import { storeToRefs, mapActions } from '../lib/pinia'
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'
import Zoo from './components/Zoo.vue'
import Baz from './components/Baz.vue'
export default {
  name: 'App',
  components: {
    Foo,
    Bar,
    Zoo,
    Baz,
  },
  data() {
    const mainStore = useCounterStore()
    const { counter, doubleCounter, doubleCounterPlusOne } =
      storeToRefs(mainStore)
    return {
      counter,
      doubleCounter,
      doubleCounterPlusOne,
    }
  },
  methods: {
    ...mapActions(useCounterStore, ['increment', 'decrement', 'reset']),
  },
}
</script>

<template>
  <div>
    <div>App storeToRefs</div>
    <div>counter: {{ counter }}</div>
    <div>doubleCounter: {{ doubleCounter }}</div>
    <div>doubleCounterPlusOne: {{ doubleCounterPlusOne }}</div>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
    <button @click="reset">reset</button>
    <hr />
    <Foo />
    <hr />
    <Bar />
    <hr />
    <Zoo />
    <hr />
    <Baz />
  </div>
</template>
