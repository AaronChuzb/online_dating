Component({
  properties: {
    isFullScreen: {
      type: Boolean,
      default: false
    }
  },
  data: {
    fullScreen: false
  },
  /*  observers: {
    isFullScreen: function (isFullScreen) {
      this.setData({
        fullScreen: isFullScreen
      })
    }
  }, */
  methods: {
    toggleFullScreen () {
      this.setData({
        fullScreen: !this.data.fullScreen
      })
    }
  }
})
