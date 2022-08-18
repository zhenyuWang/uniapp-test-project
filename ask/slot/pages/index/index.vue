<template>
	<view class="content">
		<MySlot>
<!-- 			<template #title1="props">
				111111 {{props}}
			</template> -->
		<!-- 	<template v-slot:title1>
				111111
			</template> -->
			
<!-- 			<template v-slot:title0>
				000000
			</template>
			<template v-slot:title1>
				111111
			</template>
			<template v-slot:title2>
				222222
			</template>
			 -->
			<template #title0="props1">
				{{props1}} 111
			</template>
			<template #title1="props2">
				{{props2}} 222
			</template>
			<template #title2="props3">
				{{props3}} 333
			</template>
			
		</MySlot>
	</view>
</template>

<script>
	import MySlot from './MySlot.vue'
	export default {
		components: {
			MySlot
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>

</style>
