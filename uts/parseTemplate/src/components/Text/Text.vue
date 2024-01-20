<template>
  <view>
    <text>
      <slot></slot>
    </text>
  </view>
</template>

<script>
export default {
  name: 'Text',
  data() {
    return {}
  },
  beforeMount() {
    console.log('wzf-------- Text beforeMount')
  },
  mounted() {
    console.log('wzf-------- Text mounted')
  },
  activated() {
    console.log('wzf-------- Text activated')
  },
  deactivated() {
    console.log('wzf-------- Text deactivated')
  },
}
</script>
