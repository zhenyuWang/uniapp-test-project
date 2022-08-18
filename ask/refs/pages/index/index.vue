<template>
	<view class="content">
		<child ref='child'></child>
		<button type="primary" @click="getRefChild">getRefChild</button>
		<view v-for="(item, index) in list" :key="index" :open="true">  
			<child :ref="getRef(index)" />  
		</view>
	</view>
</template>

<script>
	import Child from './Child.vue'
	export default {
		components:{Child},
		data() {
			return {
				list:[0,1,2,3,4]
			}
		},
		onLoad() {

		},
		methods: {
			getRefChild(){
				// console.log('this.$refs',this.$refs)
				// console.log('this.$refs.child',this.$refs.child)
				// console.log('this.$refs.child0',this.$refs.child0)
				// console.log('this.$refs.child1',this.$refs.child1)
				// console.log('this.$refs.child2',this.$refs.child2)
				// console.log('this.$refs.child3',this.$refs.child3)
				this.$refs.child.test()
				this.$refs.child0[0].test()
				console.log(333);
			},
			getRef(index){
				return `child${index}`
			}
		}
	}
</script>

<style>
	
</style>
