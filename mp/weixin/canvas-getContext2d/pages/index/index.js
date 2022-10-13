Page({
    onReady() {
      const query = wx.createSelectorQuery()
      query.select('#myCanvas')
        .fields({ node: true, size: true })
        .exec((res) => {
          console.log('res',res)
          const canvas = res[0].node
          console.log('canvas',canvas)
          const ctx = canvas.getContext('2d')
          ctx.fillStyle = '#09c'
          ctx.fillRect(0, 0, 100, 100)
        })
    }
  })
  