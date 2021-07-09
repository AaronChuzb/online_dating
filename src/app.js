/*
 * @Author: AaronChu
 * @Date: 2021-07-05 16:04:43
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-07-09 15:26:08
 * @FilePath: \online_dating\src\app.js
 */
/*
 *                        _oo0oo_
 *                       o8888888o
 *                       88" . "88
 *                       (| -_- |)
 *                       0\  =  /0
 *                     ___/`---'\___
 *                   .' \\|     |// '.
 *                  / \\|||  :  |||// \
 *                 / _||||| -:- |||||- \
 *                |   | \\\  - /// |   |
 *                | \_|  ''\---/''  |_/ |
 *                \  .-\__  '-'  ___/-. /
 *              ___'. .'  /--.--\  `. .'___
 *           ."" '<  `.___\_<|>_/___.' >' "".
 *          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *          \  \ `_.   \_ __\ /__ _/   .-` /  /
 *      =====`-.____`.___ \_____/___.-`___.-'=====
 *                        `=---='
 *
 *
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *            佛祖保佑       永不宕机     永无BUG
 */

// app.js
// import api from './utils/api';
import loginState from './utils/loginState'
// import uploader from './utils/uploader'
App({
  onLaunch () {
    const that = this
    // wx.$api = api
    wx.$login = loginState
    // wx.$uploader = uploader
    // const token = wx.getStorageSync('token')
    // 调试需要
    const token = wx.getStorageSync('nickName')
    console.log()
    if (token !== '') {
      console.log('[app.js: onLaunch()]:已登录')
      this.globalData.isLogin = true
    } else {
      console.log('[app.js: onLaunch()]:未登录')
      this.globalData.isLogin = false
    }
    
  },
  openLocationUpdate(){
    // 监听地理位置数据，等待上报
    wx.startLocationUpdate({
      success (res) {
        const locationChange = res => {
          that.globalData.location = {
            latitude: res.latitude,
            longitude: res.longitude,
            speed: res.speed
          }
        }
        wx.onLocationChange(locationChange)
      },
      fail(res) {
        console.log('开启后台定位失败', res)
      }
    })
  },
  globalData: {
    isLogin: false,
    location: {
      latitude: 0,
      longitude: 0,
      speed: 0
    }
  }
})
