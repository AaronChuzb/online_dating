/*
 * @Author: AaronChu
 * @Date: 2021-07-07 09:26:52
 * @LastEditTime: 2021-07-07 12:00:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \online_dating\pages\wallet\wallet.js
 */
// pages/wallet/wallet.js
import {
  formatDate
} from '../../utils/util'
Page({
  data: {
    page: 1, // 当前数据页数
    hasMore: true, // 下一页是否有更多，默认true，第一次请求后数据长度小于接口返回指定的一页长度后改成false，阻止请求发生，每次加载数据都会判断一次
    startTime: '2021-07-01', // 筛选开始时间
    endTime: '', // 筛选结束时间
    money: 1980,
    orderList: [] // 订单列表
  },
  // 去提现页
  gotoWithdrawal () {
    wx.navigateTo({
      url: '/pages/withdrawal/withdrawal'
    })
  },
  // 时间选择公共方法
  timeChange (e) {
    const type = e.currentTarget.dataset.type
    type === 'startTime'
      ? this.setData({
        startTime: e.detail.value
      })
      : this.setData({
        endTime: e.detail.value
      })
  },

  /**
   * @description: 固定获取页面数据函数，上拉加载和下拉刷新共用，通过type区分
   * @param {String} type 获取数据类型 more: 上拉加载 refresh：下拉刷新
   * @param {Number} page 数据分页
   */
  getData (type, page) {
    // TODO: api对接
    // 刷新
    if (type === 'refresh') {

    } else if (type === 'more') {
      
    }
  },

  onLoad (options) {
    this.setData({
      endTime: formatDate(new Date())
    })
  }
})
