<template>
  <view class="content">
    <text class="title">{{title}}</text>
    <Foo class="my-foo" />
  </view>
</template>

<script>
  import Foo from './Foo.vue'
  export default {
    components:{Foo},
    data() {
      return {
        title: 'Hello'
      }
    }
  }
</script>