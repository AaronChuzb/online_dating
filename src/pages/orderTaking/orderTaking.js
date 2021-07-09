/*
 * @Author: AaronChu
 * @Date: 2021-07-07 15:34:06
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-07-09 11:38:57
 * @FilePath: \online_dating\src\pages\orderTaking\orderTaking.js
 */
// 不参与UI刷新的数据放在此处，减少setData次数优化性能。
let startPoint
let windowHeight
let windowWidth
Page({
  data: {
    address: '西关富邦大厦（中山七路）',
    buttonTop: 500,
    buttonLeft: 10
  },
  /**
   * @description: 按钮移动监听开始
   * @param {Object} e
   */
  buttonStart: function (e) {
    startPoint = e.touches[ 0 ]
  },
  /**
   * @description: 按钮移动中
   * @param {Object} e
   */
  buttonMove: function (e) {
    const endPoint = e.touches[ e.touches.length - 1 ]
    const translateX = endPoint.clientX - startPoint.clientX
    const translateY = endPoint.clientY - startPoint.clientY
    startPoint = endPoint
    let buttonTop = this.data.buttonTop + translateY
    let buttonLeft = this.data.buttonLeft + translateX
    // 判断是移动否超出屏幕
    if (buttonLeft + 50 >= windowWidth) {
      buttonLeft = windowWidth - 50
    }
    if (buttonLeft <= 0) {
      buttonLeft = 0
    }
    if (buttonTop <= 0) {
      buttonTop = 0
    }
    if (buttonTop + 50 >= windowHeight) {
      buttonTop = windowHeight - 50
    }
    this.setData({
      buttonTop: buttonTop,
      buttonLeft: buttonLeft
    })
  },

  /**
   * @description: 移动结束，暂留此函数。
   * @param {Object} e
   */
  buttonEnd: function (e) {

  },
  onLoad: function (options) {
    // 获取系统的宽高
    wx.getSystemInfo({
      success: function (res) {
        // 不参与页面UI刷新，不放入data中
        windowHeight = res.windowHeight
        windowWidth = res.windowWidth
      }
    })
  }
})
