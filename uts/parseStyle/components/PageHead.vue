<template>
	<view>
		<text>this is page Head</text>
		<text>title: {{title}}</text>
	</view>
</template>

<script>
	export default {
		name:"pageHead",
		props: {
			title: {
				type: String
			}
		}
	}
</script>
