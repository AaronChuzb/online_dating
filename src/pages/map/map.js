/*
 * @Author: your name
 * @Date: 2021-07-08 11:05:54
 * @LastEditTime: 2021-07-08 15:25:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \online_dating\src\pages\map\map.js
 */
// pages/map/map.js
const app = getApp()
Page({
  data: {
    state: 1, // 页面状态，页面四种状态控制变量，
              // 1：刚接到单但是还没接到乘客，导航去乘客位置，
              // 2：到达乘客位置乘客上车要求输入尾号，
              // 3：行程中，
              // 4：到达目的地，输入打表金额，
              // 5：行程结束
              // 0：行程取消
    
    latitude: 0,
    longitude: 0,
    _locationChangeFn: (res) =>{
      console.log('location change', res)
    }
  },
  toLocation(){
    let mapCtx = wx.createMapContext("map")
    mapCtx.moveToLocation()
  },
  cancelOrder(){
    var that = this
    wx.showModal({
      content: '确定要取消订单',
      success (res) {
        if (res.confirm) {
          that.setData({
            state: 0
          })
        }
      }
    })
  },
  callPhone(){
    wx.makePhoneCall({
      phoneNumber: '10086',
    })
  },
  arrival(){
    console.log("到达")
    this.setData({
      state: this.data.state + 1
    })
  },
  cancelInput(){
    this.setData({
      state: 1
    })
  },
  checkPhone(e){
    var phone = ''
    e.detail.forEach(item=>{
      phone = phone + item
    })
    wx.showToast({
      title: '手机尾号是'+ phone,
    })
    this.setData({
      state: 3
    })
  },
  
  onLoad: function (options) {
    wx.onLocationChange(this.data._locationChangeFn)
    var that = this
    wx.getLocation({
      type: 'gcj02',
      success (res) {
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
        })
      }
    })
  },
  onShow: function () {

  }
})