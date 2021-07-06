// pages/index/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showDrawer: false,
    userInfoList: [
      { title: "订单数", star: 0 },
      { title: "总收益", star: 0 },
      { title: "总里程", star: 0 },
    ]
  },
  
  login(){
    if(!app.globalData.isLogin){
      wx.$login.getUserInfo(()=>{
        console.log("我是回调函数")
      })
    }
  },
  certification(){
    wx.$login.status(() => {
      wx.navigateTo({
        url: '/pages/certification/certification',
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})