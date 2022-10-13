<template>  
  <view>  
    <button @click="reverse">reverse</button>  
    <view v-for="(item,index) in list" :key="item">{{ item }}</view>  
  </view>  
</template>  

<script>
export default {
	data(){
		return {
			list: ["a", "b", "c", "d"]
		}
	},
	methods:{
		reverse() {
		  this.list.reverse()
			console.warn(`reversed list:${JSON.stringify(this.list)}`)
		}
	}
}
</script>