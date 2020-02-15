// 判断是否有权限
function getSetting(concreteScope) {
  return new Promise((resolve, reject) => {
    const scope = `scope.${concreteScope}`;
    wx.getSetting({
      success:(res) => {
        const hasAuth = res.authSetting[scope];
        resolve(!!hasAuth);
      },
      fail:() => reject()
    })
  });
}

// 不能用于 userInfo
function authorize(concreteScope) {
  const scope = `scope.${concreteScope}`;
  return getSetting(concreteScope)
          .then(hasAuth => {
            return new Promise((resolve, reject) => {
              if (hasAuth) {
                resolve();
              } else {
                // 提示用户获取权限
                wx.authorize({
                  scope,
                  // 第一次提示 + 点击确认
                  success:() => resolve(),
                  // 第二次不会提示, 直接返回没有权限
                  fail:() => reject()
                })
              }
            });
          })
          .catch(_ => Promise.reject())
}

// 获取用户信息
function getUserInfo() {
  return getSetting('userInfo')
          .then(hasAuth => {
            if (hasAuth) {
              return new Promise((resolve, reject) => {
                wx.getUserInfo({
                  success: (res) => resolve(res),
                  fail: () => reject()
                })
              })
            } else {
              return Promise.reject();
            }
          })
          .catch(_ => Promise.reject())
}
    
export default {
  getSetting,
  getUserInfo,
  authorize
}
