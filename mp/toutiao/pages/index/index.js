const app = getApp()

Page({
  data: {
    videoPath: "",
  },
  onLoad: function () {
    console.log('Welcome to Mini Code')
  },
  // onUploadDouyinVideo 和 onLoad 等其他钩子同级
  onUploadDouyinVideo(uploadOptions) {
    // 通过 uploadOptions 可以拿到 button target 上的一些信息
    // 如这里的 demo 可以拿到 id: 1，hello: world
    console.log("onUploadDouyinVideoOptions: ", uploadOptions);

    // 返回值（文档中称之为 uploadParams）将被当作发布参数传入视频发布器，发布视频
    return {
      videoPath: this.data.videoPath,
      stickersConfig: {
        text: [
          {
            text: "这是文字贴图",
            color: "#ffffff",
            fontSize: 28,
            scale: 1,
            x: 0.5,
            y: 0.5,
          },
        ],
      },
      success: function (callback) {
        // 只有当发布成功且挂载成功时，success callback 才会有 videoId
        console.log("success: ", callback);
      },
      fail: function (callback) {
        console.log("fail: ", callback);
      },
      complete: function (callback) {
        console.log("complete: ", callback);
      },
    };
  },
  chooseVideo() {
    console.log('chooseVideo 111111111111')
    tt.chooseVideo({
      sourceType: ["album", "camera"],
      compressed: true,
      success: (res) => {
        this.setData({
          videoPath: res.tempFilePath,
        });
      },
      fail: (err) => {
        let errType = err.errMsg.includes("chooseVideo:fail cancel")
          ? "取消选择"
          : "选择失败";
        tt.showModal({
          title: errType,
          content: err.errMsg,
          showCancel: false,
        });
      },
    });
  },
  openLocation(){
    tt.openLocation({
      latitude: '40.04',
      longitude: '116.27',
      success() {
        console.log('openLocation success');
      },
      fail(err) {
        console.log('openLocation fail', err);
      }
    })
  },
  chooseLocation(){
      tt.chooseLocation({
        success(){
          console.log('chooseLocation success');
        },
        fail(err){
            console.log('chooseLocation fail',err);
        }
      })
  }
})
