/*
 * @Author: AaronChu
 * @Date: 2021-07-05 16:34:16
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-07-09 15:56:09
 * @FilePath: \online_dating\src\utils\util.js
 */

/**
 * @description: 传入现在的时间返回年月日
 * @param {Date} dateTime newDate()
 * @return {String} 'year-month-day'
 */
function formatDate(dateTime) {
  const year = dateTime.getFullYear()
  const month = dateTime.getMonth() + 1
  const day = dateTime.getDate()
  const date = year + '-' + month + '-' + day
  return date
}

function authLocation() {
  console.log('用户拒绝授权')
  wx.showModal({
    confirmText: '去授权',
    content: '您已拒绝对您位置获取的授权，无法获取您的位置进入地图，点击去授权重新获取您的地理位置。',
    success(res) {
      if (res.confirm) {
        wx.openSetting({
          success (res) {
            
          }
        })
      } else if (res.cancel) {
        wx.navigateBack({
          delta: 0,
        })
      }
    }
  })
}
module.exports = {
  formatDate: formatDate,
  authLocation: authLocation
}