// router.push => wx.navigateTo || wx.switchTab
// router.replace => wx.redirectTo
// router.go  => wx.navigateBack
// router.reLaunch => wx.reLaunch
// 

router.beforeEach((to, from, next) => {
  /* 必须调用 `next` */
})

function push() {

}

function replace() {

}

function go() {

}

function reLaunch() {

}

module.exports = {
  push,
  replace,
  go,
  reLaunch
};