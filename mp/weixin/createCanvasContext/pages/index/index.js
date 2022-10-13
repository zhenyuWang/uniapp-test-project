// index.js
// 获取应用实例
Page({
  onShow(){
    const ctx = wx.createCanvasContext('myCanvas')
    console.log('ctx',ctx)
    ctx.fillStyle = '#09c'
    ctx.fillRect(0,0,100,100)
    ctx.draw()
  }
})
