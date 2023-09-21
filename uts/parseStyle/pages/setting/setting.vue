<template>
  <view>
    <span ref="test-span">test-span</span>
    <text ref="test-text">test-text</text>
    <text ref="test-text">test-text</text>
    <text ref="test-text">test-text</text>
    <button ref="test-button">test button</button>
    <Foo title="default title1" ref="test-foo" />
    <Foo title="default title2" ref="test-foo" />
    <Foo title="default title3" ref="test-foo" />
    <button @click="testRefs">testRefs</button>
    <swiper ref="test-swiper"></swiper>
		<template v-for="item in 3" :key="item">
			<text ref="test-for">{{item}}</text>
		</template>
  </view>
</template>

<script>
export default {
  data() {
    return {
      test: 'test msg'
    }
  },
  methods: {
    testRefs(){
      const testSpan = this.$refs['test-span']
      if(testSpan !== null){
				testSpan.innerHTML = 'new span'
      }
      const testText = this.$refs['test-text']
      if(testText !== null){
				testText.$el.innerHTML = 'new text'
      }
      // const testButton = this.$refs['test-button']
      // if(testButton !== null){
      //   testButton.setAttribute('value', 'new button')
      //   testButton.style.setProperty('color', 'red')
      // }
      // const testSwiper = this.$refs['test-swiper']
      // if(testSwiper !== null){
      //   testSwiper.style.setProperty('width', '100px')
      //   testSwiper.style.setProperty('height', '100px')
      //   testSwiper.style.setProperty('backgroundColor', 'red')
      // }
      const testFoo = this.$refs['test-foo']
      if(testFoo !== null){
				testFoo.test()
      }
			
			const testFor = this.$refs['test-for']
			if(testFor !== null){
				testFor.forEach(item => {
					item.$el.innerHTML = 'new text'
				})
			}
    }
  }
}
</script>
