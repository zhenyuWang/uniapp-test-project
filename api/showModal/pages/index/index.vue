<template>
	<view class="content">
		<button @click="showModal">showModal</button>
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

		},
		methods: {
      showModal(){
        uni.showModal({
          title:'title',
          content:'content',
        })
      }
		}
	}
</script>
