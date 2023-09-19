<script setup lang="ts">
import { ref } from 'vue'
import Foo from './Foo.vue'

const props = defineProps({
  msg: {
    type: String,
    default: 'default msg',
  },
  arr: {
    type: Array,
    required: true,
    default: (rawProps: any) => {
      console.log('rawPprops', rawProps)
      return [1, 2, 3]
    },
  },
})

const count = ref(0)
</script>

<template>
  <div>
    <Foo class="bgB"></Foo>
  </div>
</template>

<style>
.read-the-docs {
  color: #888;
}
.bgB {
  height: 100px;
  background-color: blue;
}
</style>
