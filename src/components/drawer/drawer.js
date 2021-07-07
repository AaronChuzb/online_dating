/*
 * @Author: your name
 * @Date: 2021-07-05 17:46:47
 * @LastEditTime: 2021-07-07 11:52:08
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \online_dating\src\components\drawer\drawer.js
 */
Component({
  properties: {

  },
  data: {
    show: false,
    navList: [
      { title: '认证', icon: '../../assets/icon/certification.png', path: '/pages/certification/certification' },
      { title: '钱包', icon: '../../assets/icon/wallet.png', path: '/pages/wallet/wallet' },
      { title: '客服', icon: '../../assets/icon/service.png', path: '' },
      { title: '设置', icon: '../../assets/icon/setting.png', path: '/pages/setting/setting' }
    ]
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
