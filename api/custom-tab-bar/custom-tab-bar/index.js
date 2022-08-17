Component({
	data: {
		selected:0,
		tabbarList:[
			{
				url:'/pages/index/index',
				text: 'home'
			},
			{
				url:'/pages/logs/logs',
				text: 'logs'
			}
		]
	},
	methods: {
		onTabbarTap(e){
			const {url,index} = e.currentTarget.dataset
			console.log('url',url)
			console.log('index',index)
			wx.switchTab({url})
			// this.getTabBar().setData({
			// 	selected: index
			// })
		}
	}
})