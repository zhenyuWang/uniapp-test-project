<template>
  <view class="uni-padding-wrap container">
		<button @click="pageScrollTo">scrollTo 1200</button>
  </view>
</template>
<script lang="ts">
export default {
  data() {
    return {
      data: '',
    }
  },
  onReachBottom() {
    console.log('onReachBottom')
  },

  methods: {

		pageScrollTo(){
			uni.pageScrollTo({
				scrollTop: 1200,
				complete(res){
					console.warn('pageScrollTo', res)
				}
			})
		}
  },
}
</script>

<style>
.container {
  height: 1200px;
}
</style>
