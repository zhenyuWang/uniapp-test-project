<template>
	<view>
		<text>{{title}}</text>
	</view>
</template>

<script>
  import pagesJson from '/pages.json'
  import {pages} from '/pages.json'
	export default {
		data() {
			return {
				title: 'Hello1'
			}
		},
		onLoad() {
      console.log('pagesJson',pagesJson)
      console.log('pages',pages)
		}
	}
</script>
