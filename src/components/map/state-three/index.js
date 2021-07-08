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
    }
  }
})
