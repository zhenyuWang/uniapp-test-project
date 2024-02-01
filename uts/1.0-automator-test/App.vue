<script>
	export default {
		onLaunch: function(options) {
			console.log('App Launch', options)
		},
		onShow: function(options) {
			console.log('App Show', options)
			var args = plus.runtime.arguments;
			if (args) {
				console.log('args------', args)
			}
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>