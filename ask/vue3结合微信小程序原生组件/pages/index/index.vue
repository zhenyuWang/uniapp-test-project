<template>  
    <view>
			<test :name="name"></test>
			<view @tap="dianji">{{ name.text }}</view>  
			<navigator url="/pages/test-slot/test-slot">go test-slot</navigator>
		</view>
</template>  

<script>
// import { reactive } from 'vue'  
// let name = reactive({ text: '文字' })  
// const dianji = e => {  
//     name.text = Math.random() + ''  
// }

export default {
	data(){
		return {
			name:{
				text:'text'
			}
		}
	},
	methods:{
		dianji(){
		    this.name.text = Math.random() + ''  
		}  
	}
}
</script>
