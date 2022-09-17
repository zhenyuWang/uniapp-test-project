<template>
	<view>
		<editor placeholder="test editor" id="editor" @input="handleInput"></editor>
		<button type="primary" @click="getContext">getContext</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				editorCtx:null
			}
		},
		methods: {
			handleInput(e){
				console.log('e',e);
			},
			getContext(){
				uni.createSelectorQuery().select('#editor').context((res) => {
					this.editorCtx = res.context
					this.editorCtx.setContents({
						html:'<a href="www.baidu.com">test link</a>'
						// delta:'<a href="www.baidu.com">test link</a>'
					})
					this.editorCtx.getContents({
						success(res){
							console.log('getContents success',res);
						}
					})
				}).exec()
			}
		}
	}
</script>

<style>
</style>
