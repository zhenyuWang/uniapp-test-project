<template>
	<view class="content">
		<text>this is about</text>
    <button @click="goSetting">goSetting</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
      const pages = getCurrentPages()
      console.log('pages', pages)
      console.log('pages.length', pages.length)
      console.log('pages[0]', pages[0].$page.path)
		},
		methods: {
      goSetting(){
        uni.navigateTo({
         url: '/pages/setting/setting' 
        })
      }
		}
	}
</script>
