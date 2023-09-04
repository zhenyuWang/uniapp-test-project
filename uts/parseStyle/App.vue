<script>
	export default {
		globalData: {
			text: 'text'
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			test() {
				console.warn('app test')
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>