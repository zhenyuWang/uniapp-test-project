<script>
	export default {
		onLaunch: function () {
		  console.log('App Launch')
		},
		onShow: function () {
		  console.log('App Show')
		},
		onHide: function () {
		  console.log('App Hide')
		},
		onLastPageBackPress: function (){
		  console.log('App LastPageBackPress')
			uni.exit()
		},
	}
</script>

<style>
	/*每个页面公共css */
</style>
