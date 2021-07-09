/*
 * @Author: your name
 * @Date: 2021-07-08 14:50:53
 * @LastEditTime: 2021-07-09 11:08:58
 * @LastEditors: AaronChu
 * @Description: In User Settings Edit
 * @FilePath: \online_dating\src\components\map\state-three\index.js
 */
// components/map/header/index.js
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
    toLocation () {
      this.triggerEvent('location')
    },
    arrival(){
      this.triggerEvent('arrival')
    }
  }
})
