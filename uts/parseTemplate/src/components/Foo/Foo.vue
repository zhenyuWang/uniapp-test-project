<template>
  <view ref="foo-view"><text>this is Foo component</text> </view>
</template>

<script>
export default {
  name: 'Foo',
  beforeMount() {
    console.log('wzf-------- Foo beforeMount')
  },
  mounted() {
    console.log('wzf-------- Foo mounted')
    const fooView = this.$refs['foo-view'] as Element
    if (fooView !== null) {
      fooView.style.setProperty('width', '100px')
      fooView.style.setProperty('height', '100px')
      fooView.style.setProperty('backgroundColor', 'red')
    }
  },
  activated() {
    console.log('wzf-------- Foo activated')
  },
  deactivated() {
    console.log('wzf-------- Foo deactivated')
  },
}
</script>
