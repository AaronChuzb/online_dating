const app = getApp()
Component({
  properties: {
    rate: {
      type: Number,
      default: 3
    },
    userInfo: {
      type: Object
    }
  },
  data: {
    show: false,
    user: {
      nickName: '点击登录',
      avatarUrl: '../../assets/images/ava.png',
      isCertification: false,
      phone: '',
      star: 0
    },
    navList: [
      { title: '认证', icon: '../../assets/icon/certification.png', path: '/pages/certification/certification' },
      { title: '钱包', icon: '../../assets/icon/wallet.png', path: '/pages/wallet/wallet' },
      { title: '客服', icon: '../../assets/icon/service.png', path: '' },
      { title: '设置', icon: '../../assets/icon/setting.png', path: '/pages/setting/setting' }
    ],
    star: 3,
    nonestar: 2
  },
  observers: {
    'rate,userInfo': function (rate, userInfo) {
      this.setData({
        star: rate,
        nonestar: 5 - rate,
        user: userInfo
      })
    }
  },

  methods: {
    login () {
      if (!app.globalData.isLogin) {
        wx.$login.getUserInfo(() => {
          app.globalData.isLogin = true
          this.triggerEvent('login')
        })
      }
    },

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
    },
    getUserInfo () {
      const nickName = 'user.nickName'
      const avatarUrl = 'user.avatarUrl'
      if (app.globalData.isLogin) {
        this.setData({
          [ nickName ]: wx.getStorageSync('nickName'),
          [ avatarUrl ]: wx.getStorageSync('avatarUrl')
        })
      } else {
        this.setData({
          [ nickName ]: '点击登录',
          [ avatarUrl ]: '../../assets/images/ava.png'
        })
      }
    }
  }
})
