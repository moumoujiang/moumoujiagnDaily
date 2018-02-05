//index.js

var utils = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    banner:[],
    more:[],
    loading:false,
    now:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var date = Number(utils.formatDate(new Date()));
    that.setData({
      now: date
    })
    wx.request({
      url: "https://news-at.zhihu.com/api/4/news/latest",
      success:function(res){
        that.setData({
           list: res.data.stories,
           banner: res.data.top_stories
        });
        // console.log(res.data);
        // console.log(that.data.list[0].id);
      },
      fail:function(err){
        console.log(err);
      },
      complete:function(){
        // console.log('complete');
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
  detail:function(e){
      wx.navigateTo({
        url: '../detail/detail?id=' + e.currentTarget.dataset.id,
      })
  },
  more:function(e){
    var that = this;
    var day = that.data.now-1;
    console.log(day);
    that.setData({
      loading:true,
      now:day
    });
    
    wx.request({
      url: "https://news-at.zhihu.com/api/4/news/before/"+day,
      success: function (res) {
        that.setData({
          more: res.data.stories
        });
        // console.log(res.data);
        // console.log(that.data.more);
      var arr = that.data.list;
      var arr1 = that.data.more;
      arr = arr.concat(arr1);
      // console.log(arr);

      that.setData({
        list: arr
      });
      },
      fail: function (err) {
        console.log(err);
      },
      complete: function () {
        // console.log('complete');
        that.setData({
          loading:false
        })
      }
    })
  }
})