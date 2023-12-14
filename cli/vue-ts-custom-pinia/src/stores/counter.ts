import { defineStore } from '../../lib/pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    name: 'default name',
    counter: 0,
  }),
  getters: {
    doubleCounter: (state) => state.counter * 2,
    doubleCounterPlusOne(): number {
      return this.doubleCounter + 1
    },
  },
  actions: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    },
    reset() {
      this.name = 'default name'
      this.counter = 0
    },
  },
})
