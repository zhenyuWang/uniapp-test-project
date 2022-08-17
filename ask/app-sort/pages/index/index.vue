<template>
	<view class="box">
		<view v-for="(item,index) in list" :key="index">{{item.key}}</view>
		<button type="primary" @click="randomSort">sort</button>
		<view @click="test">111</view>
		<view @click="test">222</view>
		<view @click="test">333</view>
		<view>444</view>
		<view>555</view>
	</view>
</template>

<script>
	export default {
		name: "Test",
		data() {
			return {
				flag:true,
				list: [{
						key: 0
					},
					{
						key: 1
					},
					{
						key: 2
					},
				]
			}
		},
		methods: {
			randomSort() {
				console.log('randomSort')
				// this.list.unshift(this.list.pop())
				// const last = JSON.parse(JSON.stringify(this.list[2]))
				// this.list[2] = this.list[0]
				// this.list[0] = last
				// console.log(this.list)
				
				
				// if(this.flag){
				// 	this.list.sort((a,b) => b.key-a.key)
				// }else{
				// 	this.list.sort((a,b) => a.key-b.key)
				// }
				// this.flag = !this.flag
				this.list.sort(() => {
					return Math.random() - 0.5
				})
			},
			test(){
				console.log('test');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.box {
		height: 100vh;
		width: 100vw;
	}
</style>

