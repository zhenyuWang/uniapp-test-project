<template>
  <view class="test-child">
    <view>this is test child</view>
    <view v-for="item in list" :key="item.id">{{item.name}}</view>
  </view>
</template>

<script setup lang="ts">
  import {defineProps} from 'vue'
  const props = defineProps({
    list:{
      type:Array,
      required:true
    }
  })
</script>
<style>
.test-child{
  background-color: #09c;
}
</style>