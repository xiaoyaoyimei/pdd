Page({
  data: {
    imgUrls: [
      '/image/p1.png',
      '/image/p2.png',
      '/image/p3.png'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 3000,
    duration: 800,
    ewm:false
  },
  showewm(){
    wx.login({
      success: function (res) {
        var code = res.code;
        wx.requestPayment(
          {
            'timeStamp': '',
            'nonceStr': '',
            'package': '',
            'signType': 'MD5',
            'paySign': '',
            'success': function (res) { },
            'fail': function (res) { },
            'complete': function (res) { }
          }) 

      }
      
    });

    this.setData({
      ewm:true
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '砍价互惠加我,xiaoyaoyimei0717', // 分享标题
      desc: '备注：砍价互惠', // 分享描述
      path: '/page/component/index/index' // 分享路径
    }
  },
  free(){
    wx.showModal({
      title: '免费服务',
      content: '加微信号xiaoyaoyimei0717咨询',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })  
  },
  testpay(){
    wx.login({
      success: function (res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session?appid="wxc5ebc3772314e2ca"&secret="ece09911ade7f1cfc1ae58c6c7854fd7"&js_code=JSCODE&grant_type=authorization_code',
            data: {
              code: res.code
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    });


    
  }
})