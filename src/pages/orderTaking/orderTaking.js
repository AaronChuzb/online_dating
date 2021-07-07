/*
 * @Author: AaronChu
 * @Date: 2021-07-07 15:34:06
 * @LastEditTime: 2021-07-07 16:45:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \online_dating\src\pages\orderTaking\orderTaking.js
 */
// pages/orderTaking/orderTaking.js
let startPoint
Page({
  data: {
    address: '西关富邦大厦（中山七路）',
    windowHeight: 0,
    windowWidth: 0,
    buttonTop: 500,
    buttonLeft: 10
  },
  buttonStart: function (e) {
    startPoint = e.touches[ 0 ]
  },
  buttonMove: function (e) {
    const endPoint = e.touches[ e.touches.length - 1 ]
    const translateX = endPoint.clientX - startPoint.clientX
    const translateY = endPoint.clientY - startPoint.clientY
    startPoint = endPoint
    let buttonTop = this.data.buttonTop + translateY
    let buttonLeft = this.data.buttonLeft + translateX
    // 判断是移动否超出屏幕
    if (buttonLeft + 50 >= this.data.windowWidth) {
      buttonLeft = this.data.windowWidth - 50
    }
    if (buttonLeft <= 0) {
      buttonLeft = 0
    }
    if (buttonTop <= 0) {
      buttonTop = 0
    }
    if (buttonTop + 50 >= this.data.windowHeight) {
      buttonTop = this.data.windowHeight - 50
    }
    this.setData({
      buttonTop: buttonTop,
      buttonLeft: buttonLeft
    })
  },
  buttonEnd: function (e) {

  },
  onLoad: function (options) {
    const that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      }
    })
  }
})
