<template>
	<view>
		<view v-for="item in list" :key="item.id">
			<view>测试作用域插槽</view>
			<slot :name="item.slotName" :model="item.model"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				list:[
					{
						slotName:'test1',
						model:'model1'
					},{
						slotName:'test2',
						model:'model2'
					},{
						slotName:'test3',
						model:'model3'
					}
				]
			}
		}
	}
</script>
