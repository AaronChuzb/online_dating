/*
 * @Author: AaronChu
 * @Date: 2021-07-07 09:26:52
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-07-09 10:27:06
 * @FilePath: \online_dating\src\pages\setting\setting.js
 */
const app = getApp()

Page({
  data: {

  },
  /**
   * @description: 退出登录，弹窗确认并清除本地缓存。
   */
  logout () {
    wx.showModal({
      content: '退出登录将清除您缓存的数据。',
      success: function (res) {
        if (res.confirm) {
          wx.clearStorage({
            success: (result) => {
              app.globalData.isLogin = false
              wx.showToast({
                title: '退出登录成功',
                icon: 'none'
              })
              setTimeout(() => {
                wx.redirectTo({
                  url: '/pages/index/index'
                })
              }, 800)
            }
          })
        }
      }
    })
  },
  onLoad: function (options) {

  },
  onShow: function () {

  }
})
