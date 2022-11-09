<template>
	<view class="content">
		test onShareAppMessage
		<button type="primary" open-type="share">test share</button>
		<button type="primary" open-type="addToFavorites">addToFavorites</button>
	</view>
</template>

<script lang="ts">
	export default {
		onLoad(){
			console.log('index onLoad')
		},
		onNavigationBarButtonTap(options:any) {
			console.log('onNavigationBarButtonTap', options)
		},
		onAddToFavorites() {
			console.log('onAddToFavorites123123')
			return {
				title: '自定义标题',
				imageUrl: 'http://demo.png',
				query: 'name=xxx&age=xxx',
			}
		},

		onShareAppMessage: () => {
			return {
				title: '自定义分享标题',
				path: '/pages/about/about',
				promise: {}
			}

			// return new Promise(resolve => {
			// 	resolve({
			// 		title: 'title'
			// 	})
			// })

			// const promise = new Promise(resolve => {
			// 	setTimeout(() => {
			// 		resolve({
			// 			title: '自定义转发标题 in promise'
			// 		})
			// 	}, 4000)
			// })
			// return {
			// 	title: '自定义转发标题',
			// 	path: '/page/about/about',
			// 	promise
			// }
		}
	}
</script>
