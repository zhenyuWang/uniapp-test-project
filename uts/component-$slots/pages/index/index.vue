<template>
	<view class="content">
		<Foo>
				<text>this is text in Foo default slot</text>
				<Bar />
				<Bar />
		</Foo>
		<input placeholder-style="color: red;" placeholder="test placeholder" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
	}
</script>
