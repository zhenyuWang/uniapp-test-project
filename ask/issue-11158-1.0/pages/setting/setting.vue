<template>
	<view>
		<text>this is index</text>
    <button @click="back">back</button>
	</view>
</template>

<script>
	export default {
		methods: {
      back(){
        uni.navigateBack()
      }
		}
	}
</script>
