<template>
  <div>
    <div>Foo mapState array</div>
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
    ...mapState(useCounterStore, [
      'counter',
      'doubleCounter',
      'doubleCounterPlusOne',
    ]),
  },
  methods: {
    ...mapActions(useCounterStore, ['increment', 'decrement', 'reset']),
  },
}
</script>
