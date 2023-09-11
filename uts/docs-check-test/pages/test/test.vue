<template>
	<view class="content">
		<template v-for="(item, index) in list" :key="index">
			<text>{{item}}</text>
		</template>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'test',
				list: ['a', 'b', 'c']
			}
		},
		methods: {
			fooSubmit(){
				console.warn('fooSubmit')
			}
		}
	}
</script>