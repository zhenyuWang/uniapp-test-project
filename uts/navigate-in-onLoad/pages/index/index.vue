<template>
	<view>
		<text>this is index 1.0 vue3</text>
    <button @click="navigateToAbout">navigateTo about</button>
    <button @click="redirectToAbout">redirectTo about</button>
    <button @click="reLaunchAbout">reLaunch about</button>
	</view>
</template>

<script>
	export default {
		// onLoad() {
  //     uni.navigateTo({
  //       url: '/pages/index/about'
  //     })
		// },
    methods: {
      navigateToAbout(){
        uni.navigateTo({
          url: '/pages/index/about'
        })
      },
      redirectToAbout(){
        uni.redirectTo({
          url: '/pages/index/about'
        })
      },
      reLaunchAbout(){
        uni.reLaunch({
          url: '/pages/index/about'
        })
      }
    }
	}
</script>
