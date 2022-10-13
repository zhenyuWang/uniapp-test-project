<template>
		<Test>
			<template v-for="item in list">
				<template #[item.slotName]="{model}">
					vue3 作用域插槽未渲染:{{model}}
				</template>
			</template>
		</Test>
</template>

<script>
	import Test from '../components/Test.vue'
	export default {
		components:{Test},
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
