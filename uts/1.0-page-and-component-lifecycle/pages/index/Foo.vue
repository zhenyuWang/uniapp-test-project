<template>
  <view class="content">
    <text class="title">{{title}}</text>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'this is component title'
      }
    },
    beforeCreate() {
      console.log('component beforeCreate');
    },
    created() {
      console.log('component created');
    },
    beforeMount() {
      console.log('component beforeMount');
    },
    mounted() {
      console.log('component mounted');
    },
    beforeUpdate() {
      console.log('component beforeUpdate');
    },
    updated() {
      console.log('component updated');
    },
    beforeUnmount() {
      console.log('component beforeUnmount');
    },
    unmounted() {
      console.log('component unmounted');
    },
    beforeDestroy() {
      console.log('component beforeDestroy');
    },
    destroyed() {
      console.log('component destroyed');
    }
  }
</script>