<template>
  <div>
    <div>Baz mapStores</div>
    <div>counterStore</div>
    <div>counter: {{ counterStore.counter }}</div>
    <div>doubleCounter: {{ counterStore.doubleCounter }}</div>
    <div>doubleCounterPlusOne: {{ counterStore.doubleCounterPlusOne }}</div>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
    <button @click="reset">reset</button>
    <hr />
    <div>userListStore</div>
    <div v-for="user in userListStore.users" :key="user.id">
      <div>{{ user.name }}</div>
      <button @click="removeUser(user.id)">removeUser</button>
    </div>
    <button @click="pushUser(`${Date.now()}`)">pushUser</button>
    <button @click="clearUserList">clearUserList</button>
  </div>
</template>

<script lang="ts">
import { mapStores } from '../../lib/pinia'
import { useCounterStore } from '../stores/counter'
import { useUserListStore } from '../stores/userList'
export default {
  name: 'Foo',
  computed: {
    ...mapStores(useCounterStore, useUserListStore),
  },
  methods: {
    increment() {
      this.counterStore.increment()
    },
    decrement() {
      this.counterStore.decrement()
    },
    reset() {
      this.counterStore.reset()
    },
    pushUser(name: string) {
      this.userListStore.push(name)
    },
    removeUser(id: number) {
      this.userListStore.remove(id)
    },
    clearUserList() {
      this.userListStore.clear()
    },
  },
}
</script>
