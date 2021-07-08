/*
 * @Author: AaronChu
 * @Date: 2021-07-08 17:07:41
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-07-08 18:12:58
 * @FilePath: \online_dating\src\components\map\state-four\index.js
 */
// components/map/input-phone/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  data: {

  },
  methods: {
    cancel () {
      this.triggerEvent('cancel')
    },
    sure () {
      this.triggerEvent('sure', this.data.veCode)
    }
  }
})
