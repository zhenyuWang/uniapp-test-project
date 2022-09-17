/**
 * @file index.js
 * @author swan
 */
const app = getApp()

Page({
    data: {
        userInfo: {},
        hasUserInfo: false,
        canIUse: false
    },
    // 监听页面加载的生命周期函数
    onLoad() {
        this.setData({
            canIUse: swan.canIUse('button.open-type.getUserInfo')
        });
    },
    getUserInfo(e) {
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        });
    },
    openLocation(){
        swan.openLocation({
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
        swan.chooseLocation({
          success(){
            console.log('chooseLocation success');
          },
          fail(err){
              console.log('chooseLocation fail',err);
          }
        })
    },
    handleLogin(){
        if(swan.canIUse('getLoginCode')){
            swan.getLoginCode({
                success(res) {
                    console.log('handleLogin success',res)
                },
                fail(err){
                    console.log('handleLogin fail',err);

                }

            });
        } else {
            //在低版本基础库中'swan.getLoginCode'不可用时进行兼容

        }
    }
})
