/*
 * @Author: your name
 * @Date: 2021-07-05 17:46:47
 * @LastEditTime: 2021-07-08 10:42:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \online_dating\src\components\drawer\drawer.js
 */
Component({
  properties: {
    rate: {
      type: Number,
      default: 3
    }
  },
  data: {
    show: false,
    navList: [
      { title: '认证', icon: '../../assets/icon/certification.png', path: '/pages/certification/certification' },
      { title: '钱包', icon: '../../assets/icon/wallet.png', path: '/pages/wallet/wallet' },
      { title: '客服', icon: '../../assets/icon/service.png', path: '' },
      { title: '设置', icon: '../../assets/icon/setting.png', path: '/pages/setting/setting' }
    ],
    star: 3,
    nonestar: 2,
  },
  observers: {
    rate: function (rate) {
      this.setData({
        star: rate,
        nonestar: 5 - rate
      })
    }
  },

  methods: {
    drawer (e) {
      const status = e.currentTarget.dataset.status
      this.setData({
        show: status
      })
    },
    nav (e) {
      const url = e.currentTarget.dataset.url
      wx.navigateTo({
        url: url
      })
    }
  }
})
