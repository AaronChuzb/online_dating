/*
 * @Author: AaronChu
 * @Date: 2021-07-05 16:08:10
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-07-09 11:03:12
 * @FilePath: \online_dating\src\pages\index\index.js
 */
const app = getApp()
Page({

  data: {
    showDrawer: false,
    userHistoryInfo: {
      numberOfOrder: 0, // 订单数
      totalRevenue: 0, // 总收益
      mileage: 0, // 里程数
    },
    user: {
      nickName: '点击登录',
      avatarUrl: '../../assets/images/ava.png',
      isCertification: false,
      phone: '',
      star: 0
    },
  },

  /**
   * @description: 登录，首先检查全局登录状态变量，然后调用方法登录并保存数据。
   */
  login () {
    if (!app.globalData.isLogin) {
      wx.$login.getUserInfo(() => {
        app.globalData.isLogin = true
        this.getUserInfo()
      })
    }
  },
  /**
   * @description: 首页立即认证按钮，点击前先校验是否登录，登录后触发回调函数。
   */
  certification () {
    wx.$login.status(() => {
      app.globalData.isLogin = true
      wx.navigateTo({
        url: '/pages/certification/certification'
      })
    })
  },
  /**
   * @description: 首页按钮点击去抢单页面
   */
  toTakeOrder () {
    wx.navigateTo({
      url: '/pages/orderTaking/orderTaking'
    })
  },

  getUserInfo(){
    let nickName = `user.nickName`
    let avatarUrl = `user.avatarUrl`
    if(app.globalData.isLogin){
      this.setData({
        [nickName]: wx.getStorageSync('nickName'),
        [avatarUrl]: wx.getStorageSync('avatarUrl')
      })
    } else {
      this.setData({
        [nickName]: '点击登录',
        [avatarUrl]: '../../assets/images/ava.png'
      })
    }
  },
  onLoad: function (options) {

  },
  onShow: function () {
    this.getUserInfo()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
