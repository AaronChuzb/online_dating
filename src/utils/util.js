/*
 * @Author: AaronChu
 * @Date: 2021-07-05 16:34:16
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-07-09 10:12:17
 * @FilePath: \online_dating\src\utils\util.js
 */

/**
 * @description: 传入现在的时间返回年月日
 * @param {Date} dateTime newDate()
 * @return {String} 'year-month-day'
 */
function formatDate (dateTime) {
  const year = dateTime.getFullYear()
  const month = dateTime.getMonth() + 1
  const day = dateTime.getDate()
  const date = year + '-' + month + '-' + day
  return date
}
module.exports = {
  formatDate: formatDate
}
