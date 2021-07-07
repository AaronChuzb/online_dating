const https = '' // 请求地址

// request封装
/**
 * @param {String} url api地址
 * @param {Object} data 传入的数据，对象类型
 * @param {String} method 请求方法（默认Post）
 */
function request (url, data, method) {
  return new Promise((resolve, reject) => {
    wx.showLoading({
      title: '加载中...',
      duration: 6000
    })
    let header
    if (wx.getStorageSync('token')) { // 判断本地是否保存的token，如果有就添加到头部中
      header = {
        token: wx.getStorageSync('token'),
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    } else {
      header = {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    };
    wx.request({
      url: https + url,
      data: data || {},
      header: header,
      method: method || 'Post',
      dataType: 'json',
      responseType: 'text',
      success: res => {
        wx.hideLoading()
        const statusCode = res.statusCode
        if (statusCode >= 200 && statusCode < 400) {
          if (res.data.code == 1) {
            resolve(res.data)
          } else if (res.data.code == 10) {
            wx.showModal({
              title: '',
              content: '您的登录已过期，请重新登录。',
              success: function (res) {
                console.log(res)
                if (res.confirm) {
                  wx.$login.getInfo()
                } else {
                  console.log('用户取消登录')
                }
              }
            })
          } else {
            if (res.data.code == 0) {
              reject(res.data)
            }
            wx.showToast({
              title: res.data.msg,
              icon: 'none'
            })
          }
        } else if (statusCode == 401) {
        } else {
          catchError('服务器异常，请稍后再试！')
        }
      },
      fail: res => {
        console.log(res)
        wx.hideLoading()
        wx.showToast({
          title: '网络异常，请检查网络状态',
          icon: 'none',
          duration: 3000
        })
      }
    })
  })
}

function catchError (str) {
  wx.showToast({
    title: str,
    icon: 'none',
    duration: 3000
  })
}

export default request
