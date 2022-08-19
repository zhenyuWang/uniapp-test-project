// pages/scroll-view.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        page:1,
        list:[],
        loading:false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getdata()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },
    getdata: function() {
        this.setData({loading:true})
        console.log('getdata page : ',this.data.page);
        const self = this
        // 模拟 api 请求刷新数据
        setTimeout(() => {
            if(self.page === 1){
                this.setData({list:[1,2,3,4,5,6,7,8,9,10]})
            }else{
                const _list = this.data.list
                for(let i= 1;i<11;i++){
                    _list.push(i+(this.data.page-1)*10)
                }
                this.setData({list:_list})
            }
            this.setData({page:this.data.page+1,loading:false})
        }, 100);
    },
    loadmore: function() {
        if (this.data.loading) {
            return;
        }
        console.log("loadmore")
        this.getdata();
    },
    clickItem(text){
        wx.showToast({
          title: 'item clicked'+text,
        })
    }
})