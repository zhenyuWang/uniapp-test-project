<template>
  <view :class="myClass" style="padding: 20px 10px;">
    <text>this is Bar vue</text>
    <button @click="toggleClass">toggle class</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        myClass: 'bg-red-bar'
      }
    },
    methods: {
      toggleClass() {
        this.myClass = this.myClass === 'bg-red-bar' ? 'bg-green-bar' : 'bg-red-bar'
      }
    }
  }
</script>

<style>
  .bg-red-bar {
    background-color: red;
  }

  .bg-green-bar {
    background-color: green;
  }
</style>