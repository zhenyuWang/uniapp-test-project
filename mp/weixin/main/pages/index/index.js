// index.js
// 获取应用实例
const app = getApp()

Page({
    data: {
        text: 'test',
        latitude: 39.909,
        longitude: 116.39742,
        markers: [{
            id: 1,
            latitude: 39.9085,
            longitude: 116.39747,
            width: 40,
            height: 40,
            iconPath: 'https://z3.ax1x.com/2020/12/07/Dv6FiT.jpg',
        }, {
            id: 2,
            latitude: 39.90,
            longitude: 116.4,
            width: 40,
            height: 40,
            iconPath: 'https://z3.ax1x.com/2020/12/07/Dv6FiT.jpg',
        }],
        avatarUrl: ''
    },
    onLoad() {
        // wx.setStorage({
        //     key:"test-storage-key",
        //     data:"test-storage-value"
        // })
    },
    onReady() {
        wx.getStorage({
            key: "test-storage-key",
            success(res) {
                console.log('res', res.data);
            }
        })
        const ws = new WeakSet()
        const foo = {}
        ws.add(foo)
        console.log('weakSet',ws);
    },
    onShow() {
        this.getTabBar().setData({
            activeTab: 'home'
        })
    },
    handleNicknameBlur(e){
        console.log('test nickname',e.detail.value)
    },
    onMapTap() {
        console.log('map tap')
    },
    onMarkerTap() {
        console.log('marker tap')
    },
    nameFocus() {
        console.log('name focus');
    },
    nameBlur() {
        console.log('name blur');
    },
    pasFocus() {
        console.log('password focus');
    },
    pasBlur() {
        console.log('password blur');
    },
    chooseAvatarCallback(res) {
        console.log('choose avatar callback', res)
        this.setData({
            'avatarUrl': res.detail.avatarUrl
        })
    },
    openLocation() {
        wx.openLocation({
            latitude: 40.04,
            longitude: 116.27,
            success(){
                console.log('openLocation success');
            },
            fail(err){
                console.log('openLocation fail',err);
            }
        })
    },
    chooseLocation(){
        wx.chooseLocation({
          success(){
            console.log('chooseLocation success');
          },
          fail(err){
              console.log('chooseLocation fail',err);
          }
        })
    }
})