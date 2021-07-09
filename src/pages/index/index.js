/*
 * @Author: AaronChu
 * @Date: 2021-07-05 16:08:10
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-07-09 13:53:14
 * @FilePath: \online_dating\src\pages\index\index.js
 */
const app = getApp()
Page({

  data: {
    showDrawer: false,
    userHistoryInfo: {
      numberOfOrder: 0, // 订单数
      totalRevenue: 0, // 总收益
      mileage: 0 // 里程数
    },
    user: {
      nickName: '点击登录',
      avatarUrl: '../../assets/images/ava.png',
      isCertification: false,
      phone: '',
      star: 0
    },
    historyList: [
      { date: '2021年3月22日 11:07', outset: '海港花园', end: '磨碟沙地铁站', price: 11, username: '张三', userimg: '../../assets/images/custom.png', status: 1 },
      { date: '2021年3月22日 15:23', outset: '广州塔', end: '荔湾广场', price: 58, username: '李四', userimg: '../../assets/images/custom.png', status: 2 },
      { date: '2021年3月22日 18:05', outset: '广东省第二人民医院', end: '琶洲塔', price: 15, username: '王五', userimg: '../../assets/images/custom.png', status: 3 },
    ]
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

  getUserInfo () {
    const nickName = 'user.nickName'
    const avatarUrl = 'user.avatarUrl'
    if (app.globalData.isLogin) {
      this.setData({
        [ nickName ]: wx.getStorageSync('nickName'),
        [ avatarUrl ]: wx.getStorageSync('avatarUrl')
      })
    } else {
      this.setData({
        [ nickName ]: '点击登录',
        [ avatarUrl ]: '../../assets/images/ava.png'
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
