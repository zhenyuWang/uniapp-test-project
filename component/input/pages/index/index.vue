<template>
	<view>
		<input type="text" @blur="inputBlur" :focus="true">
		<input type="text" @input='onInput' placeholder="test placeholer" placeholder-class='input-placeholder'>
		<input type="number" placeholder="请输入手机号" placeholder-class="FontS30">
		<input type="text" placeholder="test-placeholder" placeholder-style="font-size:40px;color:blue;">
		<input type="digit">
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			inputBlur(){
				console.log('input blur vue2');
			},
			onInput(e){
				console.log('on input',e);
			}
		}
	}
</script>

<style>
	input{
		height: 50px;
		margin-top: 10px;
		background-color: antiquewhite;
	}
	.input-placeholder{
		color: red;
	}
	.FontS30{
		/* font-size: 50px; */
	}
</style>
