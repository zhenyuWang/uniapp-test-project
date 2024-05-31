<template>
	<view class="content">
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
  const fn1 = (options) => {
    console.log('fn1------', options)
  }
  const fn2 = (options) => {
    console.log('fn2------', options)
  }
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onReady() {
      uni.onThemeChange(fn1)
      uni.onThemeChange(fn1)
      uni.onThemeChange(fn2)
		},
		methods: {

		}
	}
</script>
