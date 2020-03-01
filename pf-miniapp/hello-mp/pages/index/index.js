// 获取应用实例
const app = getApp()
console.log('app instance:', app);

const after1s = require('../../utils/after1s');

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: async function () {

    console.log(this instanceof Page)
    // this.sayHello();
    wx.login({
      success(res) {
        console.log(res)
      }
    })
    // 增强编译可以支持 async / await
    let res = await after1s();
    console.log(`async/await: ${res}`);

    // wx.env 好像暂时没啥用
    console.log('wx.env:', wx.env)

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  wxLogin: function(e) {
    wx.login({
      success: function(res) {
        // code: "071yA9ep1d0GTj0nKkgp1K1gep1yA9ec"
        // errMsg: "login:ok"
        console.log('success', res);
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session',
          data: {
            code: res.code
          }
        })
      },
      fail: function(res) {
        console.log('fail', res);
      },
      complete: function(res) {},
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo

    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  formSubmit: function (e) {
    console.log(app.globalData);
  },
  onGetPhoneNumber(e) {
    console.log(e.detail)
  },
})
