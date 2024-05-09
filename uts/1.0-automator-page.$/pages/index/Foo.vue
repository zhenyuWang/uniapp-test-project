<template>
  <view>
    <text>this is Foo</text>
    <Bar class="my-bar" />
  </view>
</template>

<script>
  import Bar from './Bar.vue'
  export default {
    components: {
      Bar
    },
    data(){
      return {
        age: 18
      }
    }
  }
</script>
