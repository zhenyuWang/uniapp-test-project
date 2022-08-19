const app = getApp()

// test-page.js

Page({
  data: {
    inputVal: '',
    inputNum: 0,
  },
  handleInput(e){
      this.setData({
          inputVal:this.data.inputVal+e.detail.value,
          inputNum:this.data.inputNum+1
      })
  },
  onLoad() {
    
  },
})
