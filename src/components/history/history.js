/*
 * @Author: AaronChu
 * @Date: 2021-07-07 18:04:31
 * @LastEditTime: 2021-07-08 10:51:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \online_dating\src\components\history\history.js
 */
// components/history/history.js
Component({
  properties: {
    status: { // 状态 1：进行中 2：已完成 3：已取消
      type: Number,
      default: 0
    }
  },
  data: {
    state: 0
  },
  observers: {
    status: function (status) {
      this.setData({
        state: status
      })
    }
  },
  methods: {
    checkDetail () {
      if (this.data.state === 2 || this.data.state === 3) {
        wx.navigateTo({
          url: `/pages/orderDetail/orderDetail?status=${this.data.state}`
        })
      } else {
        wx.navigateTo({
          url: '/pages/map/map'
        })
      }
    }
  }
})
