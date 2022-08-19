const normalCallout = {
    id: 1,
    latitude: 23.098994,
    longitude: 113.322520,
    iconPath: '/images/location.png',
    width:30,
    height:40,
    callout: {
      content: '文本内容',
      color: '#ff0000',
      fontSize: 14,
      borderWidth: 2,
      borderRadius: 10,
      borderColor: '#000000',
      bgColor: '#fff',
      padding: 5,
      display: 'ALWAYS',
      textAlign: 'center'
    },
    // label: {
    //   content: 'label 文本',
    //   fontSize: 24,
    //   textAlign: 'center',
    //   borderWidth: 1,
    //   borderRadius: 5,
    //   bgColor: '#fff',
    //   padding: 5
    // }
  }

const customCallout1 = {
    id: 2,
    latitude: 23.097994,
    longitude: 113.323520,
    iconPath: '/images/location.png',
    width:30,
    height:40,
    customCallout: {
      anchorY: 0,
      anchorX: 0,
      display: 'ALWAYS'
    },
  }
  
  const customCallout2 = {
    id: 3,
    latitude: 23.096994,
    longitude: 113.324520,
    iconPath: '/images/location.png',
    width:30,
    height:40,
    customCallout: {
      anchorY: 10,
      anchorX: 0,
      display: 'ALWAYS',
    },
  }
  
  const customCallout3 = {
    id: 4,
    latitude: 23.095994,
    longitude: 113.325520,
    iconPath: '/images/location.png',
    width:30,
    height:40,
    customCallout: {
      anchorY: 0,
      anchorX: 20,
      display: 'ALWAYS',
    },
  }
  
  const allMarkers = [normalCallout, customCallout1, customCallout2, customCallout3]
  
  Page({
    data: {
      latitude: 23.096994,
      longitude: 113.324520,
      markers: [],
      customCalloutMarkerIds: [],
      num: 1
    },
    onReady: function (e) {
      this.mapCtx = wx.createMapContext('myMap')
    },
    addGroundOverlay(){
        console.log('addGroundOverlay',this.mapCtx)
        this.mapCtx.addGroundOverlay({
            id:'testAddGroundOverlayId',
            // id:123123123,
            src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F0c%2Fef%2Fa0%2F0cefa0f17b83255217eddc20b15395f9.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661340039&t=59e041cc922f55fd47ab1655cc7104ad',
            bounds: {
                southwest:{
                    longitude: 116.23,
                    latitude: 39.85
                },
                northeast:{
                    longitude: 116.55,
                    latitude: 39.97
                }
            },
            complete(res){
                console.log('addGroundOverlay complete',res)
            }
        })
    },
    addMarker() {
      const markers = allMarkers
      this.setData({
        markers,
        customCalloutMarkerIds: [2,3,4],
      })
    },
  
    removeMarker() {
      this.setData({
        markers: [],
        customCalloutMarkerIds: []
      })
    },
  
    changeMarkerId() {
      const customCalloutMarkerIds = this.data.customCalloutMarkerIds.slice()
      const top = customCalloutMarkerIds.shift()
      customCalloutMarkerIds.push(top)
  
      this.setData({
        customCalloutMarkerIds
      })
    },
    markertap(e) {
      console.log('@@@ markertap', e)
    },
    callouttap(e) {
      console.log('@@@ callouttap', e)
    },
    labeltap(e) {
      console.log('@@@ labeltap', e)
    },
    translateMarker: function () {
      const length = this.data.markers.length
      if (length === 0) return
  
      const index = Math.floor(Math.random() * length)
      const markers = this.data.markers
      const marker = markers[index]
      marker.latitude = marker.latitude + 0.002
      marker.longitude = marker.longitude + 0.002
      const that = this
      this.mapCtx.translateMarker({
        markerId: marker.id,
        duration: 1000,
        destination: {
          latitude: marker.latitude,
          longitude: marker.longitude
        },
        animationEnd() {
          that.setData({markers})
          console.log('animation end')
        },
        complete(res) {
          console.log('translateMarker', res)
        }
      })
    },
    changeContent() {
      const num = Math.floor(Math.random() * 10)
      this.setData({num})
    }
  })