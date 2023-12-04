<template>
	<view v-html="html"></view>
	<text class="my-text">test text</text>
	<rich-text :nodes="strings"></rich-text>
</template>

<script>
	export default {
		data() {
			return {
				html: '<text class="my-text" style="color: red;">text for v-html</text>',
				strings: '<div style="text-align:center;"><div style="color: red;">test text123123123123</div><img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni@2x.png"/></div>'
			}
    },
		onReady() {
			console.log('onReady')
		}
	}
</script>

<style>
	.my-text {
		font-size: 30px;
	}
</style>