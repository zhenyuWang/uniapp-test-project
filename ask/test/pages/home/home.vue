<template>
  <view id="home">
    <aaa :list="list[0]"></aaa>
    <bbb></bbb>
		<navigator url="/pages/about/about">go about</navigator>
  </view>
</template>
<script>
import aaa from "../../components/a.vue"
import bbb from "../../components/b.vue"
export default {
	components:{aaa,bbb},
	data(){
		return {
			list:[
				[
					{
						name:'1'
					},{
						name:'2'
					}
				]
			]
		}
	},
	onPageShow(){
		console.log('home onPageShow')
	},
	created(){
		console.log('home created');
	},
	onReady() {
		console.log('home onReady');
		const list = [
			{name:'3'},
			{name:'4'},
			{name:'5'},
			{name:'6'},
		]
		this.list[0] = [...this.list[0],...list]
	},
	onShow(){
		console.log('home onShow');
	}
}
</script>