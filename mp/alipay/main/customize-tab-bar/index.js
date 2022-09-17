Component({
	data: {
		selected: 0,
    textColor: "blue",
    selectedColor: "green",
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
		tap(e) {
      const data = e.target.dataset;
      my.switchTab({
        url: data.value.pagePath,
      });
    },
	}
})