/*
 * @Author: your name
 * @Date: 2021-07-08 14:50:53
 * @LastEditTime: 2021-07-08 15:10:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \online_dating\src\components\map\header\index.js
 */
// components/map/header/index.js
Component({
  properties: {
    isFullScreen: {
      type: Boolean,
      default: false
    }
  },
  data: {
    fullScreen: false,
  },
 /*  observers: {
    isFullScreen: function (isFullScreen) {
      this.setData({
        fullScreen: isFullScreen
      })
    }
  }, */
  methods: {
    toggleFullScreen(){
      this.setData({
        fullScreen: !this.data.fullScreen
      })
    },
    toLocation(){
      let mpCtx = wx.createMapContext("map");
      mpCtx.moveToLocation();
    },
    callPhone(){
      wx.makePhoneCall({
        phoneNumber: '10086'
      })
     },
    cancelOrder(){
      var that = this
      wx.showModal({
        content: '确定取消订单？',
        success (res) {
          if (res.confirm) {
            
          }
        }
      })
    }, 
    cancel(){
      this.triggerEvent('cancel')
    },
    arrival(){
      this.triggerEvent('arrival')
    }
  }
})
