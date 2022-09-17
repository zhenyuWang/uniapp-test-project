<script setup lang="ts">
import { ref } from 'vue'
import Foo from './Foo.vue'

defineProps<{ msg: string }>()

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
.bgB{
  height: 100px;
  background-color: blue;
}
</style>
