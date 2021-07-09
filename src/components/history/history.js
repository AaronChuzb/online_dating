/*
 * @Author: AaronChu
 * @Date: 2021-07-07 18:04:31
 * @LastEditTime: 2021-07-09 13:48:41
 * @LastEditors: AaronChu
 * @Description: In User Settings Edit
 * @FilePath: \online_dating\src\components\history\history.js
 */
// components/history/history.js
Component({
  properties: {
    status: { // 状态 1：进行中 2：已完成 3：已取消
      type: Number,
      default: 0
    },
    data: {
      type: Object
    }
  },
  data: {
    pageData: {
      date: '2021年3月22日 14:07',
      outset: '金运路东北侧',
      end: '西关富邦大厦（中山七路）',
      price: 68,
      username: '张三',
      userimg: '../../assets/images/custom.png',
      status: 1
    }
  },
  observers: {
    data: function (data) {
      this.setData({
        pageData: data
      })
    }
  },
  methods: {
    checkDetail () {
      if (this.data.pageData.status === 2 || this.data.pageData.status === 3) {
        wx.navigateTo({
          url: `/pages/orderDetail/orderDetail?status=${this.data.pageData.status}`
        })
      } else {
        wx.navigateTo({
          url: '/pages/map/map'
        })
      }
    }
  }
})
