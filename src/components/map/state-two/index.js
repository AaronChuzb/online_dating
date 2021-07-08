// components/map/input-phone/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    veCode: new Array(),
  },

  /**
   * 组件的方法列表
   */
  methods: {
    inputValue(e) {
      let value = e.detail.value;
      let arr = [...value];
      this.setData({ veCode: arr })
    },
    toLocation(){
      this.triggerEvent('location')
    },
    cancel() {
      this.triggerEvent('cancel')
    },
    sure(){
      this.triggerEvent('sure', this.data.veCode)
    }
  }
})
