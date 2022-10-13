Page({
    onReady() {
      const query = wx.createSelectorQuery()
      query.select('.myCanvas')
        .node(true)
        .exec((res) => {
            console.log('res',res)
            const canvas = res[0].node
            console.log('canvas',canvas)
            const ctx = canvas.getContext('2d')
            console.log('ctx',ctx)
            ctx.fillStyle = 'red'
            ctx.fillRect(0, 0, 100, 100)
          })
    }
  })
  