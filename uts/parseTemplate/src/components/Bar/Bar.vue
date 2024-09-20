<template>
  <view>
    <text>this is bar</text>
  </view>
</template>
<script>
export default {
  name: 'Bar',
  beforeMount() {
    console.log('wzf-------- Bar beforeMount')
  },
  mounted() {
    console.log('wzf-------- Bar mounted')
  },
  beforeUpdate() {
    console.log('wzf-------- Bar beforeUpdate')
  },
  updated() {
    console.log('wzf-------- Bar updated')
  },
  activated() {
    console.log('wzf-------- Bar activated')
  },
  deactivated() {
    console.log('wzf-------- Bar deactivated')
  },
}
</script>
