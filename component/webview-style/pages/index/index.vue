<template>
	<view class="content">
		<button @click="changeUrl" type="primary">changeUrl</button>
		<button @click="changeStyle" type="primary">changeStyle</button>
		<web-view :style="testStyle" :fullscreen='false' :src="url"></web-view>
		<!-- <web-view :style="testStyle" :fullscreen='true' :src="url"></web-view> -->
		<!-- <web-view :fullscreen='false' :src="url"></web-view> -->
		<!-- <web-view :fullscreen='true' :src="url"></web-view> -->
		<!-- <web-view :src="url"></web-view> -->
		<text>1231</text>
		<navigator url="/pages/test/test">go test</navigator>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				url: 'http://114.115.235.59/test-webview1.html',
				testStyle:{
					width:'100px',
					height:'100px'
				}
			}
		},
		methods:{
			changeUrl(){
				this.url = 'http://114.115.235.59/test-webview2.html'
			},
			changeStyle(){
				this.testStyle = {
					width:'300px',
					height:'300px'
				}
			}
		}
	}
</script>
