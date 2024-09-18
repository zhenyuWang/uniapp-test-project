<template>
  <view class="content">
    <text class="font-size-20" style="font-family: UniFontFamily">{{ uniIcon }}</text>
    <text class="font-size-20" style="font-family: UniFontFamily">\ue101</text>
    <keep-alive>
      <component :is="aliveComponent" />
    </keep-alive>
    <button @click='toggleAliveComponent'>toggleAliveComponent</button>
    <button @click='goAbout'>go about</button>
  </view>
</template>

<script setup>
import { ref, shallowRef } from 'vue'
import Foo from './Foo.vue'

const title = ref('hello world')
console.log('title', title)
const uniIcon = '\ue101'

const aliveComponent = shallowRef(Foo)
const toggleAliveComponent = () => {
  aliveComponent.value = aliveComponent.value == null ? Foo : null
}
const goAbout = () => {
  uni.navigateTo({url: '/pages/index/about'})
}
</script>

<style>
@font-face {
  font-family: UniFontFamily;
  src: url('/static/uni.ttf');
}

</style>
