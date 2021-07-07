/*
 * @Author: AaronChu
 * @Date: 2021-07-05 16:34:16
 * @LastEditTime: 2021-07-07 10:34:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \online_dating\utils\util.js
 */

// util.js
// 时间戳转换成日期时间
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

/*
 *                   江城子 . 程序员之歌
 *
 *               十年生死两茫茫，码代码，到天亮。
 *                   千行代码，Bug何处藏。
 *               纵使上线又怎样，朝令改，夕断肠。
 *
 *               客户每天新想法，日日改，天天忙。
 *                   相顾无言，惟有泪千行。
 *               每夜灯火阑珊处，人难寐，加班狂。
 *
 */
