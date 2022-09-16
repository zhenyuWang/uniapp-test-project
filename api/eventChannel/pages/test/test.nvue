<template>
	<view>
		test
	</view>
</template>

<script>
	// import {onMounted, getCurrentInstance} from 'vue';
	// import {getCurrentInstance} from 'vue';
	
	// onMounted(() => {
			// const instance = getCurrentInstance().proxy
			// const eventChannel = instance.getOpenerEventChannel();
	  
	//   console.log('eventChannel',eventChannel)
	//   eventChannel.emit('acceptDataFromOpenedPage', {data: 'data from test page'});
	//   eventChannel.emit('someEvent', {data: 'data from test page for someEvent'});
	//   // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
	//   eventChannel.on('acceptDataFromOpenerPage', function(data) {
	// 	console.log('acceptDataFromOpenerPage',data)
	//   })
	// })
	export default {
		data(){
			return {
				eventChannel:null
			}
		},
		mounted(){
			this.eventChannel = this.getOpenerEventChannel()
			console.log('eventChannel',this.eventChannel)
			this.eventChannel.emit('acceptDataFromOpenedPage', {data: 'data from test page'});
			this.eventChannel.emit('someEvent', {data: 'data from test page for someEvent'});
			// 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
			this.eventChannel.on('acceptDataFromOpenerPage', function(data) {
				console.log('eventChannel.on acceptDataFromOpenerPage',data)
			})
		},
	}
</script>

<style>

</style>
