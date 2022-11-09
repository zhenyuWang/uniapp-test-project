<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			const list = [ {
				index:0,
				pagePath: "/pages/user/user",
				iconPath: "static/logo.png",
				selectedIconPath: "static/logo.png",
				text: "user"
			},{
				index:1,
				pagePath: "/pages/index/index",
				iconPath: "static/logo.png",
				selectedIconPath: "static/logo.png",
				text: "index"
			}, {
				index:2,
				pagePath: "/pages/about/about",
				iconPath: "static/logo.png",
				selectedIconPath: "static/logo.png",
				text: "about"
			}, {
				index:3,
				pagePath: "/pages/setting/setting",
				iconPath: "static/logo.png",
				selectedIconPath: "static/logo.png",
				text: "setting"
			}]
			list.forEach((item,index) => {
				uni.setTabBarItem(item)
			})
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
