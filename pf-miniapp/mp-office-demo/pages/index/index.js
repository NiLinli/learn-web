//index.js
//获取应用实例
const app = getApp()
console.log(app)

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
  onLoad: function () {
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
    console.log(e)
    let formId = e.detail.formId;
    this.dealFormIds(formId); //处理保存推送码
    console.log('form发生了submit事件，推送码为：', formId)

    console.log(app.globalData);
  },
  dealFormIds: function (formId) {
    let formIds = app.globalData.gloabalFomIds;//获取全局数据中的推送码gloabalFomIds数组
    if (!formIds) formIds = [];
    let data = {
      formId: formId,
      expire: parseInt(new Date().getTime() / 1000) + 604800 //计算7天后的过期时间时间戳
    }
    formIds.push(data);//将data添加到数组的末尾
    app.globalData.gloabalFomIds = formIds; //保存推送码并赋值给全局变量
  },
})
