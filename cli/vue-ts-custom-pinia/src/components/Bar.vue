<template>
  <div>
    <div>Bar mapState object</div>
    <div>counter: {{ counter }}</div>
    <div>doubleCounter: {{ doubleCounter }}</div>
    <div>doubleCounterPlusOne: {{ doubleCounterPlusOne }}</div>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
    <button @click="reset">reset</button>
  </div>
</template>

<script lang="ts">
import { mapActions, mapState } from '../../lib/pinia'
import { useCounterStore } from '../stores/counter'
export default {
  name: 'Foo',
  computed: {
    ...mapState(useCounterStore, {
      counter: (state) => state.counter,
      doubleCounter: (state) => state.counter * 2,
      doubleCounterPlusOne: (state) => state.counter * 2 + 1,
    }),
  },
  methods: {
    ...mapActions(useCounterStore, ['increment', 'decrement', 'reset']),
  },
}
</script>
