//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    
  },
  onLoad: function () {
    const systemInfo = qq.getSystemInfoSync()
    console.log('systemInfo',systemInfo)
  },
  onSwitchTab(){
    console.log('switch tab logs')
    wx.switchTab({url:'/pages/logs/logs'})
  }
})
