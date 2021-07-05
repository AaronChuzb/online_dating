const https=''
/**
 * 
 * @param {*} file 
 */
function uploader(file){
  return new Promise((resolve, reject)=>{
    wx.showLoading({
      title: '上传中',
    })
    wx.uploadFile({
      url: https + '/api/index/upload/uploadimage',
      filePath: file.url,
      name: 'file',
      success(res) {
        let data = JSON.parse(res.data)
        wx.hideLoading()
        resolve(https + data.data.path)
      },
      fail(err){
        reject(err)
      }
    })
  }) 
}
export default uploader