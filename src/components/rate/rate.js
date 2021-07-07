/*
 * @Author: AaronChu
 * @Date: 2021-07-07 17:40:10
 * @LastEditTime: 2021-07-07 17:54:05
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
    value:{
      type: Number,
      default: 3
    }
  },
  data: {
    rate: 3,
    noneRate: 2,
  },
  observers: {
    'value': function (value){
      this.setData({
        rate: value,
        noneRate: 5 - value
      })
    }
  },
  methods: {

  }
})
