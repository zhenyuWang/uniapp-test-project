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
  activated() {
    console.log('wzf-------- Bar activated')
  },
  deactivated() {
    console.log('wzf-------- Bar deactivated')
  },
}
</script>
