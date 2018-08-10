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
    this.setData({
      ewm:true
    })
  }
})