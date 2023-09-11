<template>
  <view>
    <text>this is Foo component</text>
    <text>msg: {{ msg }}</text>
  </view>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      required: true,
      validator: (value) => {
        println('validator------------------------', value)
        return value.length > 0
      }
    }
  }
}
</script>