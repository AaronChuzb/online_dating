/*
 * @Author: AaronChu
 * @Date: 2021-07-05 16:08:10
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-07-08 18:11:26
 * @FilePath: \online_dating\src\pages\index\index.js
 */
const app = getApp()
Page({

  data: {
    showDrawer: false,
    userInfoList: [
      { title: '订单数', star: 0 },
      { title: '总收益', star: 0 },
      { title: '总里程', star: 0 }
    ]
  },

  login () {
    if (!app.globalData.isLogin) {
      wx.$login.getUserInfo(() => {
        console.log('我是回调函数')
      })
    }
  },
  certification () {
    wx.$login.status(() => {
      wx.navigateTo({
        url: '/pages/certification/certification'
      })
    })
  },
  // 去抢单页面
  toTakeOrder () {
    wx.navigateTo({
      url: '/pages/orderTaking/orderTaking'
    })
  },
  onLoad: function (options) {

  },
  onShow: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
