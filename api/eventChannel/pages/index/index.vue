<template>
	<view class="content">
		<button @click="test" type="primary">test</button>
	</view>
</template>

<script>
	// const test = () => {
	// 	console.log('index test start')
	// 	uni.navigateTo({
	// 	  url: '/pages/test/test',
	// 	  events: {
	// 		// 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
	// 		acceptDataFromOpenedPage: function(data) {
	// 		  console.log('acceptDataFromOpenedPage',data)
	// 		},
	// 		someEvent: function(data) {
	// 		  console.log('someEvent',data)
	// 		}
	// 	  },
	// 	  success: function(res) {
	// 			console.log('navigateTo success',res)
	// 		// 通过eventChannel向被打开页面传送数据
	// 		res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'data from starter page' })
	// 	  }
	// 	})
	// }
	export default {
		methods:{
			test(){
				console.log('index test start')
					uni.navigateTo({
					  url: '/pages/test/test',
					  events: {
							// 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
							acceptDataFromOpenedPage: function(data) {
								console.log('acceptDataFromOpenedPage',data)
							},
							someEvent: function(data) {
								console.log('someEvent',data)
							}
					  },
					  success: function(res) {
							console.log('navigateTo success',res)
						// 通过eventChannel向被打开页面传送数据
							res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'data from starter page' })
					  }
					})
			}
		}
	}
</script>

<style>
</style>
