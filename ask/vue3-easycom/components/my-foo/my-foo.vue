<template>
	<view class="my-foo">
    my-foo component text is:{{text}}
	</view>
</template>

<script>
	export default {
		props:{
			text:{
				type:String,
				default:''
			}
		}
	}
</script>