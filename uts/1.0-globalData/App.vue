<script>
	export default {
		globalData: {
		  str: 'global data str',
		  num: 123,
		  bool: true,
		},
		onLaunch: function() {
			console.log('App Launch')
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
