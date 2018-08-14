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
  }
})