<template>
	<view class="content">
		<button hover-class='button-hover' class="test-button">goTest</button>
		<button hover-class='button-hover' type="primary">goTest</button>
		<button hover-class='button-hover' type="warn">goTest</button>
		<Popup></Popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
			}
		},
	}
</script>

<style>
	.test-button{
		background-color: aqua;
	}
	.test-button[disabled]{
		background-color: red!important;
	}
	.button-hover {
		background-color: red;
	}
</style>

