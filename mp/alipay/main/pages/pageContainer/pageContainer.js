Page({
  data: {
    showPageContainer:false
  },
  onLoad() {},

  changeShowPageContainer(){
    this.setData({
      showPageContainer:!this.data.showPageContainer
    })
  },
  onBeforeEnter(){
    console.log('page-container onBeforeEnter')
  },
  onEnter(){
    console.log('page-container onEnter')
  },
  onAfterEnter(){
    console.log('page-container onAfterEnter')
  },
  onBeforeLeave(){
    console.log('page-container onBeforeLeave')
  },
  onLeave(){
    console.log('page-container onLeave')
  },
  onAfterLeave(){
    console.log('page-container onAfterLeave')
  },
  onClickOverlay(){
    console.log('page-container onClickOverlay')
  }
});
