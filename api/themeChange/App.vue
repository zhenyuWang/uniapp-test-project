<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
    onThemeChange(options) {
      console.log('App onThemeChange', options)
    }
	}
</script>

<style>
	/*每个页面公共css */
</style>
