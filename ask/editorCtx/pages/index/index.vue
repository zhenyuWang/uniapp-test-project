<template>
	<view class="content">
		<editor class="editor" id="editor"></editor>
		<button @click="insertImg" type="primary">insert image</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				editorCtx: null
			}
		},
		onReady() {
			const self = this
			uni.createSelectorQuery().select('#editor').context(function(res) {
				self.editorCtx = res.context
			}).exec()
		},
		methods: {
			insertImg() {
				this.editorCtx.insertImage({
					src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F0c%2Fef%2Fa0%2F0cefa0f17b83255217eddc20b15395f9.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661340039&t=59e041cc922f55fd47ab1655cc7104ad',
					width: '100px',
					height: '50px'
				})
					uni.hideKeyboard()
				setTimeout(() => {
					uni.hideKeyboard()
				},50)
			},
		}
	}
</script>

<style>
	.editor{
		height:200px;
	}
</style>
