Page({

  /**
   * 页面的初始数据
   */
  data: {
    stories:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.id);
    var that = this;
    wx.request({
      url: "https://news-at.zhihu.com/api/4/theme/"+options.id,
      success:function(res){
        // console.log(res.data.stories);
        that.setData({
          stories: res.data.stories
        })
      },
      fail:function(err){
        console.log(err);
      },
      complete:function(){
        // console.log("complete");
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  story:function(e){
    wx.navigateTo({
      url: '../story/story?id='+e.currentTarget.dataset.id,
    })
  }
})
