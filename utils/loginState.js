/*
 * @Author: your name
 * @Date: 2021-07-05 16:36:35
 * @LastEditTime: 2021-07-05 16:53:53
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \online_dating\utils\loginState.js
 */


const login = {
  /**
   * 
   * 
   * @param {Function} callBack 登录后的回调函数
   */
  getUserInfo(callBack){
    wx.getUserProfile({
      desc: '个人中心资料显示',
      success: (res) => {
        try{
          wx.setStorage({
            data: res.userInfo.nickName,
            key: 'nickName',
          })
          wx.setStorage({
            data: res.userInfo.avatarUrl,
            key: 'avatarUrl',
          })
          let name = res.userInfo.nickName
          let ava = res.userInfo.avatarUrl
          wx.login({
            success (res) {
              if (res.code) {
                /* wx.$api.login(res.code, name, ava).then(res =>{
                  wx.setStorageSync('token', res.data.token)
                  wx.showToast({
                    title: '登录成功',
                    icon: "none"
                  })
                  //登录成功后执行回调函数
                  callBack()
                }) */
              } else {
                wx.showToast({
                  title: '登录失败',
                  icon: "none"
                })
              }
            }
          })
        } catch (e){
          wx.showToast({
            title: '数据保存失败，请稍后重试',
            icon: 'none'
          })
        }
      }
    })
  },
  /**
   * 
   * @param {Function} callBack 回调函数，检测完状态如果未登录，调用登录后的回调函数
   * @returns {Boolean} 未登录会弹出窗口提示用户登录，用户取消返回false，点击确定会进行登录流程，随后返回true，如果用户已登录直接返回true
   */
  status(callBack){
    if(!wx.getStorageSync('token')){
      let that = this
      wx.showModal({
        title:'',
        content:'您暂未登录，请先登录。',
        success:function(res){
          if(res.confirm){
            that.getUserInfo(callBack)
          } else {
            return false
          }
        }
      })
    }
    return true
  },
}

export default loginState