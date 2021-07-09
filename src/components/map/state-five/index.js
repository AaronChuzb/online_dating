/*
 * @Author: AaronChu
 * @Date: 2021-07-08 17:20:41
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-07-09 11:17:30
 * @FilePath: \online_dating\src\components\map\state-five\index.js
 */
Component({
  properties: {
  },
  data: {
    fullScreen: false
  },
  /*  observers: {
    isFullScreen: function (isFullScreen) {
      this.setData({
        fullScreen: isFullScreen
      })
    }
  }, */
  methods: {
    toggleFullScreen () {
      this.setData({
        fullScreen: !this.data.fullScreen
      })
    },
    back(){
      wx.navigateBack({
        delta: 0
      })
    }
  }
})
