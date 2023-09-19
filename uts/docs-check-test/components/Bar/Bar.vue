<template>
	<view>
		<slot msg='default slot msg'></slot>
		<slot name="header" msg="header slot msg" :age='18'></slot>
		<text style="font-size: 20px;font-family: AlimamaDaoLiTiTTF">font-family: 阿里妈妈刀隶体-ttf
		  (网络字体下载后生效)</text>
			<radio-group>
				<view>
					<radio></radio>
				</view>
			</radio-group>
			<swiper>
				<view>
					<swiper-item></swiper-item>
				</view>
			</swiper>
	</view>
</template>

<script lang="uts">
	import type {SlotsType} from 'vue'
	
	export default {
		 slots: Object as SlotsType<{
		    default: { msg: string },
		    header: { msg: string, age: number }
		  }>
	}
</script>

<style>

</style>