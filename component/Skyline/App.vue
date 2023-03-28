<script>
	import { installRouteBuilder } from './utils/custom-route/custom-route.js'
	export default {
		onLaunch: function() {
			console.log('App Launch')
			installRouteBuilder()
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
