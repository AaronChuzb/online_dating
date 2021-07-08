/*
 * @Author: AaronChu
 * @Date: 2021-07-07 17:40:10
 * @LastEditTime: 2021-07-08 10:39:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \online_dating\src\components\rate\rate.js
 */
// components/rate/rate.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value: {
      type: Number,
      default: 3
    },
    size: {
      type: Number,
      default: 64
    },
    gap: {
      type: Number,
      default: 20,
    }
  },
  data: {
    rate: 3,
    noneRate: 2,
    width: 64,
    gaps: 20,
  },
  observers: {
    'value,size,gap': function (value,size,gap) {
      this.setData({
        rate: value,
        noneRate: 5 - value,
        width: size,
        gaps: gap
      })
    },
  },
  methods: {

  }
})
