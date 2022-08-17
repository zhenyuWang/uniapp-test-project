<template>
	<view>
		this is logs page 111
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onShow() {
			// #ifdef MP-WEIXIN | MP-QQ | MP-ALIPAY
			const _self = getCurrentPages()[0]
			console.log('_self',_self)
			if (typeof _self.getTabBar === 'function' && _self.getTabBar()) {  
			    _self.getTabBar().setData({  
			        selected: 1
			    });  
			}
			// #endif
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
