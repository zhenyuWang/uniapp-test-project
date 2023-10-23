<template>
	<view class="content">
		<view>test</view>
		<!-- <div>Current Count: {{ counter.count }}</div> -->
	</view>
</template>

<script>
	// import store from '../../store/index.js';//需要引入store
	// import { mapState } from 'vuex'//引入mapState
	// import { useCounterStore } from '@/store/index'
	import { mapState, mapStores, mapActions } from 'pinia'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onReady() {
			// console.log('store', store)
			console.log('mapState', mapState)
			console.log('mapStores', mapStores)
			console.log('mapActions', mapActions)
			// const counter = useCounterStore()
			// counter.count++
		},
		methods: {

		}
	}
</script>
