<template>
	<view>
		test
	</view>
</template>

<script setup lang="ts">
	import {onMounted, getCurrentInstance} from 'vue';
	
	onMounted(() => {
		const instance = getCurrentInstance().proxy
		
	  // #ifdef APP-NVUE
	  const eventChannel = instance.$scope.eventChannel; // 兼容APP-NVUE
	  // #endif
	  // #ifndef APP-NVUE
	  const eventChannel = instance.getOpenerEventChannel();
	  // #endif
	  
	  console.log('eventChannel',eventChannel)
	  eventChannel.emit('acceptDataFromOpenedPage', {data: 'data from test page'});
	  eventChannel.emit('someEvent', {data: 'data from test page for someEvent'});
	  // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
	  eventChannel.on('acceptDataFromOpenerPage', function(data) {
		console.log('acceptDataFromOpenerPage',data)
	  })
	})
</script>

<style>

</style>
