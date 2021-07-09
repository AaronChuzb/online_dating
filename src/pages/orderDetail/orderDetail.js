/*
 * @Author: AaronChu
 * @Date: 2021-07-07 17:07:14
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-07-09 10:02:53
 * @FilePath: \online_dating\src\pages\orderDetail\orderDetail.js
 */
Page({
  data: {
    status: 0
  },

  onLoad: function (options) {
    // 订单详细页初始状态，此订单只有两个状态，一个取消，一个完成，这个状态未来通过接口来判断，非传值实现
    if (options) {
      this.setData({
        status: options.status
      })
    }
  },
  onShow: function () {

  }
})
