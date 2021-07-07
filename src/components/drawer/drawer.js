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
      wx, wx.navigateTo({
        url: url
      })
    }
  }
})
