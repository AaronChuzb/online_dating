// app.js
// import api from './utils/api';
import loginState from './utils/loginState'
// import uploader from './utils/uploader'
App({
  onLaunch() {
    // wx.$api = api
    wx.$login = loginState
    // wx.$uploader = uploader
    const token = wx.getStorageSync('token')
    if(token != ''){
      console.log('[app.js: onLaunch()]:已登录')
      this.globalData.isLogin = true
    } else {
      console.log('[app.js: onLaunch()]:未登录')
      this.globalData.isLogin = false
    }
  },
  globalData: {
    isLogin: false,
  }
})
