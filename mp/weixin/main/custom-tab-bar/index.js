Component({
	data: {
		activeTab:'home',
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
			const {url,text} = e.currentTarget.dataset
			console.log('url',url,'text',text)
			wx.switchTab({url})
		}
	}
})