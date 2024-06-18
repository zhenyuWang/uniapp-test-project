<template>
  <view>
    <text>$attrs: {{$attrs}}</text>
    <input v-bind="$attrs" />
  </view>

</template>

<script>
  export default {
    name: "my-input",
    mounted(){
      console.log('wzf----- this.$attrs', this.$attrs)
    }
  }
</script>