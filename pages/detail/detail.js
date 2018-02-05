Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.id);
    var that = this;
    wx.request({
      url: "https://news-at.zhihu.com/api/4/news/" + options.id,
      success:function(res){
        console.log(res.data);
        var text = res.data.body;
        // 匹配后生成数组
        text = text.match(/<p>.*?<\/p>/g);
        // console.log(text);
        //数组长度
        var len = text.length;
        //遍历数组
        for(var i=0;i<len;i++){
          //去除段落中的标签（主要行内标签）
          text[i] = text[i].replace(/<p>/g, "").replace(/<\/p>/g, "").replace(/<\/strong>/g, "").replace(/<strong>/g, "").replace(/<\/em>/g, "").replace(/<em>/g, "").replace(/<\/span>/g, "").replace(/<span>/g, "").replace(/<\/i>/g, "").replace(/<i>/g, "");
          if (text[i].match(/</g)){
              text[i]="";
          }
          // console.log(text[i]);
        }
        // str = str.replace('/>/g', '').replace('/</g', '');

        that.setData({
          detail:text,
          src: res.data.image
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
    
  }
})