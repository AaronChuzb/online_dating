/*
 * @Author: AaronChu
 * @Date: 2021-07-07 09:26:52
 * @LastEditTime: 2021-07-07 17:02:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \online_dating\src\components\order\order.js
 */
// components/order/order.js
Component({
  properties: {

  },
  data: {
    showDialog: false,
    button: [{text: '确定'}],
    index: 0
  },
  methods: {
    dialogShow(e) {
      this.setData({
        showDialog: true,
        index: Math.round(Math.random())
      })
    },
    onClose(e) {
      this.setData({
        showDialog: false,
      })
    },
  }
})
