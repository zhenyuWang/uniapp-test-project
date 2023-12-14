<template>
  <div>
    <div>Zoo mapWritableState</div>
    <input type="text" v-model="name" />
    <div>name: {{ name }}</div>
    <div>counter: {{ counter }}</div>
    <div>doubleCounter: {{ doubleCounter }}</div>
    <div>doubleCounterPlusOne: {{ doubleCounterPlusOne }}</div>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
    <button @click="reset">reset</button>
  </div>
</template>

<script lang="ts">
import { mapActions, mapWritableState } from '../../lib/pinia'
import { useCounterStore } from '../stores/counter'
export default {
  name: 'Foo',
  computed: {
    ...mapWritableState(useCounterStore, [
      'name',
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
