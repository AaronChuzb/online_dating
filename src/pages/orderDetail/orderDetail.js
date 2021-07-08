/*
 * @Author: AaronChu
 * @Date: 2021-07-07 17:07:14
 * @LastEditTime: 2021-07-08 10:50:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \online_dating\src\pages\orderDetail\orderDetail.js
 */
// pages/orderDetail/orderDetail.js
Page({
  data: {
    status: 0
  },

  onLoad: function (options) {
    if(options){
      this.setData({
        status: options.status
      })
    }
  },
  onShow: function () {

  }
})
