<template>
	<view class="content">
		<text class="title">{{title}}</text>
    <button @click="changeTitle" id="change-title-btn">change title</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		methods: {
      changeTitle(){
        this.title += '1'
      }
		}
	}
</script>

