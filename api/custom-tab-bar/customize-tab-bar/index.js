Component({
	data: {
		selected: 0,
		textColor: "#fff",
		selectedColor: "#00ff00",
		list:[
			{
				pagePath:'/pages/index/index',
				name: 'home'
			},
			{
				pagePath:'/pages/logs/logs',
				name: 'logs'
			}
		]
	},
	methods: {
		onTabbarTap(e) {
			const url = e.target.dataset.url
			console.log('支付宝 url',url)
			my.switchTab({
				url
			});
		},
	}
})