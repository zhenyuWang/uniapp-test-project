<template>
  <view>
    <text>this is Bar component</text>
    <slot></slot>
    <button @click="test">test</button>
  </view>
</template>

<script lang='uts'>
// type Slot = () => any[];
export default {
  methods: {
    test() {
      const slots = this.$slots["default"]
      console.log(slots)
    }
  }
}
</script>
