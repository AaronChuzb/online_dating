Component({
  properties: {

  },
  data: {
    showDrawer: false
  },

  methods: {
    powerDrawer(e) {
      var currentStatus = e.currentTarget.dataset.status;
      this.util(currentStatus)
    },
    /**
     * 
     * @param {String} currentStatus open：开； close：关
     */
    util(currentStatus) {
      // 第1步：创建动画实例 
      var animation = wx.createAnimation({
        duration: 150, //动画时长
        timingFunction: "ease", //线性
        delay: 0 //0则不延迟
      });
      // 第2步：这个动画实例赋给当前的动画实例
      this.animation = animation;
      // 第3步：执行第一组动画：x轴不偏移；
      animation.translateX(0).step();
      // 第4步：导出动画对象赋给数据对象储存
      this.setData({
        animationData: animation.export()
      })
      // 第5步：设置定时器到指定时候后，执行第二组动画
      setTimeout(function () {
        // 执行第二组动画：X轴偏移22px，停
        animation.translateX(220).step()
        // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象
        this.setData({
          animationData: animation
        })
        //关闭抽屉
        if (currentStatus == "close") {
          this.setData({
            showDrawer: false
          });
        }
      }.bind(this), 200)
      // 显示抽屉
      if (currentStatus == "open") {
        this.setData({
          showDrawer: true
        });
      }
    },
  }
})
