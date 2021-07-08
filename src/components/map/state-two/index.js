// components/map/input-phone/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  data: {
    veCode: []
  },
  methods: {
    inputValue (e) {
      const value = e.detail.value
      const arr = [...value]
      this.setData({ veCode: arr })
    },
    toLocation () {
      this.triggerEvent('location')
    },
    cancel () {
      this.triggerEvent('cancel')
    },
    sure () {
      this.triggerEvent('sure', this.data.veCode)
    }
  }
})
