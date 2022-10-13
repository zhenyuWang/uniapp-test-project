<template>
	<view>
		<picker :range="list" :value="pickerVal" @change="bindPickerChange">
			<view>{{pickerVal}}</view>
		</picker>
		<input class="my-input" type="text" @blur="inputBlur" :focus="testFocus">
		<input class="my-input" type="text" @input='onInput' placeholder="test placeholer" placeholder-class='input-placeholder'>
		<input class="my-input" type="number" placeholder="请输入手机号" placeholder-class="FontS30">
		<input class="my-input" type="text" placeholder="test-placeholder" placeholder-style="font-size:40px;color:blue;">
		<input class="my-input" type="digit">
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [1,2,3,4,5],
				pickerVal: 1,
				testFocus:false
			}
		},
		mounted(){
		},
		methods: {
			bindPickerChange({detail}){
				this.pickerVal = detail.value
				console.log('bindPickerChange 修改 testFocus 前')
				this.testFocus = true
			},
			inputBlur(){
				console.log('input blur vue2');
				this.testFocus = false
			},
			onInput(e){
				console.log('on input',e);
			}
		}
	}
</script>

<style>
	.my-input{
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
