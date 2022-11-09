<template>
	<view class="content">
		<button type="primary" @click="testClick">testClick</button>
		<uni-icons type="contact" size="28"></uni-icons>
		<view>test call of undefined</view>
		<uni-tag text="uni-tag 标签" type="success" />
		<view>commonName:{{commonName}}</view>
		<navigator url="/packageFoo/pages/foo/foo">packageFoo/foo/foo</navigator>
		<button type="primary" @click="testCommonFn">test commonFn</button>
	</view>
</template>

<script>
	import {name,foo} from './index.js'
	import {getList} from '../../api/index.js'
	import {commonName,commonFn} from '../../common.js'
	export default {
		data(){
			return {
				commonName:commonName
			}
		},
		methods: {
			testClick(){
				getList()
				foo()
				console.log('test name in index',name)
			},
			testCommonFn(){
				commonFn()
			}
		}
	}
</script>

<style>

</style>
