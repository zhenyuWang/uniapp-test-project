<template>
	<view class="content">
		<view v-for="item in list" :key="item.id">
			<view class="item" @click="showId(item.id)">{{ item.id }}</view>
		</view>
		<button type="primary" @click="arrUnshift">unshift</button>
		<view>curId:{{ curId }}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					id: 1
				}, {
					id: 2
				},{
					id: 3
				},{
					id: 4
				},{
					id: 5
				}],
				curId: '',
				nextId: 6
			}
		},
		methods: {
			showId(value) {
				this.curId = value
			},
			arrUnshift() {
				this.list.unshift({
					id: this.nextId++
				})
			}
		}
	}
</script>
