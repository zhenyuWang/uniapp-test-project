<template>
	<view>
		<text>this is setting</text>
	</view>
</template>

<script>
	export default {
		onLoad() {
      uni.navigateTo({
        url: '/pages/index/user'
      })
      // uni.redirectTo({
      //   url: '/pages/index/user'
      // })
      // uni.reLaunch({
      //   url: '/pages/index/user'
      // })
		},
	}
</script>
