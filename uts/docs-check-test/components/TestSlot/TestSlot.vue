<template>
	<view>
		<slot msg='default slot msg'></slot>
		<slot name="header" msg="header slot msg" :age='18'></slot>
	</view>
</template>

<script lang="uts">
	export default {

	}
</script>

<style>

</style>