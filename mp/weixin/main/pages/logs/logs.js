Page({
  data: {
    textareaValue:'',
    textareaOnInput:'firstInput'
  },
  onLoad(){
      this.setData({textareaOnInput:'nextInput'})
  },
  firstInput(){
    console.log('firstInput')
  },
  nextInput(){
      console.log('nextInupt');
  }
})
