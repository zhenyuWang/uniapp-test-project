<template>
  <view>
    <input type="text" class="input" v-model="str" :class="{ hasContent: str.length > 0 }" />
    <text>{{ str }}</text>
  </view>
</template>

<script>
export default {
  data() {
    return {
      str: '',
    }
  },
}
</script>

<style>
.input {
  height: 50px;
  border: 1px solid red;
  border-radius: 5px;
  padding: 10px;
}
.hasContent {
  padding-top: 20px;
  border: 1px solid green;
}
</style>
