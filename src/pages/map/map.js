/*
 * @Author: AaronChu
 * @Date: 2021-07-08 11:05:54
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-07-09 18:05:19
 * @FilePath: \online_dating\src\pages\map\map.js
 */
import { authLocation } from '../../utils/util.js'
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
    longitude: 0
  },
  /**
   * @description: 回到地图中心点，用户的位置
   */
  toLocation () {
    const mapCtx = wx.createMapContext('map')
    mapCtx.moveToLocation()
  },
  /**
   * @description: 取消订单，取消前先弹窗
   */
  cancelOrder () {
    const that = this
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
  /**
   * @description: 拨打电话
   */
  callPhone () {
    wx.makePhoneCall({
      phoneNumber: '10086'
    })
  },
  /**
   * @description: 到达用户接驾地点
   */
  arrival () {
    this.setData({
      state: this.data.state + 1
    })
  },
  /**
   * @description: 输入尾号页面，点击返回。
   */
  cancelInput () {
    this.setData({
      state: 1
    })
  },
  /**
   * @description: 检查并显示输入的尾号 TODO: 尾号校验
   * @param {Object} e
   */
  checkPhone (e) {
    let phone = ''
    e.detail.forEach(item => {
      phone = phone + item
    })
    wx.showToast({
      title: '手机尾号是' + phone,
      icon: 'none'
    })
    this.setData({
      state: 3
    })
  },
  inputMoney (e) {
    wx.showToast({
      title: e.detail,
      icon: 'none'
    })
    this.setData({
      state: 5
    })
  },
  onLoad: function (options) {

  },
  onShow: function () {
    const that = this
    // 获取用户初始地址
    wx.getLocation({
      type: 'gcj02',
      success (res) {
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      },
      fail () {
        authLocation()
      }
    })
  }
})
